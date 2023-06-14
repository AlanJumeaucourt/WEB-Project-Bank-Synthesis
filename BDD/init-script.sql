SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

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


