import './App.css';
import ReactEcharts from "echarts-for-react";
import React, { useEffect, useState, Component } from "react";
import * as echarts from 'echarts';

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
  const [showChartPEA, setShowChartPEA] = useState(false);
  const [showChartLEP, setShowChartLEP] = useState(false);

const handleGlobalClick =() => {
  setShowChartGlobal(true);
  setShowChartLEP(false);
  setShowChartPEA(false);
}

// Gestionnaire de clic pour le bouton PEA
const handlePEAClick = () => {
  setShowChartGlobal(false);
  setShowChartPEA(true);
  setShowChartLEP(false);
};

// Gestionnaire de clic pour le bouton LEP
const handleLEPClick = () => {
  setShowChartGlobal(false);
  setShowChartPEA(false);
  setShowChartLEP(true);
};

  return (
    <div>

      <button onClick={handleGlobalClick}>
        Tous
      </button>

      {showChartGlobal && (
        <LineChartWithTimeAxis xLines={fetchapi[1]} yLines={fetchapi[0]}></LineChartWithTimeAxis>
      )}

      {showChartGlobal && (
        <BasicPie xLines={fetchExchange}></BasicPie>
      )}

      {showChartGlobal && (
        <BasicTreemap xLines={fetchPEA}></BasicTreemap>
      )}

      <button onClick={handlePEAClick}>
        PEA
      </button>

      {showChartPEA && (
        <BasicPie xLines={fetchExchange}></BasicPie>
        )}

      <button onClick={handleLEPClick}>
        LEP
      </button>

      {showChartLEP && (
        <LineChartWithTimeAxis xLines={fetchapi[1]} yLines={fetchapi[0]}></LineChartWithTimeAxis>
      )}
      
    </div>
  );
}

function CreditSimulation() {
  const [remboursement, setRemboursement] = useState(0);

  const handleChangeRemboursement = (e) => {
    const montantRembourse = parseFloat(e.target.value);
    setRemboursement(montantRembourse);
  };

  const maisonStyle = {
    height: '200px',
    width: '100%',
    backgroundColor: 'lightblue',
    position: 'relative',
  };

  const eauStyle = {
    height: '100%',
    width: `${remboursement}%`,
    backgroundColor: 'blue',
    transition: 'width 0.5s ease-in-out',
    position: 'absolute',
    bottom: 0,
    left: 0,
  };

  const montantRemboursementText = `Montant de remboursement : ${remboursement}%`;

  return (
    <div>
      <h2>Simulateur de remboursement de crédit</h2>
      <label>
        Montant de remboursement (%):
        <input type="number" min="0" max="100" value={remboursement} onChange={handleChangeRemboursement} />
      </label>

      <div style={maisonStyle}>
        <div style={eauStyle}></div>
      </div>

      <p>{montantRemboursementText}</p>
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
        <CreditSimulation />

      </header>
      <body>
      </body>
    </div>
  );
}

export default App;

