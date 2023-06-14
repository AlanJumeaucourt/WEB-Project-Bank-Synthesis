import ReactEcharts from "echarts-for-react";
import React, { useEffect, useState, Component } from "react";
import * as echarts from 'echarts';

import './Affichage.css';

function SimulationCredit() {
  const symbols = [
    'path://M6175,12435,c-38,-34,-1404,-1166,-3035,-2514,l-2965,-2452,-87,-987,c-48,-543,-87,-1007,-87,-1031,l-1,-44,237,-244,c131,-135,281,-290,333,-345,l95,-101,310,261,c171,143,310,260,311,259,0,-1,-2,-902,-6,-2002,-4,-1109,-4,-2024,1,-2054,35,-223,191,-404,398,-465,50,-15,451,-16,4396,-16,3963,0,4346,1,4396,16,177,53,309,181,371,359,36,105,35,94,53,920,9,374,20,858,25,1075,5,217,14,593,20,835,6,242,15,609,20,815,5,206,10,399,10,428,l0,52,307,-275,c169,-151,310,-271,314,-267,4,4,149,181,323,394,l316,388,-39,172,c-22,95,-62,272,-90,393,-27,121,-73,320,-100,443,-28,122,-74,322,-102,445,-138,611,-127,569,-162,604,-108,107,-5473,5003,-5481,5002,-6,0,-42,-29,-81,-64z'
  ]

  const bodyMax = 100;
  
  const labelSetting = {
    show: true,
    position: 'top',
    offset: [0, -20],
    formatter: function (param) {
      return ((param.value / bodyMax) * 100).toFixed(0) + '%';
    },
    fontSize: 18,
    fontFamily: 'Arial'
  };
  
  const markLineSetting = {
    symbol: 'none',
    lineStyle: {
      opacity: 0.3
    },
    data: [
      {
        type: 'max',
        label: {
          formatter: 'max: {c}'
        }
      },
      {
        type: 'min',
        label: {
          formatter: 'min: {c}'
        }
      }
    ]
  };

  const option = {
    tooltip: {},
    legend: {
      data: ['Remboursement des Crédits', 'CreditMaison'],
      selectedMode: 'single'
    },
    xAxis: {
      data: ['Maison', 'Voiture', 'Piscine'],
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: { show: false }
    },
    yAxis: {
      max: bodyMax,
      offset: 100,
      splitLine: { show: false }
    },
    grid: {
      top: 'center',
      height: 100
    },
    markLine: {
      z: -100
    },
    series: [
      {
        name: 'Remboursement des Crédits',
        type: 'pictorialBar',
        symbolClip: true,
        symbolBoundingData: bodyMax,
        label: labelSetting,
        data: [
          {
            value: 100,
            symbol: symbols[0]
          },
          {
            value: 40,
            symbol: symbols[1]
          },
          {
            value: 17,
            symbol: symbols[2]
          }
        ],
        markLine: markLineSetting,
        z: 10
      }
    ]
  };
  return option;
}

class LineChartWithTimeAxis extends React.Component{

  constructor(props){
    super(props)
    this.state = {xLines: props.xLines, yLines : props.yLines}
  }

  render(){
    const option = {
      color: ["#3398DB"],
      tooltip: {
        trigger: "axis"
      },
      xAxis: {
        data: this.state.xLines
      },
      yAxis: {
        splitLine: {
          show: false
        }
      },
      dataZoom: [{}],
      series: {
        name: "Évolution patrimoine",
        type: "line",
        data: this.state.yLines
       
      }
    }
 
    return (<ReactEcharts
      option={option}
      style={{ width: "600px", height: "300px" }}
    ></ReactEcharts>
  )
  }
}

class BasicPie extends React.Component{

  constructor(props){
    super(props)
    this.state = {xLines: props.xLines}
  }

  render(){
    const option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Réparition des comptes',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 25,
              fontWeight: 'bold'
            }
          },
          
          labelLine: {
            show: false
          },
          data: [
            { value: 3000, name: 'PEA' },
            { value: 1600, name: 'Livret A' },
            { value: 1700, name: 'Livret Jeune' },
            { value: 1400, name: 'PEL' },
            { value: 1200, name: 'Compte Courant' }
          ]
        }
      ]
    };
 
    return (<ReactEcharts
      option={option}
      style={{ width: "600px", height: "300px" }}
    ></ReactEcharts>
  )
  }
}

class BasicTreemap extends React.Component{
  constructor(props){
    super(props)
    this.state = {xLines: props.xLines}
  }

  render(){
    const option = {
      title: {
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          name: 'Répartition des actions',
          type: 'treemap',
          visibleMin: 300,
          label: {
            show: true,
            formatter: '{b}'
          },
          itemStyle: {
            borderColor: '#fff'
          },
          data: this.state.xLines
        }
      ]
    };
 
    return (<ReactEcharts
      option={option}
      style={{ width: "600px", height: "300px" }}
    ></ReactEcharts>
  )
  }
}


