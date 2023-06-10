import React from "react";
import { EchartComponent } from "./EchartComponent.";

//just a function because we will just do a render 
export function PieEmpty({data, names}) {
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
        data: values
      }
    ]
  };
      
   return <EchartComponent option={option}></EchartComponent>
}

export function PieEmptySpace({data, names}) {
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
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Réparition des comptes',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
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
        data: values
      }
    ]
  };
      
   return <EchartComponent option={option}></EchartComponent>
}

export function PieHalf({ data, names }) {
  let values = [];
  data.forEach((el, index) => {
    values.push({
      value: el,
      name: names[index]
    });
  });

  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center',
      // doesn't perfectly work with our tricks, disable it
      selectedMode: false
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '70%'],
        // adjust the start angle
        startAngle: 180,
        label: {
          show: true,
          formatter(param) {
            // correct the percentage
            return param.name + ' (' + param.percent * 2 + '%)';
          }
        },
        data: [
          ...values,
          {
            // make a record to fill the bottom 50%
            value: values.reduce((acc, curr) => acc + curr.value, 0),
            itemStyle: {
              // stop the chart from rendering this piece
              color: 'none',
              decal: {
                symbol: 'none'
              }
            },
            label: {
              show: false
            }
          }
        ]
      }
    ]
  };

  return <EchartComponent option={option}></EchartComponent>;
}

export function PieFull({data, names}) {
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
      orient: 'vertical',
      left: 'center'
    },
    series: [
      {
        name: 'Réparition des comptes',
        type: 'pie',
        radius: '50%',
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
      
        labelLine: {
          show: false
        },
        data: values
      }
    ]
  };
      
   return <EchartComponent option={option}></EchartComponent>
}