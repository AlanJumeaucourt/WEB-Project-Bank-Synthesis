//root component for all the charts in the application
//just change the option prop to have a chart component
//using apache echarts

import React from "react";
import { EchartComponent } from "./EchartComponent.";

//just a function because we will just do a render 
export function TreeMap() {

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
      
   return <EchartComponent option={option}></EchartComponent>
}
