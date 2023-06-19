import React, { Children, Component } from 'react'
import { HomeNavBar } from '../components/bars/NavBar'
import { Footer } from '../components/bars/Footer'
import { SuccessMessage } from '../components/ui_components/StatusMessage'

export function HomePage() {
    return (
        <div>
            <div className="container mt-2">
                <header>
                    <SuccessMessage title="Gérez vos économies avec TCArgent !" notDismissible={true}><p>{welcome}</p></SuccessMessage>
                </header>
            </div>

            <div className="container mb-5 d-flex justify-content-center align-items-center">
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
                            <h4>Gestion des comptes bancaires</h4>
                            <p>Ayez une vision globales de vos comptes bancaires même s'ils ne sont pas dans la même banque.</p>
                        </div>

                        <div className="bubble">
                            <h4>Monitoring de votre patrimoine</h4>
                            <p></p>
                            <p>En plus de gérer vos comptes, visualisé votre patrimoine globales.</p>
                        </div>

                        <div className="bubble">
                            <h4>Gestion des investissements</h4>
                            <p></p>
                            <p>Ayez une vision globale et de manière durable de vos différents investissements.</p>
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

            </div>
        </div >
    )
}

const welcome = "Nous sommes ravis de vous accueillir parmi notre communauté grandissante d'utilisateurs dédiés à la maîtrise de leurs finances. Que vous soyez un novice en matière de gestion financière ou un expert chevronné, notre plateforme est conçue pour vous aider à atteindre vos objectifs financiers. Avec notre site, vous pourrez suivre vos revenus, dépenses, investissements et budgets en un seul endroit pratique.Nous mettons à votre disposition des outils conviviaux et intuitifs pour vous aider à visualiser et à analyser vos données financières, vous permettant ainsi de prendre des décisions éclairées en toute confiance."