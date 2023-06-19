import React from "react";
import { EchartComponent } from "./EchartComponent.";

//just a function because we will just do a render 
export function TreeMap({data, names, titre, dispositionTitre, style}) {
  let values = [] 
  data.forEach((el, index)=>{
    values.push({
      value: el,
      name: names[index]
    })
  })

  const option = {
    title: {
      text: titre,
      left: dispositionTitre
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      left: 'center'
    },
    series: [
      {
        type: 'treemap',
        visibleMin: 150,
        label: {
          show: true,
          formatter: '{b}'
        },
        itemStyle: {
          borderColor: '#fff'
        },
        data: values
      }
    ]
  };
      
   return <EchartComponent option={option} style={style}></EchartComponent>
}