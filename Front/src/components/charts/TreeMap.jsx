import React from "react";
import { EchartComponent } from "./EchartComponent.";

//just a function because we will just do a render 
export function TreeMap({data, names, titre, dispositionTitre}) {
  let values = data.map((el, index) => ({
    value: el,
    name: names[index]
  }));

  const option = {
    title: {
      text: titre,
      left: dispositionTitre,
      textStyle: {
        fontSize: 18,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      formatter: '{b}: {c}'
    },
    series: [
      {
        type: 'treemap',
        data: values,
        visibleMin: 300,
        label: {
          show: true,
          formatter: '{b}',
          fontSize: 14
        },
        upperLabel: {
          show: true,
          height: 30
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1,
          gapWidth: 1
        },
        levels: [
          {
            itemStyle: {
              borderColor: '#777',
              borderWidth: 0,
              gapWidth: 1
            },
            upperLabel: {
              show: false
            }
          },
          {
            itemStyle: {
              borderColor: '#555',
              borderWidth: 5,
              gapWidth: 1
            },
            emphasis: {
              itemStyle: {
                borderColor: '#ddd'
              }
            }
          },
          {
            colorSaturation: [0.35, 0.5],
            itemStyle: {
              borderWidth: 5,
              gapWidth: 1,
              borderColorSaturation: 0.6
            }
          }
        ]
      }
    ]
  };
      
   return <EchartComponent option={option}></EchartComponent>
}