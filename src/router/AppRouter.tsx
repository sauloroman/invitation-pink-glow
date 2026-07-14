import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from './PrivateRoutes'

export const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <PublicRoutes />
            <PrivateRoutes />
        </BrowserRouter>
    )
}
