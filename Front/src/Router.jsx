import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './views/HomePage'
import { PageNotFound } from './views/PageNotFound'
import { DesignSystem } from './views/DesignSystem'
import { Patrimoine } from './views/Patrimoine'


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/design-system" element={<DesignSystem />} />
                <Route path="/Patrimoine" element={<Patrimoine />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}