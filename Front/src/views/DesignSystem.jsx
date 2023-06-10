import React, { Component } from 'react'
import { BasicLineChart, StackedAreaChart, SmoothedLineChart, SmoothedAreaChart, BasicAreaChart } from '../components/charts/Lines'
import { ButtonPrimary, CircularButton, RoundedButton } from '../components/ui_components/Buttons'
import { InputPassword, InputText, InputSelect, InputCheckbox } from '../components/ui_components/Inputs'
import { SignUpForm } from '../components/ui_components/Forms'
import { SuccessMessage, WarningMessage, ErrorMessage } from '../components/ui_components/StatusMessage'
import { Card, Queue, Stack } from '../components/ui_components/Containers'
import { Drawer } from '../components/ui_components/Drawer'

import { PieEmpty, PieEmptySpace, PieHalf, PieFull } from '../components/charts/Pie'
import { TreeMap } from '../components/charts/TreeMap'
import { CreditSimulation } from '../components/charts/CreditSimulation'



class DesignSystem extends Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-dark bg-dark d-flex flex-column'>
                    <p className="text-white text-center h2 mt-2">Bienvenue sur le pseudo design system du site</p>
                    <p className='text-white h6 text-justify'>Ce site est principalement fait pour les développeurs et il regroupe l'ensemble de composants du site pour standardiser les développements</p>
                </nav>
                <ul>
                    <li className='mt-5'>
                        <div className='mt-2'>
                            <span>Drawer</span>
                            <p>Cliquez pour afficher le Drawer</p>
                            <Drawer id="drawer">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore mollitia voluptatibus ipsum iure sapiente velit, debitis non, laudantium quia, nulla adipisci. Rerum, quasi. Placeat explicabo quisquam architecto dolorem ea ex?</p>
                            </Drawer>
                        </div>
                    </li>
                    <li className='mt-5'>
                        <div className='mt-2'>
                            <span>Buttons</span>
                            <p>Voici les boutons utilisables sur le site</p>
                            <div className='mt-2 d-flex flex-row justify-content-around'>
                                <div>
                                    <ButtonPrimary>Bouton</ButtonPrimary>
                                </div>
                                <div>
                                    <RoundedButton color="warning" icon="fa fa-home" />
                                </div>
                                <div>
                                    <CircularButton color="primary" icon="fa fa-camera fa-2x" />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='mt-5'>
                        <div className='mt-2'>
                            <span>Forms</span>
                            <p>Voici les formulaires utilisables sur le site</p>
                            <div className='mt-2 mb-2 d-flex flex-row justify-content-around'>
                                <div>
                                    <InputText placeholder="entrez votre nom" icon="fa fa-user">Nom</InputText>
                                </div>
                                <div>
                                    <InputPassword>Mot de passe</InputPassword>
                                </div>
                                <div>
                                    <InputCheckbox>Chochez moi</InputCheckbox>
                                </div>
                                <div>
                                    <InputSelect icon="fa fa-check" options={["hello", "world", "foo", "bar"]}>Votre Choix</InputSelect>
                                </div>
                            </div>
                            <p>Voici un exemple de formulaire</p>
                            <SignUpForm />
                        </div>
                    </li>
                    <li className='mt-5'>
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

                            <div className='mt-2 d-flex flex-row justify-content-between' style={{ height: '300px' }}>

                                <div className='h-100' style={{ width: '300px' }} >
                                    <PieEmpty data={[1500, 2000, 1000]} names={['PEA', 'LEP', 'Livret A']} />
                                </div>

                                <div className='h-100' style={{ width: '300px' }} >
                                    <PieEmptySpace data={[1500, 2000, 1000]} names={['PEA', 'LEP', 'Livret A']} />
                                </div>

                                <div className='h-100' style={{ width: '300px' }} >
                                    <PieHalf/>
                                </div>

                                <div className='h-100' style={{ width: '300px' }} >
                                    <PieFull data={[1500, 2000, 1000]} names={['PEA', 'LEP', 'Livret A']} />
                                </div>

                                <div className='h-100' style={{ width: '300px' }} >
                                    <TreeMap data={[1500, 2000, 1000]} names={['PEA', 'LEP', 'Livret A']} />
                                </div>

                                <div className='h-100' style={{ width: '300px' }} >
                                    <CreditSimulation/>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li className='mt-5'>
                        <div className='mt-2'>
                            <span>StatusMessage</span>
                            <p>Voici les messages de status utilisables sur le site</p>
                            <div className='mt-2 d-flex flex-column justify-content-around'>
                                <SuccessMessage title="Titre" footer="footer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam consectetur cum sunt quis veniam itaque hic reiciendis. Sunt, numquam consequuntur ipsum asperiores perspiciatis magni vero commodi, esse impedit, provident eligendi?</SuccessMessage>
                                <WarningMessage title="Titre" footer="footer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam consectetur cum sunt quis veniam itaque hic reiciendis. Sunt, numquam consequuntur ipsum asperiores perspiciatis magni vero commodi, esse impedit, provident eligendi?</WarningMessage>
                                <ErrorMessage title="Titre" footer="footer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam consectetur cum sunt quis veniam itaque hic reiciendis. Sunt, numquam consequuntur ipsum asperiores perspiciatis magni vero commodi, esse impedit, provident eligendi?</ErrorMessage>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='mt-5'>
                            <div className='mt-2'>
                                <span>Containers</span>
                                <p>Voici les conteneurs utilisables sur le site</p>
                                <div className='mt-2 d-flex flex-row justify-content-around' style={{ height: '300px' }}>
                                    <Card title="Titre" footer="Footer" header="Header" style={{ height: '400px', width: '500px' }}>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, recusandae aspernatur. Doloremque, sed vero? Modi nemo illum, consectetur voluptatum quis, aspernatur delectus eligendi, deserunt praesentium suscipit dolore. Repellat, fugit non.</p>
                                        <ButtonPrimary>Un Bouton</ButtonPrimary>
                                    </Card>
                                    <Stack style={{ height: '400px', width: '500px' }}>
                                        <p>item1</p>
                                        <p>item2 <InputCheckbox>item2</InputCheckbox></p>
                                        <SuccessMessage title="item3" footer="item3">item3</SuccessMessage>
                                        <div>
                                            <ButtonPrimary>item4</ButtonPrimary>
                                        </div>
                                    </Stack>
                                    <Queue style={{ height: '50px', width: '500px' }}>
                                        <p>item1</p>
                                        <p>item2</p>
                                        <p>item3</p>
                                    </Queue>
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