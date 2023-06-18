import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './views/HomePage'
import { PageNotFound } from './views/errors/PageNotFound'

import { DesignSystem } from './views/DesignSystem'
import { Investissement } from './views/Investissement'
import { Patrimoine } from './views/Patrimoine'

import { LoginRequired } from './components/auth/LoginRequired'
import { Imports } from './views/Imports'
import { Axios } from './services/Axios'
import { keycloak } from './services/Keycloak'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {Axios.init(keycloak)}
                <Route path="/" element={<HomePage />} />
                <Route path="/design-system" element={<DesignSystem />} />
                <Route path="/Investissement" element={< Investissement />} />
                <Route path="/Patrimoine" element={<Patrimoine />} />
                <Route path="/design-system" element={<LoginRequired><DesignSystem /></LoginRequired>} />
                <Route path="/imports" element={<LoginRequired><Imports /></LoginRequired>} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
