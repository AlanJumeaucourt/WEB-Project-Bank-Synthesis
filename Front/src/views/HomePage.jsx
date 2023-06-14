import React, { Children, Component } from 'react'
// import './asset/HomePage.css'
import { useKeycloak } from "@react-keycloak/web";
import { NavBar, HomeNavBar } from '../components/bars/NavBar'
import { Footer } from '../components/bars/Footer'
import '../components/bars/Bars.css'

export function HomePage() {

    return (

        <div>
            {/* <HomeNavBar></HomeNavBar> */}

            <NavBar></NavBar>

            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">a
                        <div class="row">
                            <div class="col">1</div>
                            <div class="col">2</div>
                            <div class="col">3</div>
                            <div class="col">4</div>

                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">b</div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">c</div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">d</div>
                </div>
            </div>

            <Footer></Footer>
            
        </div >
    )
}