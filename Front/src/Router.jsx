import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './views/HomePage'
import { PageNotFound } from './views/errors/PageNotFound'
import { DesignSystem } from './views/DesignSystem'
import { Patrimoine } from './views/Patrimoine'
import { LoginRequired } from './components/auth/LoginRequired'
import { Imports } from './views/Imports'
import { keycloak } from './services/Keycloak'
import { Footer } from './components/bars/Footer'
import { HomeNavBar, NavBar } from './components/bars/NavBar'

export const Router = () => {
    return (
        <BrowserRouter>
            {keycloak.authenticated ? <NavBar /> : <HomeNavBar />}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/patrimoine" element={<Patrimoine />} />
                <Route path="/design-system" element={<LoginRequired><DesignSystem /></LoginRequired>} />
                <Route path="/imports" element={<Imports />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
