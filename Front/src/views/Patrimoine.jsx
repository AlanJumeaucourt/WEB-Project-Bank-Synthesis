import React, { Component } from 'react'
import { useEffect, useState } from "react";
import { Card } from '../components/ui_components/Cards'
import { BasicLineChart } from '../components/charts/Lines'

const HomePage = () => {
    const [priceData, setPriceData] = useState({ dates: [], priceUsd: [] });
    
    useEffect(() => {
      const fetchDataFromAPI = async () => {
        try {
          const response = await fetch('http://localhost:8082/comptes/1/soldeperiode');
          const data = await response.json();
          console.log('Données de l\'API:', data);
  
          // Traitement des données pour le graphique
          const dates = Object.keys(data);
          const prices = Object.values(data);
  
          setPriceData({ dates, priceUsd: prices });
        } catch (error) {
          console.log('Erreur lors de l\'appel à l\'API:', error);
        }
      };
  
      fetchDataFromAPI();
    }, []);


class Patrimoine extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>This is the Patrimoine</h1>
                </div>

                <div>
                    <Card title="Titre de ma card" footer="Footer" header="Header">
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, recusandae aspernatur. Doloremque, sed vero? Modi nemo illum, consectetur voluptatum quis, aspernatur delectus eligendi, deserunt praesentium suscipit dolore. Repellat, fugit non.</p>
                        <div style={{height: "300px"}}>
                            <BasicLineChart title='Solde Compte' xData={priceData.dates} name="legende" yData={priceData.priceUsd} color='red' />
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

export { Patrimoine }