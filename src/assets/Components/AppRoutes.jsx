/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Album from './Album'
import Anonymous from './Anonymous/Anonymous'
import SendMessages from './SendMessages'
import Login from './Login'
import Registration from './Registration'
import Answers from './Anonymous/Answers'


const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/Profile" element={<Anonymous />} />

            <Route path="/album" element={<Album />} />
{/* omoyenisamuel66@gmail.com */}
            <Route path="/Anonymous" element={<Anonymous />} />

            <Route path="/Message" element={<SendMessages/>} />

            <Route path="/" element={<Login/>} />

            <Route path="/Login" element={<Login/>} />

            <Route path="/Register" element={<Registration/>} />

            <Route path="/Answers" element={<Answers/>} />

        </Routes>
    )
}

export default AppRoutes
