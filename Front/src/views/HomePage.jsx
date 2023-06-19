import React, { Children, Component } from 'react'
import { HomeNavBar } from '../components/bars/NavBar'
import { Footer } from '../components/bars/Footer'

export function HomePage() {
    return (
        <div>
            <HomeNavBar/>

            <div class="container">

                <header>
                    <h1>Bienvenue sur notre site de gestion financière TCArgent</h1>
                </header>
            </div>

            <div class="container">
                        <img
                            src="Finance_picture.png"
                            title="Finance tool"
                            width="100%"
                            height="auto" />
            </div>
            <div>
                <body>
                    <div class="container">
                        <h2>Fonctionnalitées</h2>
                        <p>Voici une liste de vos comptes bancaires :</p>
                        <ul>
                            <li>Compte Chèque</li>
                            <li>Compte Épargne</li>
                            <li>Compte d'Investissement</li>
                        </ul>
                    </div>

                    <div class="container">
                        <h2>Vos Investissements</h2>
                        <p>Voici une liste de vos investissements :</p>
                        <ul>
                            <li>Actions</li>
                            <li>Obligations</li>
                            <li>Fonds communs de placement</li>
                        </ul>
                    </div>

                    <div class="container">
                        <h2>Qui sommes nous et que proposons nous?</h2>
                        <p>Nous sommes une start-up passionnée par la technologie financière, offrant un site web open source pour gérer facilement vos comptes bancaires et vos investissements. Notre plateforme conviviale et sécurisée vous permet de suivre vos transactions, consulter vos soldes et bien plus encore.</p>
                        <p>Notre objectif est de rendre la gestion financière accessible à tous. Avec notre site web open source, nous encourageons la collaboration et l'évolution continue de nos fonctionnalités. Nous sommes fiers de fournir un produit de qualité, soutenu par une équipe talentueuse et soucieuse de votre satisfaction.</p>
                        <p>Rejoignez-nous dès aujourd'hui et prenez le contrôle de vos finances avec TCArgent. Simplifiez votre vie financière et contribuez à un écosystème financier plus ouvert et transparent.</p>
                    </div>
                </body>

            </div>

            <Footer/>
        </div >
    )
}