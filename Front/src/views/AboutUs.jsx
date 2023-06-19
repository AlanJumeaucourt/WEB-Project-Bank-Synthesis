import React, { Children, Component } from 'react'
import { HomeNavBar } from '../components/bars/NavBar'
import { Footer } from '../components/bars/Footer'

export function AboutUs() {
    return (
        <div>
            <HomeNavBar/>
<h1>ABOUT US</h1>

            <Footer/>
        </div >
    )
}