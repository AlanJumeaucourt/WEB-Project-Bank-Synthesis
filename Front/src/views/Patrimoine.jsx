import React, { Component } from 'react'
import { BasicLineChart, StackedAreaChart, SmoothedLineChart, SmoothedAreaChart, BasicAreaChart } from '../components/charts/Lines'
import { useEffect, useState } from "react";

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
        <div className='h-100' style={{ width: '100%' }}>
            <div style={{ height: '1000px'}}>
            {priceData ? (
                <BasicLineChart title='Titre' xData={priceData.dates} name="legende" yData={priceData.priceUsd} color='red' />
            ) : (
                <p>Chargement des données...</p>
            )}
          </div>
        </div>
      </div>
    );
  };
  
export { Patrimoine }