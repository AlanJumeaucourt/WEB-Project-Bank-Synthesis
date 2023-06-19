import React, { useEffet, useState, Component } from 'react'
import { ButtonPrimary } from '../components/ui_components/Buttons'
import { SuccessMessage, WarningMessage, ErrorMessage } from '../components/ui_components/StatusMessage'
import { Card, Queue, Stack } from '../components/ui_components/Containers'

import { StackedAreaChart, SmoothedLineChart, SmoothedAreaChart } from '../components/charts/Lines'
import { PieEmpty, PieEmptySpace, PieHalf, PieFull } from '../components/charts/Pie'
import { TreeMap } from '../components/charts/TreeMap'
import { CreditSimulation } from '../components/charts/CreditSimulation'

import * as echarts from 'echarts';

import './css/Affichage.css'


function Investissement() {
  const [showChartGlobal, setShowChartGlobal] = useState(true);
  const [showChartAV, setShowChartAV] = useState(false);
  const [showChartPEA, setShowChartPEA] = useState(false);
  const [showChartCTO, setShowChartCTO] = useState(false);

  const handleGlobalClick = () => {
    setShowChartGlobal(true);
    setShowChartAV(false);
    setShowChartPEA(false);
    setShowChartCTO(false);
  };

  const handleAVClick = () => {
    setShowChartGlobal(false);
    setShowChartAV(true);
    setShowChartPEA(false);
    setShowChartCTO(false);
  };

  const handlePEAClick = () => {
    setShowChartGlobal(false);
    setShowChartAV(false);
    setShowChartPEA(true);
    setShowChartCTO(false);
  };

  const handleCTOClick = () => {
    setShowChartGlobal(false);
    setShowChartAV(false);
    setShowChartPEA(false);
    setShowChartCTO(true);
  };

  return (
    <body className="background">
      <h1>TCArgent - Investissement</h1>

      <p className='p-3'>Voici votre page qui résume vos investissements au fil du temps !</p>

      <div className="p-4">
        <Card>
          <div class="row">
            <div class="d-flex flex-row"></div>
            <div class="col-sm-3">
              <div class="card">
                <ButtonPrimary onClick={handleGlobalClick}>Récapitulatif</ButtonPrimary>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
                <ButtonPrimary onClick={handleAVClick}>Assurance Vie</ButtonPrimary>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
                <ButtonPrimary onClick={handlePEAClick}>PEA</ButtonPrimary>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
                <ButtonPrimary onClick={handleCTOClick}>CTO</ButtonPrimary>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="container">

        {showChartGlobal && (
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div style={{ height: "500px", width: "100%", margin: "1.5em" }} className="background">
              <SmoothedAreaChart title='Évolution globale' dispositionTitre='left' xData={['2019', '2020', '2021', '2022', '2023']} name="Évolution de vos investissements globaux" yData={[3400, 5000, 7000, 3800, 4500]} />
            </div>
            <div style={{ height: "500px", width: "100%", margin: "1.5em" }} className="background">
              <StackedAreaChart title='Évolution des investissements' dispositionTitre='left' xData={['2019', '2020', '2021', '2022', '2023']} names={['PEA', 'Assurance Vie', 'CTO']} yDatas={[[1200, 1400, 2500, 1800, 1500], [1200, 1400, 2500, 1800, 1500], [1110, 1200, 1400, 1200, 1000]]} areaStyles={true} smooths={false} />          </div>
          </div>
        )}

        {showChartGlobal && (
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div style={{ height: "500px", width: "100%", margin: "1.5em" }} className="background">
              <PieEmptySpace data={[1500, 2000, 1000]} names={['PEA', 'Assurance Vie', 'CTO']} titre='Répartition des investissements' dispositionTitre='center' subtitle='Détails des comptes' />
            </div>
            <div style={{ height: "500px", width: "100%", margin: "1.5em" }} className="background">
              <TreeMap data={[1500, 2000, 1000]} names={['PEA', 'Assurance Vie', 'CTO']} titre='Répartition des investissements' dispositionTitre='center' />
            </div>
          </div>
        )}

        {showChartAV && (
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div style={{ height: "500px", width: "100%", margin: "1.5em" }} className="background">
              <SmoothedAreaChart title='Développement du placement Assurance Vie' dispositionTitre='center' xData={['2019', '2020', '2021', '2022', '2023']} name="Évolution de l'Assurance Vie" yData={[2000, 1500, 1800, 3700, 2000]} />
            </div>
            <div style={{ height: "500px", width: "100%", margin: "1.5em" }} className="background">
              <PieEmpty data={[400, 600, 1000]} names={['Actions', 'Fonds', 'Obligations']} titre='Répartition des investissements' dispositionTitre='center' subtitle='Détails des placements' />
            </div>
          </div>
        )}

        {showChartPEA && (
          <div style={{ height: "500px", width: "100%", margin: "1.5em" }} className="background">
            <SmoothedAreaChart title='Développement du placement PEA' dispositionTitre='center' xData={['2019', '2020', '2021', '2022', '2023']} name="Évolution du PEA" yData={[1200, 1400, 2500, 1800, 1500]} />
          </div>
        )}

        {showChartPEA && (
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div style={{ height: "500px", width: "100%", margin: "1.5em" }} className="background">
              <PieFull data={[200, 100, 400, 100, 200, 120, 130, 250]} names={['Orange', 'Air Luiquid', 'Alstom', 'BNP Paribas', 'Crédit Agricole', 'Société Générale', 'SFR', 'Totale Energies']} titre='Répartition des investissements' dispositionTitre='center' subtitle='Détails des actions' />
            </div>
            <div style={{ height: "500px", width: "100%", margin: "1.5em" }} className="background">
              <SmoothedAreaChart title='Développement des dividendes' dispositionTitre='center' xData={['2019', '2020', '2021', '2022', '2023']} name="Évolution des dividendes" yData={[18, 35, 40, 40, 17]} />
            </div>
          </div>
        )}

        {showChartCTO && (
          <div style={{ height: "500px", width: "100%", margin: "1.5em" }} className="background">
            <SmoothedAreaChart title='Développement du placement CTO' dispositionTitre='center' xData={['2019', '2020', '2021', '2022', '2023']} name="Évolution du CTO" yData={[1110, 1200, 1400, 1200, 1000]} />
          </div>
        )}

        {showChartCTO && (
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div style={{ height: "500px", width: "100%", margin: "1.5em" }} className="background">
              <PieHalf data={[250, 400, 350]} names={['S&P500', 'NASDAQ', 'MSCI World']} titre='Répartition des investissements' dispositionTitre='center' subtitle='Détails des fonds' />
            </div>
            <div style={{ height: "500px", width: "100%", margin: "1.5em" }} className="background">
              <SmoothedAreaChart title='Développement des dividendes' dispositionTitre='center' xData={['2019', '2020', '2021', '2022', '2023']} name="Évolution des dividendes" yData={[14, 20, 16, 14, 30]} />
            </div>
          </div>
        )}

      </div>
    </body>
  );
}

export { Investissement };