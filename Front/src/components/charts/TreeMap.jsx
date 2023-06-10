import React from "react";
import { EchartComponent } from "./EchartComponent.";

//just a function because we will just do a render 
export function TreeMap({data, names}) {
  let values = [] 
  data.forEach((el, index)=>{
    values.push({
      value: el,
      name: names[index]
    })
  })

  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      left: 'center'
    },
    series: [
      {
        name: 'Réparition des comptes',
        type: 'treemap',
        visibleMin: 300,
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
      
   return <EchartComponent option={option}></EchartComponent>
}