//Données pour "Courbe"
const Fetchapi = async function()
{
  const response = await fetch('https://api.coincap.io/v2/assets/bitcoin/history?interval=d1')
  .catch((e)=>{console.log("erreur de merde", e)})
  const data = await response.json()
  let objdata = data["data"]
  let priceUsd = objdata.map((el) => {return el["priceUsd"]})
  let dates = objdata.map((el) => {return el["date"]})
  return Array(priceUsd, dates)
}
const fetchapi = await Fetchapi()

//Données pour "Pie"
const FetchExchange = async function()
{
  const response = await fetch('https://api.coincap.io/v2/exchanges')
  .catch((e)=>{console.log("erreur de merde", e)})
  const data = await response.json()
  let objdata = data["data"]
  console.log(objdata)
  const formattedData = objdata.map(item => {
    return {
      name: item.exchangeId,
      value: parseFloat(item.volumeUsd)
    };
  });
 
  return formattedData
}
const fetchExchange = await FetchExchange()

//Données pour "TreeMap PEA"
const FetchPEA = async function()
{
  const response = await fetch('https://api.coincap.io/v2/exchanges')
  .catch((e)=>{console.log("erreur de merde", e)})
  const data = await response.json()
  let objdata = data["data"]
  console.log(objdata)
  const formattedData = objdata.map(item => {
    return {
      name: item.exchangeId,
      value: parseFloat(item.volumeUsd)
    };
  });

  return formattedData
}
const fetchPEA = await FetchExchange()

function ActionAccessComptes() {

  const [showChartGlobal, setShowChartGlobal] = useState(true);
  const [showChartAV, setShowChartAV] = useState(false);
  const [showChartPEA, setShowChartPEA] = useState(false);
  const [showChartCTO, setShowChartCTO] = useState(false);

const handleGlobalClick =() => {
  setShowChartGlobal(true);
  setShowChartAV(false);
  setShowChartPEA(false);
  setShowChartCTO(false);
}

const handleAVClick = () => {
  setShowChartGlobal(false);
  setShowChartAV(true);
  setShowChartPEA(false);
  setShowChartCTO(false);
};

// Gestionnaire de clic pour le bouton PEA
const handlePEAClick = () => {
  setShowChartGlobal(false);
  setShowChartAV(false);
  setShowChartPEA(true);
  setShowChartCTO(false);
};

// Gestionnaire de clic pour le bouton LEP
const handleCTOClick = () => {
  setShowChartGlobal(false);
  setShowChartAV(false);
  setShowChartPEA(false);
  setShowChartCTO(true);
};

  return (
    <div className="boutons-container">

      <button onClick={handleGlobalClick}>
        Investissements globaux
      </button>

      <button onClick={handleAVClick}>
        Assurance Vie
      </button>

      <button onClick={handlePEAClick}>
        Plan d'épargne Action (PEA)
      </button>

      <button onClick={handleCTOClick}>
        Comptes-Titres (CTO)
      </button>

      {/* Affichage global de tous les comptes */}

      {showChartGlobal && (
        <LineChartWithTimeAxis xLines={fetchapi[1]} yLines={fetchapi[0]}></LineChartWithTimeAxis>
      )}

      {showChartGlobal && (
        <BasicPie xLines={fetchExchange}></BasicPie>
      )}

      {showChartGlobal && (
        <BasicTreemap xLines={fetchPEA}></BasicTreemap>
      )}

      {/* Affichage de l'évolution du compte Assurance-Vie */}

      {showChartAV && (
        <LineChartWithTimeAxis xLines={fetchapi[1]} yLines={fetchapi[0]}></LineChartWithTimeAxis>
      )}

      {showChartAV && (
        <BasicPie xLines={fetchExchange}></BasicPie>
      )}

      {/* Affichage de l'évolution du compte PEA */}

      {showChartPEA && (
        <LineChartWithTimeAxis xLines={fetchapi[1]} yLines={fetchapi[0]}></LineChartWithTimeAxis>
      )}

      {showChartPEA && (
        <BasicPie xLines={fetchExchange}></BasicPie>
        )}

      {showChartPEA && (
        <LineChartWithTimeAxis xLines={fetchapi[1]} yLines={fetchapi[0]}></LineChartWithTimeAxis>
      )}

      {/* Affichage de l'évolution du compte CTO */}

      {showChartCTO && (
        <LineChartWithTimeAxis xLines={fetchapi[1]} yLines={fetchapi[0]}></LineChartWithTimeAxis>
      )}

      {showChartCTO && (
        <BasicPie xLines={fetchExchange}></BasicPie>
      )}

      {showChartCTO && (
        <LineChartWithTimeAxis xLines={fetchapi[1]} yLines={fetchapi[0]}></LineChartWithTimeAxis>
      )}
      
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>   
        <ActionAccessComptes />
      </header>
      <body>
      </body>
    </div>
  );
}

export default App;

