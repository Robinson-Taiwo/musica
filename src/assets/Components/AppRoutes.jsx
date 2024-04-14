/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Album from './Album'
import Anonymous from './Anonymous/Anonymous'
import SendMessages from './SendMessages'
import Login from './Login'


const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<Anonymous />} />

            <Route path="/album" element={<Album />} />

            <Route path="/Anonymous" element={<Anonymous />} />

            <Route path="/Message" element={<SendMessages/>} />

            <Route path="/Login" element={<Login/>} />

        </Routes>
    )
}

export default AppRoutes
