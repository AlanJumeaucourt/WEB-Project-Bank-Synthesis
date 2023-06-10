//root component for all the charts in the application
//just change the option prop to have a chart component
//using apache echarts

import React from "react";
import { EchartComponent } from "./EchartComponent.";

//just a function because we will just do a render 
export function CreditSimulation() {

  const symbols = [
    'path://M6175,12435,c-38,-34,-1404,-1166,-3035,-2514,l-2965,-2452,-87,-987,c-48,-543,-87,-1007,-87,-1031,l-1,-44,237,-244,c131,-135,281,-290,333,-345,l95,-101,310,261,c171,143,310,260,311,259,0,-1,-2,-902,-6,-2002,-4,-1109,-4,-2024,1,-2054,35,-223,191,-404,398,-465,50,-15,451,-16,4396,-16,3963,0,4346,1,4396,16,177,53,309,181,371,359,36,105,35,94,53,920,9,374,20,858,25,1075,5,217,14,593,20,835,6,242,15,609,20,815,5,206,10,399,10,428,l0,52,307,-275,c169,-151,310,-271,314,-267,4,4,149,181,323,394,l316,388,-39,172,c-22,95,-62,272,-90,393,-27,121,-73,320,-100,443,-28,122,-74,322,-102,445,-138,611,-127,569,-162,604,-108,107,-5473,5003,-5481,5002,-6,0,-42,-29,-81,-64z'
  ];

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
            symbol: symbols[0],
            symbolOffset: [0, -50] // Adjust the symbol offset to flip the symbol
          },
          {
            value: 40,
            symbol: symbols[1],
            symbolOffset: [0, -50] // Adjust the symbol offset to flip the symbol
          },
          {
            value: 17,
            symbol: symbols[2],
            symbolOffset: [0, -50] // Adjust the symbol offset to flip the symbol
          }
        ],
        markLine: markLineSetting,
        z: 10
      }
    ]
  };

  return <EchartComponent option={option}></EchartComponent>;
}