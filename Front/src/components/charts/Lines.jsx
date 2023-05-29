import React from "react"
import { EchartComponent } from "./EchartComponent."


export function BasicLineChart({ title, xData, name, yData }) {
    title = title ? title : 'Basic Line Chart'
    return StackedAreaChart({
        title: title,
        xData: xData,
        names: [name],
        yDatas: [yData],
        smooths: [false],
        areaStyles: [null]
    })
}

export function StackedAreaChart({ title, xData, names, yDatas, areaStyles, smooths }) {
    let option = {
        title: {
            text: 'Stacked Area Chart'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: []
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: []
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: []
    }

    yDatas.forEach((element, index) => {
        option.series.push(
            {
                name: names[index],
                type: 'line',
                smooth: smooths[index],
                stack: 'Total',
                areaStyle: areaStyles[index],
                emphasis: {
                    focus: 'series'
                },
                data: element
            }
        )
    })

    option.title.text = title ? title : option.title.text
    option.legend.data = names
    option.xAxis[0].data = xData

    return (
        <EchartComponent option={option} />
    )
}