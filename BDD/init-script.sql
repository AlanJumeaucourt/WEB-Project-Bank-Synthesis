-- phpMyAdmin SQL Dump
-- version 3.2.1
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- Généré le : Mer 24 Février 2010 à 18:31
-- Version du serveur: 5.1.37
-- Version de PHP: 5.3.0

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Base de données: `vente_occasion`
--

-- --------------------------------------------------------

--
-- Structure de la table `cds`
--

CREATE TABLE IF NOT EXISTS `cds` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `vendeur` varchar(30) NOT NULL,
  `titre_album` varchar(40) NOT NULL,
  `interprete` varchar(40) NOT NULL,
  `annee` year(4) NOT NULL,
  `genre` varchar(40) NOT NULL,
  `prix` float(4,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE latin1_general_ci AUTO_INCREMENT=25 ;

--
-- Contenu de la table `cds`
--

INSERT INTO `cds` (`id`, `vendeur`, `titre_album`, `interprete`, `annee`, `genre`, `prix`) VALUES
(1, 'Tom', 'cocoon crash', 'K''s choice', 1998, 'Pop Rock', 10.20),
(2, 'Jerry', 'suprême NTM', 'NTM', 1998, 'Rap', 8.30),
(3, 'Jo', 'Vivaldi 1', 'Nigel Kennedy', 2004, 'Classique', 12.00),
(5, 'Jack', 'Amor Doloroso', 'Jacques Higelin', 2006, 'Variété française', 10.40),
(6, 'Jack', 'The ideal crash', 'dEUS', 1999, 'Pop Rock', 14.10),
(7, 'Jerry', '666.667 club', 'Noir Desir', 1996, 'Pop Rock', 9.50),
(8, 'Jo', 'Morbid visions', 'Sepultura', 1991, 'Metal', 7.00),
(9, 'Tom', 'Doolittle', 'Pixies', 1989, 'Pop Rock', 8.70),
(10, 'Jo', 'Tu vas pas mourir de rire', 'Mickey3d', 2002, 'Variété française', 7.80),
(11, 'Jack', 'Le jour du poisson', 'Thomas Fersen', 1997, 'Variété française', 8.60),
(12, 'Tom', 'My favorite things', 'John Coltrane', 1961, 'Jazz', 9.50),
(13, 'Tom', 'Concerti', 'Paolo Conte', 1989, 'Jazz', 6.80),
(14, 'Jack', 'Burn to shine', 'Ben Harper', 1999, 'Pop Rock', 10.00),
(15, 'Jo', 'Kid A', 'Radiohead', 2000, 'Pop Rock', 9.30),
(16, 'Jerry', 'In the hell of Patchinko', 'Mano Negra', 1992, 'Pop Rock', 7.50),
(17, 'Jo', 'Histoire du soldat', 'Jean Cocteau', 1963, 'Classique', 7.20),
(18, 'Jerry', 'The rise', 'Julien Lourau', 2001, 'Jazz', 6.10),
(19, 'Jack', 'Irfan le héros', 'Les ogres de Barback', 1999, 'Variété française', 6.70),
(20, 'Jerry', 'L''homme à tue-tête', 'Debout sur le zinc', 2001, 'Variété française', 8.60),
(21, 'Tom', 'Hello Louis', 'Louis Armstrong', 1990, 'Jazz', 12.80),
(22, 'Jack', 'Strange brew', 'Cream', 1983, 'Pop Rock', 7.60),
(23, 'Jo', 'Live from central park', 'Sheryl Crow', 1999, 'Pop Rock', 8.20),
(24, 'Tom', 'Persona non grata', 'Urban Dance Squad', 1994, 'Rap', 5.80);

-- create the keycloak DB and give access to user
CREATE DATABASE IF NOT EXISTS `keycloak`;
GRANT ALL ON `keycloak`.* TO 'user'@'%';


-- User1 Database to test
CREATE SCHEMA IF NOT EXISTS  User1;
CREATE TABLE User1.Establishments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE User1.Accounts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  account_number VARCHAR(255),
  account_name VARCHAR(255),
  establishment_id INT,
  type VARCHAR(255),
  tag VARCHAR(255),
  FOREIGN KEY (establishment_id) REFERENCES User1.Establishments(id)
);

