import React from 'react'
import { SuccessMessage } from '../components/ui_components/StatusMessage'
import './css/Homepage.css'

export function HomePage() {
    return (
        <div>
            <div className="container mt-2">
                <header>
                    <SuccessMessage title="Gérez vos économies avec TCArgent !" notDismissible={true}>{welcome}</SuccessMessage>
                </header>
            </div>

            <div className="container mb-5 d-flex justify-content-center align-items-center">
                <img
                    src="Finance_picture.png"
                    title="Finance tool"
                    width="60%"
                    alt='image_finance'
                    height="auto" />
            </div>
            <div>
                <div className="container d-flex justify-content-around mb-4">
                    <div className="bubble">
                        <h4>Gestion des comptes bancaires</h4>
                        <p>Ayez une vision globales de vos comptes bancaires même s'ils ne sont pas dans la même banque.</p>
                    </div>

                    <div className="bubble">
                        <h4>Monitoring de votre patrimoine</h4>
                        <p>En plus de gérer vos comptes, visualisé votre patrimoine globales.</p>
                    </div>

                    <div className="bubble">
                        <h4>Gestion des investissements</h4>
                        <p>Ayez une vision globale et de manière durable de vos différents investissements.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

const welcome = "Nous sommes ravis de vous accueillir parmi notre communauté grandissante d'utilisateurs dédiés à la maîtrise de leurs finances. Que vous soyez un novice en matière de gestion financière ou un expert chevronné, notre plateforme est conçue pour vous aider à atteindre vos objectifs financiers. Avec notre site, vous pourrez suivre vos revenus, dépenses, investissements et budgets en un seul endroit pratique.Nous mettons à votre disposition des outils conviviaux et intuitifs pour vous aider à visualiser et à analyser vos données financières, vous permettant ainsi de prendre des décisions éclairées en toute confiance."