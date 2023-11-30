/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Album from './Album'


const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/album" element={<Album />} />

        </Routes>
    )
}

export default AppRoutes
