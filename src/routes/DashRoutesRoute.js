import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../components/LandingPage/Home'

const DashRoutesRoute = ({dataUserLog}) => {
  return (
    <>
        <Routes>
            <Route path="/Home" element={<Home dataUserLog={dataUserLog}/>}/>
            <Route path="*" element={<Navigate to="Home"/>}/>
        </Routes>
    </>
  )
}

export default DashRoutesRoute