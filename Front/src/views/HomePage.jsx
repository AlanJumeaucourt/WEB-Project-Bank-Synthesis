import React from 'react'
import { SuccessMessage } from '../components/ui_components/StatusMessage'

export function HomePage() {
    return (
        <div>
            <div className="container mt-2">
                <header>
                    <SuccessMessage title="Bienvenue !!" notDismissible={true}><p>{welcome}</p></SuccessMessage>
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

                <div className="container">
                    <h2 className='mt-4'>Qui sommes nous et que proposons nous?</h2>
                    <p>Nous sommes une start-up passionnée par la technologie financière, offrant un site web open source pour gérer facilement vos comptes bancaires et vos investissements. Notre plateforme conviviale et sécurisée vous permet de suivre vos transactions, consulter vos soldes et bien plus encore.</p>
                    <p>Notre objectif est de rendre la gestion financière accessible à tous. Avec notre application web open source, nous encourageons la collaboration et l'évolution continue de nos fonctionnalités. Nous sommes fiers de fournir un produit de qualité, soutenu par une équipe talentueuse et soucieuse de votre satisfaction.</p>
                    <p>Rejoignez-nous dès aujourd'hui et prenez le contrôle de vos finances avec TCArgent. Simplifiez votre vie financière et contribuez à un écosystème financier plus ouvert et transparent.</p>
                </div>
            </div>
        </div >
    )
}

const welcome = "Nous sommes ravis de vous accueillir parmi notre communauté grandissante d'utilisateurs dédiés à la maîtrise de leurs finances. Que vous soyez un novice en matière de gestion financière ou un expert chevronné, notre plateforme est conçue pour vous aider à atteindre vos objectifs financiers. Avec notre site, vous pourrez suivre vos revenus, dépenses, investissements et budgets en un seul endroit pratique.Nous mettons à votre disposition des outils conviviaux et intuitifs pour vous aider à visualiser et à analyser vos données financières, vous permettant ainsi de prendre des décisions éclairées en toute confiance."