CREATE TABLE User1.Transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  source_account_id INT,
  destination_account_id INT,
  transaction_date TIMESTAMP,
  amount FLOAT,
  description VARCHAR(255),
  category VARCHAR(255),
  FOREIGN KEY (source_account_id) REFERENCES User1.Accounts(id),
  FOREIGN KEY (destination_account_id) REFERENCES User1.Accounts(id)
);

INSERT INTO User1.Establishments (name) VALUES 
('Etablissement 1'),
('Etablissement 2'),
('tablissement 3');

INSERT INTO User1.Accounts (account_number, account_name, establishment_id, type, tag) VALUES 
('123456789', 'Compte Etablissement 1', 1, 'Compte courant', 'Tag 1'),
('987654321', 'Compte Etablissement 2', 2, 'Compte épargne', 'Tag 2'),
('456789123', 'Compte Etablissement 3', 3, 'Compte courant', 'Tag 3');

INSERT INTO User1.Transactions (source_account_id, destination_account_id , transaction_date, amount, description, category) 
VALUES 
  ((SELECT id FROM User1.Accounts ORDER BY RAND() LIMIT 1), 
  (SELECT id FROM User1.Accounts WHERE id != (SELECT id FROM User1.Accounts ORDER BY RAND() LIMIT 1) ORDER BY RAND() LIMIT 1), 
  NOW(), 
  ROUND(RAND() * 1000, 2), 
  'Transaction #1', 
  'Category 1');

INSERT INTO User1.Transactions (source_account_id, destination_account_id , transaction_date, amount, description, category) 
VALUES 
  ((SELECT id FROM User1.Accounts ORDER BY RAND() LIMIT 1), 
  (SELECT id FROM User1.Accounts WHERE id != (SELECT id FROM User1.Accounts ORDER BY RAND() LIMIT 1) ORDER BY RAND() LIMIT 1), 
  NOW(), 
  ROUND(RAND() * 1000, 2), 
  'Transaction #1', 
  'Category 1');

INSERT INTO User1.Transactions (source_account_id, destination_account_id , transaction_date, amount, description, category) 
VALUES 
  ((SELECT id FROM User1.Accounts ORDER BY RAND() LIMIT 1), 
  (SELECT id FROM User1.Accounts WHERE id != (SELECT id FROM User1.Accounts ORDER BY RAND() LIMIT 1) ORDER BY RAND() LIMIT 1), 
  NOW(), 
  ROUND(RAND() * 1000, 2), 
  'Transaction #1', 
  'Category 1');


INSERT INTO User1.Transactions (source_account_id, destination_account_id, transaction_date, amount, description, category) 
SELECT 
  (SELECT id FROM User1.Accounts WHERE establishment_id = 1 ORDER BY RAND() LIMIT 1), 
  (SELECT id FROM User1.Accounts WHERE establishment_id != 1 ORDER BY RAND() LIMIT 1), 
  DATE_ADD(NOW(), INTERVAL -2 YEAR) + INTERVAL FLOOR(RAND() * 730) DAY, 
  ROUND(RAND() * 1000, 2), 
  CONCAT('Transaction #', id), 
  CONCAT('Category ', FLOOR(RAND() * 10) + 1) 
FROM User1.Transactions 
UNION ALL 
SELECT 
  (SELECT id FROM User1.Accounts WHERE establishment_id = 1 ORDER BY RAND() LIMIT 1), 
  (SELECT id FROM User1.Accounts WHERE establishment_id = 2 ORDER BY RAND() LIMIT 1), 
  DATE_ADD(NOW(), INTERVAL -2 YEAR) + INTERVAL FLOOR(RAND() * 730) DAY, 
  ROUND(RAND() * 1000, 2), 
  CONCAT('Transaction #', id), 
  CONCAT('Category ', FLOOR(RAND() * 10) + 1) 
