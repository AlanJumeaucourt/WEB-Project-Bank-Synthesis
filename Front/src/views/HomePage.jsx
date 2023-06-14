import React, { Children, Component } from 'react'
// import './asset/HomePage.css'
import { useKeycloak } from "@react-keycloak/web";
import { NavBar, HomeNavBar } from '../components/bars/NavBar'
import { Footer } from '../components/bars/Footer'

export function HomePage() {
    return (
        <div>
            {/* <HomeNavBar/> */}
            <NavBar/>
            
            <Footer/>   
        </div >
    )
}