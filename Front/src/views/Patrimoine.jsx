import React, { Component } from 'react'
import { BasicLineChart, StackedAreaChart, SmoothedLineChart, SmoothedAreaChart, BasicAreaChart } from '../components/charts/Lines'
import { useEffect, useState } from "react";
import { Card } from '../components/ui_components/Containers';

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
        <h1>TCArgent HomePage</h1>
        <div style={{height:'1000px', width:'750px'}}>
            <div className='h-50'>
                    <BasicLineChart title='Titre' xData={['lun', 'mar', 'mer', 'jeu', 'ven']} name="legende" yData={[10, 50, 30, 60, 40]} color='red' />
            </div>
        </div>

        <Card class="card">
            <div class="card-body">
                Je suis une card
            </div>
        </Card>


        <Card style={{ height:'500px'}}>
            <div className='card h-50'>
                <div class="card-body">
                    This is some text within a card body.
                </div>
            </div>           
        </Card>



        <Card>
        <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <div style={{height:'900px'}}>
                    <div className='h-50'>
                        <BasicLineChart title='Titre' xData={['lun', 'mar', 'mer', 'jeu', 'ven']} name="legende" yData={[10, 50, 30, 60, 40]} color='red' />
                    </div>
                </div>

            </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
        </div>
        </Card>
      </div>
    );
  };
  
export { Patrimoine }