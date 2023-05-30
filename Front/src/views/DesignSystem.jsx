import React, { Component } from 'react'
import { BasicLineChart, StackedAreaChart, SmoothedLineChart, SmoothedAreaChart, BasicAreaChart } from '../components/charts/Lines'

class DesignSystem extends Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-dark bg-dark d-flex flex-column'>
                    <p className="text-white text-center h2 mt-2">Bienvenu sur le pseudo design system du site</p>
                    <p className='text-white h6 text-justify'>Ce site est principalement fait pour les développeurs et il regroupe l'ensemble de composants du site pour standardiser les développements</p>
                </nav>
                <ul>
                    <li>
                        <div className='mt-2'>
                            <span>Buttons</span>
                            <p>Voici les boutons utilisables sur le site</p>
                        </div>
                    </li>
                    <li>
                        <div className='mt-2'>
                            <span>Forms</span>
                            <p>Voici les formulaires utilisables sur le site</p>
                        </div>
                    </li>
                    <li>
                        <div className='mt-2'>
                            <span>Lines Charts</span>
                            <p>Voici les Graphiques de lignes, la plupart des lignes héritent de StackedAreaChart</p>
                            <div className='mt-2 d-flex flex-row justify-content-between' style={{ height: '300px' }}>
                                <div className='h-100' style={{ width: '300px' }} >
                                    <BasicLineChart title='Titre' xData={['lun', 'mar', 'mer', 'jeu', 'ven']} name="legende" yData={[10, 50, 30, 60, 40]} color='red' />
                                </div>
                                <div className='h-100' style={{ width: '300px' }}>
                                    <SmoothedLineChart title='Titre' xData={['lun', 'mar', 'mer', 'jeu', 'ven']} name="legende" yData={[10, 50, 30, 60, 40]} />
                                </div>
                                <div className='h-100' style={{ width: '300px' }}>
                                    <BasicAreaChart title='Titre' xData={['lun', 'mar', 'mer', 'jeu', 'ven']} name="legende" yData={[10, 50, 30, 60, 40]} color='black' />
                                </div>
                                <div className='h-100' style={{ width: '300px' }}>
                                    <SmoothedAreaChart title='Titre' xData={['lun', 'mar', 'mer', 'jeu', 'ven']} name="legende" yData={[10, 50, 30, 60, 40]} />
                                </div>
                                <div className='h-100' style={{ width: '300px' }}>
                                    <StackedAreaChart title='Titre' xData={['lun', 'mar', 'mer', 'jeu', 'ven']} names={['legende1', 'legende2', 'legende3', 'legende4']}
                                        yDatas={[[10, 20, 30, 10, 0], [100, 10, 30, 15, 22], [10, 50, 30, 60, 40], [11, 3, 10, 5, 40]]} areaStyles={true} smooths={true} />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export { DesignSystem }