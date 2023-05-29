import React, { Component } from 'react'
import { BasicLineChart, StackedAreaChart } from '../components/charts/Lines'

class DesignSystem extends Component {
    render() {
        return (
            <div>
                <h1>TCArgent DesignSystem</h1>
                <div>
                    <BasicLineChart xData={['lun', 'mar', 'mer']} name="line1" yData={[10, 20, 30]} />
                </div>
                <StackedAreaChart xData={['lun', 'mar', 'mer']} names={['line1', 'line2']} yDatas={[[10, 20, 30], [100, 10, 30]]} areaStyles={[{}, {}]} smooths={[true, true]} />
            </div>
        )
    }
}

export { DesignSystem }