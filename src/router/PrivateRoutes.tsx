import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Invitation } from '@/modules/invitation/Invitation'

export const PrivateRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Invitation />} />
        </Routes>
    )
}
