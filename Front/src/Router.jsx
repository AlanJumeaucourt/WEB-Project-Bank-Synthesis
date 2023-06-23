import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './views/HomePage'
import { PageNotFound } from './views/errors/PageNotFound'

import { DesignSystem } from './views/DesignSystem'
import { Investissement } from './views/Investissement'
import { Patrimoine } from './views/Patrimoine'
import { AboutUs } from './views/AboutUs'
import { LoginRequired } from './components/auth/LoginRequired'
import { Imports } from './views/Imports'
import { Footer } from './components/bars/Footer'
import { HomeNavBar } from './components/bars/NavBar'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={(<><HomeNavBar /><HomePage /></>)} />
                <Route path="/about-us" element={(<><HomeNavBar /><AboutUs /></>)} />
                <Route path="/patrimoine" element={<LoginRequired><Patrimoine /></LoginRequired>} />
                <Route path="/design-system" element={<LoginRequired><DesignSystem /></LoginRequired>} />
                <Route path="/imports" element={<LoginRequired><Imports /></LoginRequired>} />
                <Route path="/investissement" element={<LoginRequired>< Investissement /></LoginRequired>} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
