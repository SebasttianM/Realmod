import { data } from 'autoprefixer'
import React from 'react'
import { useDispatch } from 'react-redux'
import { LogOutAsync } from '../../redux/actions/ActionsLogin'
import Banner from './Banner'
import Listing from './Listing'
import NavBar from './NavBar'

const Home = ({dataUserLog}) => {
    const dispatch= useDispatch()
    const{displayName, photoURL, email}=dataUserLog
    const handleLogout= ()=>{
        dispatch(LogOutAsync())
    }
  return (
    <div>
        <NavBar/>
        <Banner/>
        <Listing/>
    </div>
  )
}

export default Home