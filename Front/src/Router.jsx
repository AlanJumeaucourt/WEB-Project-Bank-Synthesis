import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './views/HomePage'
import { PageNotFound } from './views/errors/PageNotFound'
import { DesignSystem } from './views/DesignSystem'
import { LoginRequired } from './components/auth/LoginRequired'
import { Imports } from './views/Imports'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/design-system" element={<LoginRequired><DesignSystem /></LoginRequired>} />
                <Route path="/imports" element={<Imports />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}