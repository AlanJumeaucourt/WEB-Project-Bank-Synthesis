import React, { Component } from 'react'
import { BasicLineChart, StackedAreaChart, SmoothedLineChart, SmoothedAreaChart, BasicAreaChart } from '../components/charts/Lines'
import { useEffect, useState } from "react";
import { Card, Stack } from '../components/ui_components/Containers';
import { Queue } from '../components/ui_components/Containers';
import { ButtonPrimary, CircularButton, RoundedButton } from '../components/ui_components/Buttons'

const Patrimoine = () => {
    const [priceData, setPriceData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8082/comptes/1/soldeperiode');
          const data = await response.json();
          console.log(data)
          const priceUsd = Object.keys(data)
          const dates = Object.values(data)
          setPriceData({ priceUsd, dates });
        } catch (error) {
          console.log('Erreur :', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h1>TCArgent Patrimoine</h1>
        <p className='p-3'>Voici votre page resumant votre patrimoine au fil du temps</p>



        <div style={{height: "500px", width: "100%"}} className='d-flex flex-row justify-content-between'>
          <StackedAreaChart title='Graph patrimoine tout compte' xData={['lun', 'mar', 'mer', 'jeu', 'ven']} names={['legende1', 'legende2', 'legende3', 'legende4']}
                                        yDatas={[[10, 20, 30, 10, 0], [100, 10, 30, 15, 22], [10, 50, 30, 60, 40], [11, 3, 10, 5, 40]]} areaStyles={true} smooths={true} />
        </div>

        <div style={{height: "500px", width: "100%"}} className='d-flex flex-row justify-content-between'>
            <div className='h-100 w-75 p-3'>
                <div className='h-100 w-100'>
                    <BasicLineChart title='1 compte' xData={['lun', 'mar', 'mer', 'jeu', 'ven']} name="legende" yData={[10, 50, 30, 60, 40]} color='red' />
                </div>
            </div>
            <div className='w-25 h-100 p-2' >
                <Card title="Comptes à afficher :" className='p-2' style={{height:'100%'}}>
                    <p class="card-text">Selectionner le compte à afficher sur le graphique</p>
                    <Stack style={{height:'inherit'}}>
                        <div className='p-2'><RoundedButton style={{width:'100%'}}>item 1</RoundedButton></div>
                        <div className='p-2'><RoundedButton style={{width:'100%'}}>item 2</RoundedButton></div>
                        <div className='p-2'><RoundedButton style={{width:'100%'}}>item 3</RoundedButton></div>
                        <div className='p-2'><RoundedButton style={{width:'100%'}}>item 4</RoundedButton></div>


                    </Stack>
                    <div className='rounded p-1' style = {{position:'absolute', right:'10px', bottom :'1%', background:'#D3D3D3', width:'150px'}}>
                          Type de graphique :
                          <RoundedButton color={'light'} style={{padding:'5%', margin: '5px'}}>Line</RoundedButton>
                          <RoundedButton color={'light'} style={{padding:'5%'}}>Bar</RoundedButton>
                    </div>
                </Card>
            </div>


        </div>
      </div>
    );
  };
  
export { Patrimoine }