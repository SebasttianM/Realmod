import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../components/LandingPage/Home'
import Main from '../components/LandingPage/NavBar'

const DashRoutesRoute = ({dataUserLog}) => {
  return (
    <>
        <Routes>
            <Route path="/Home" element={<Home dataUserLog={dataUserLog}/>}/>
            <Route path="*" element={<Navigate to="Home"/>}/>
            <Route path="/Main" element={<Main/>}/>
        </Routes>
    </>
  )
}

export default DashRoutesRoute