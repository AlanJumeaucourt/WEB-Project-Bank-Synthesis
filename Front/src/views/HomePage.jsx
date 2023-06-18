import React, { Children, Component } from 'react'
import { useKeycloak } from "@react-keycloak/web";
import { HomeNavBar } from '../components/bars/NavBar'
import { Footer } from '../components/bars/Footer'

export function HomePage() {
    return (
        <div>
            <HomeNavBar />

            <div class="container">
                {/*<div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">a
                        <div class="row">
                            <div class="col">1</div>
                            <div class="col">2</div>
                            <div class="col">3</div>
                            <div class="col">4</div>

                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">b</div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">c</div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">d</div>
                </div>*/}

                <header>
                    <h1 style={{
                        marginBottom: '20px',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        Bienvenue sur notre site de gestion financière TCArgent</h1>

                </header>
            </div>

            <div class="container" style={{
                marginBottom: '40px',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <img
                    src="Finance_picture.png"
                    title="Finance tool"
                    width="60%"
                    height="auto" />
            </div>
            <div>
                <body>
                    <div id='Ryad' className="container" style={{ marginBottom: '30px' }}>
                        <div className="bubble">
                            <h3>Gestion des comptes bancaires des utilisateurs</h3>
                            <p>Description de la fonctionnalité...</p>
                        </div>

                        <div className="bubble">
                            <h3>Monitoring des comptes et patrimoines</h3>
                            <p>Description de la fonctionnalité...</p>
                        </div>

                        <div className="bubble">
                            <h3>Gestion des prêts</h3>
                            <p>Description de la fonctionnalité...</p>
                        </div>

                        <style>
                            {`
                            #Ryad {
                                display: flex;
                                justify-content: space-around;
                              }

                            .bubble {
                            width: 300px;
                            padding: 20px;
                            background-color: #f2f2f2;
                            border-radius: 8px;
                            margin-right: 20px;
                            }

                            .bubble h3 {
                            margin-top: 0;
                            }
                            `}
                        </style>
                    </div>
                </body>

                <div class="container">
                    <h2 style={{ marginTop: '20px' }}>Qui sommes nous et que proposons nous?</h2>
                    <p>Nous sommes une start-up passionnée par la technologie financière, offrant un site web open source pour gérer facilement vos comptes bancaires et vos investissements. Notre plateforme conviviale et sécurisée vous permet de suivre vos transactions, consulter vos soldes et bien plus encore.</p>
                    <p>Notre objectif est de rendre la gestion financière accessible à tous. Avec notre site web open source, nous encourageons la collaboration et l'évolution continue de nos fonctionnalités. Nous sommes fiers de fournir un produit de qualité, soutenu par une équipe talentueuse et soucieuse de votre satisfaction.</p>
                    <p>Rejoignez-nous dès aujourd'hui et prenez le contrôle de vos finances avec TCArgent. Simplifiez votre vie financière et contribuez à un écosystème financier plus ouvert et transparent.</p>
                </div>


            </div>

            <Footer />
        </div >
    )
}