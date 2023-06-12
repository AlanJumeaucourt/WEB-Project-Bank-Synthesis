import React from "react"
import { EchartComponent } from "./EchartComponent."


export function BasicLineChart({ title, xData, name, yData, color, style }) {
    title = title ? title : 'Basic Line Chart'
    return StackedAreaChart({
        title: title,
        xData: xData,
        names: [name],
        yDatas: [yData],
        smooths: false,
        areaStyles: false,
        colors: [color],
        style: style
    })
}

export function SmoothedLineChart({ title, xData, name, yData, color, style }) {
    title = title ? title : 'Smoothed Line Chart'
    return StackedAreaChart({
        title: title,
        xData: xData,
        names: [name],
        yDatas: [yData],
        smooths: true,
        areaStyles: false,
        colors: [color],
        style: style
    })
}

export function BasicAreaChart({ title, xData, name, yData, color, style }) {
    title = title ? title : 'Basic Area Chart'
    return StackedAreaChart({
        title: title,
        xData: xData,
        names: [name],
        yDatas: [yData],
        smooths: false,
        areaStyles: true,
        colors: [color],
        style: style
    })
}

export function SmoothedAreaChart({ title, xData, name, yData, color, style }) {
    title = title ? title : 'Smoothed Area Chart'
    return StackedAreaChart({
        title: title,
        xData: xData,
        names: [name],
        yDatas: [yData],
        smooths: true,
        areaStyles: true,
        colors: [color],
        style: style
    })
}

export function StackedAreaChart({ title, xData, names, yDatas, areaStyles, smooths, colors, style }) {
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
            type: 'scroll',
            orient: 'vertical',
            right: '10',
            top: '20',
            bottom: '20',
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
        series: [],
    }

    colors = colors ? colors : Array(yDatas.length).fill("")
    areaStyles = areaStyles ? Array(yDatas.length).fill({}) : Array(yDatas.length).fill(null)
    smooths = Array(yDatas.length).fill(smooths)
    option.title.text = title ? title : option.title.text
    option.legend.data = names
    option.xAxis[0].data = xData

    yDatas.forEach((element, index) => {
        option.series.push(
            {
                name: names[index],
                type: 'line',
                itemStyle: { normal: { color: colors[index] } },
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

    return (
        <EchartComponent option={option} style={style} />
    )
}