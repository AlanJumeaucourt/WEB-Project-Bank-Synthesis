import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './views/HomePage'
import { PageNotFound } from './views/errors/PageNotFound'
import { DesignSystem } from './views/DesignSystem'
import { Patrimoine } from './views/Patrimoine'

import { LoginRequired } from './components/auth/LoginRequired'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/design-system" element={<DesignSystem />} />
                <Route path="/Patrimoine" element={<Patrimoine />} />
                <Route path="/design-system" element={<LoginRequired><DesignSystem /></LoginRequired>} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}