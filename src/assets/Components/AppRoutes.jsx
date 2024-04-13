/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Album from './Album'
import Anonymous from './Anonymous/Anonymous'


const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<Anonymous />} />

            <Route path="/album" element={<Album />} />

            <Route path="/Anonymous" element={<Anonymous />} />

        </Routes>
    )
}

export default AppRoutes
