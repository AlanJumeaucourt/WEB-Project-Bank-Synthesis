import React, { useEffet, useState, Component } from 'react'
import { ButtonPrimary, CircularButton, RoundedButton, Tooltip } from '../components/ui_components/Buttons'
import { InputPassword, InputText, InputSelect, InputCheckbox } from '../components/ui_components/Inputs'
import { SignUpForm } from '../components/ui_components/Forms'
import { SuccessMessage, WarningMessage, ErrorMessage } from '../components/ui_components/StatusMessage'
import { Card, Queue, Stack } from '../components/ui_components/Containers'

import { BasicLineChart, StackedAreaChart, SmoothedLineChart, SmoothedAreaChart, BasicAreaChart } from '../components/charts/Lines'
import { PieEmpty, PieEmptySpace, PieHalf, PieFull } from '../components/charts/Pie'
import { TreeMap } from '../components/charts/TreeMap'
import { CreditSimulation } from '../components/charts/CreditSimulation'

import * as echarts from 'echarts';

function DesignInvestment() {
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
    <div className="boutons-container">
      <ButtonPrimary onClick={handleGlobalClick}>Investissements globaux</ButtonPrimary>
      <ButtonPrimary onClick={handleAVClick}>Assurance Vie</ButtonPrimary>
      <ButtonPrimary onClick={handlePEAClick}>Plan d'épargne Action (PEA)</ButtonPrimary>
      <ButtonPrimary onClick={handleCTOClick}>Comptes-Titres (CTO)</ButtonPrimary>

      {showChartGlobal && (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <div style={{ height: "500px", width: "50%", padding: "1.5em" }}>
            <SmoothedAreaChart title='Evolution globale' dispositionTitre='center' xData={['lun', 'mar', 'mer', 'jeu', 'ven']} name="legende" yData={[10, 50, 30, 60, 40]} />
          </div>
          <div style={{ height: "500px", width: "50%", padding: "1.5em" }}>
            <StackedAreaChart title='Evolution des investissements' dispositionTitre='center' xData={['lun', 'mar', 'mer', 'jeu', 'ven']} names={['legende1', 'legende2', 'legende3', 'legende4']} yDatas={[[10, 20, 30, 10, 0], [100, 10, 30, 15, 22], [10, 50, 30, 60, 40], [11, 3, 10, 5, 40]]} areaStyles={true} smooths={false} />          </div>
        </div>
      )}

      {showChartGlobal && (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <div style={{ height: "500px", width: "50%", padding: "1.5em" }}>
            <PieEmpty data={[1500, 2000, 1000]} names={['PEA', 'LEP', 'Livret A']} titre='Répartition des investissements' dispositionTitre='center' subtitle='essai' />
          </div>
          <div style={{ height: "500px", width: "50%", padding: "1.5em" }}>
            <TreeMap data={[1500, 2000, 1000]} names={['PEA', 'LEP', 'Livret A']} titre='Répartition des investissements' dispositionTitre='center'/>
          </div>
        </div>
      )}

      {showChartAV && (
        <div style={{ height: "500px", width: "100%", padding: "1.5em" }} className='d-flex flex-row justify-content-between'>
          <SmoothedAreaChart title='Développement du placement Assurance Vie' dispositionTitre='center' xData={['lun', 'mar', 'mer', 'jeu', 'ven']} name="Détails de l'évolution" yData={[10, 50, 30, 60, 40]} />
        </div>
      )}

      {showChartAV && (
        <div style={{ height: "500px", width: "100%", padding: "1.5em" }} className='d-flex flex-row justify-content-between'>
          <PieEmpty data={[1500, 2000, 1000]} names={['PEA', 'LEP', 'Livret A']} titre='Répartition des investissements' dispositionTitre='center' subtitle='essai' />
        </div>
      )}

      {showChartPEA && (
        <div style={{ height: "500px", width: "100%", padding: "1.5em" }} className='d-flex flex-row justify-content-between'>
          <SmoothedAreaChart title='Développement du placement PEA' dispositionTitre='center' xData={['lun', 'mar', 'mer', 'jeu', 'ven']} name="Détails de l'évolution" yData={[10, 50, 30, 60, 40]} />
        </div>
      )}

      {showChartPEA && (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <div style={{ height: "500px", width: "50%", padding: "1.5em" }}>
            <PieEmpty data={[1500, 2000, 1000]} names={['PEA', 'LEP', 'Livret A']} titre='Répartition des investissements' dispositionTitre='center' subtitle='essai' />
          </div>
          <div style={{ height: "500px", width: "50%", padding: "1.5em" }}>
            <SmoothedAreaChart title='Développement des dividendes' dispositionTitre='center' xData={['lun', 'mar', 'mer', 'jeu', 'ven']} name="Détails de l'évolution" yData={[10, 50, 30, 60, 40]} />
          </div>
        </div>
      )}

      {showChartCTO && (
        <div style={{ height: "500px", width: "100%", padding: "1.5em" }} className='d-flex flex-row justify-content-between'>
          <SmoothedAreaChart title='Développement du placement CTO' dispositionTitre='center' xData={['lun', 'mar', 'mer', 'jeu', 'ven']} name="Détails de l'évolution" yData={[10, 50, 30, 60, 40]} />
        </div>
      )}

      {showChartCTO && (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <div style={{ height: "500px", width: "50%", padding: "1.5em" }}>
            <PieEmpty data={[1500, 2000, 1000]} names={['PEA', 'LEP', 'Livret A']} titre='Répartition des investissements' dispositionTitre='center' subtitle='essai' />
          </div>
          <div style={{ height: "500px", width: "50%", padding: "1.5em" }}>
            <SmoothedAreaChart title='Développement des dividendes' dispositionTitre='center' xData={['lun', 'mar', 'mer', 'jeu', 'ven']} name="Détails de l'évolution" yData={[10, 50, 30, 60, 40]} />
          </div>
        </div>
      )}

    </div>
  );
}

export { DesignInvestment };