FROM User1.Transactions 
UNION ALL 
SELECT 
  (SELECT id FROM User1.Accounts WHERE establishment_id = 2 ORDER BY RAND() LIMIT 1), 
  (SELECT id FROM User1.Accounts WHERE establishment_id = 3 ORDER BY RAND() LIMIT 1), 
  DATE_ADD(NOW(), INTERVAL -2 YEAR) + INTERVAL FLOOR(RAND() * 730) DAY, 
  ROUND(RAND() * 1000, 2), 
  CONCAT('Transaction #', id), 
  CONCAT('Category ', FLOOR(RAND() * 10) + 1) 
FROM User1.Transactions 
LIMIT 100;

INSERT INTO User1.Transactions (source_account_id, destination_account_id , transaction_date, amount, description, category) 
VALUES 
  ((SELECT id FROM User1.Accounts ORDER BY RAND() LIMIT 1), 
  (SELECT id FROM User1.Accounts WHERE id != (SELECT id FROM User1.Accounts ORDER BY RAND() LIMIT 1) ORDER BY RAND() LIMIT 1), 
  NOW(), 
  ROUND(RAND() * 1000, 2), 
  'Transaction #1', 
  'Category 1');

INSERT INTO User1.Transactions (source_account_id, destination_account_id , transaction_date, amount, description, category) 
VALUES 
  ((SELECT id FROM User1.Accounts ORDER BY RAND() LIMIT 1), 
  (SELECT id FROM User1.Accounts WHERE id != (SELECT id FROM User1.Accounts ORDER BY RAND() LIMIT 1) ORDER BY RAND() LIMIT 1), 
  NOW(), 
  ROUND(RAND() * 1000, 2), 
  'Transaction #1', 
  'Category 1');

INSERT INTO User1.Transactions (source_account_id, destination_account_id , transaction_date, amount, description, category) 
VALUES 
  ((SELECT id FROM User1.Accounts ORDER BY RAND() LIMIT 1), 
  (SELECT id FROM User1.Accounts WHERE id != (SELECT id FROM User1.Accounts ORDER BY RAND() LIMIT 1) ORDER BY RAND() LIMIT 1), 
  NOW(), 
  ROUND(RAND() * 1000, 2), 
  'Transaction #1', 
  'Category 1');


INSERT INTO User1.Transactions (source_account_id, destination_account_id, transaction_date, amount, description, category) 
SELECT 
  (SELECT id FROM User1.Accounts WHERE establishment_id = 1 ORDER BY RAND() LIMIT 1), 
  (SELECT id FROM User1.Accounts WHERE establishment_id != 1 ORDER BY RAND() LIMIT 1), 
  DATE_ADD(NOW(), INTERVAL -2 YEAR) + INTERVAL FLOOR(RAND() * 730) DAY, 
  ROUND(RAND() * 1000, 2), 
  CONCAT('Transaction #', id), 
  CONCAT('Category ', FLOOR(RAND() * 10) + 1) 
FROM User1.Transactions 
UNION ALL 
SELECT 
  (SELECT id FROM User1.Accounts WHERE establishment_id = 1 ORDER BY RAND() LIMIT 1), 
  (SELECT id FROM User1.Accounts WHERE establishment_id = 2 ORDER BY RAND() LIMIT 1), 
  DATE_ADD(NOW(), INTERVAL -2 YEAR) + INTERVAL FLOOR(RAND() * 730) DAY, 
  ROUND(RAND() * 1000, 2), 
  CONCAT('Transaction #', id), 
  CONCAT('Category ', FLOOR(RAND() * 10) + 1) 
FROM User1.Transactions 
UNION ALL 
SELECT 
  (SELECT id FROM User1.Accounts WHERE establishment_id = 2 ORDER BY RAND() LIMIT 1), 
  (SELECT id FROM User1.Accounts WHERE establishment_id = 3 ORDER BY RAND() LIMIT 1), 
  DATE_ADD(NOW(), INTERVAL -2 YEAR) + INTERVAL FLOOR(RAND() * 730) DAY, 
  ROUND(RAND() * 1000, 2), 
  CONCAT('Transaction #', id), 
  CONCAT('Category ', FLOOR(RAND() * 10) + 1) 
FROM User1.Transactions 
LIMIT 100;

INSERT INTO User1.Transactions (source_account_id, destination_account_id , transaction_date, amount, description, category) 
VALUES 
  ((SELECT id FROM User1.Accounts ORDER BY RAND() LIMIT 1), 
  (SELECT id FROM User1.Accounts WHERE id != (SELECT id FROM User1.Accounts ORDER BY RAND() LIMIT 1) ORDER BY RAND() LIMIT 1), 
  NOW(), 
  ROUND(RAND() * 1000, 2), 
  'Transaction #1', 
  'Category 1');

INSERT INTO User1.Transactions (source_account_id, destination_account_id , transaction_date, amount, description, category) 
VALUES 
  ((SELECT id FROM User1.Accounts ORDER BY RAND() LIMIT 1), 
  (SELECT id FROM User1.Accounts WHERE id != (SELECT id FROM User1.Accounts ORDER BY RAND() LIMIT 1) ORDER BY RAND() LIMIT 1), 
  NOW(), 
  ROUND(RAND() * 1000, 2), 
  'Transaction #1', 
  'Category 1');

INSERT INTO User1.Transactions (source_account_id, destination_account_id , transaction_date, amount, description, category) 
VALUES 
  ((SELECT id FROM User1.Accounts ORDER BY RAND() LIMIT 1), 
  (SELECT id FROM User1.Accounts WHERE id != (SELECT id FROM User1.Accounts ORDER BY RAND() LIMIT 1) ORDER BY RAND() LIMIT 1), 
  NOW(), 
  ROUND(RAND() * 1000, 2), 
  'Transaction #1', 
  'Category 1');


INSERT INTO User1.Transactions (source_account_id, destination_account_id, transaction_date, amount, description, category) 
SELECT 
  (SELECT id FROM User1.Accounts WHERE establishment_id = 1 ORDER BY RAND() LIMIT 1), 
  (SELECT id FROM User1.Accounts WHERE establishment_id != 1 ORDER BY RAND() LIMIT 1), 
  DATE_ADD(NOW(), INTERVAL -2 YEAR) + INTERVAL FLOOR(RAND() * 730) DAY, 
  ROUND(RAND() * 1000, 2), 
  CONCAT('Transaction #', id), 
  CONCAT('Category ', FLOOR(RAND() * 10) + 1) 
FROM User1.Transactions 
UNION ALL 
SELECT 
  (SELECT id FROM User1.Accounts WHERE establishment_id = 1 ORDER BY RAND() LIMIT 1), 
  (SELECT id FROM User1.Accounts WHERE establishment_id = 2 ORDER BY RAND() LIMIT 1), 
  DATE_ADD(NOW(), INTERVAL -2 YEAR) + INTERVAL FLOOR(RAND() * 730) DAY, 
  ROUND(RAND() * 1000, 2), 
  CONCAT('Transaction #', id), 
  CONCAT('Category ', FLOOR(RAND() * 10) + 1) 
FROM User1.Transactions 
UNION ALL 
SELECT 
  (SELECT id FROM User1.Accounts WHERE establishment_id = 2 ORDER BY RAND() LIMIT 1), 
  (SELECT id FROM User1.Accounts WHERE establishment_id = 3 ORDER BY RAND() LIMIT 1), 
  DATE_ADD(NOW(), INTERVAL -2 YEAR) + INTERVAL FLOOR(RAND() * 730) DAY, 
  ROUND(RAND() * 1000, 2), 
  CONCAT('Transaction #', id), 
  CONCAT('Category ', FLOOR(RAND() * 10) + 1) 
FROM User1.Transactions 
LIMIT 100;


