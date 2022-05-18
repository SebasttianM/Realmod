import { data } from 'autoprefixer'
import React from 'react'
import { useDispatch } from 'react-redux'
import { LogOutAsync } from '../../redux/actions/ActionsLogin'

const Home = ({dataUserLog}) => {
    const dispatch= useDispatch()
    const{displayName, photoURL, email}=dataUserLog
    const handleLogout= ()=>{
        dispatch(LogOutAsync())
    }
  return (
    <div>
        <button onClick={()=>{
            handleLogout()
        }
        }>Log Out</button>
        <div>
          <h1>{displayName}</h1>
          <h2>{email}</h2>
          <img src={photoURL} alt=''/>
        </div>
    </div>
  )
}

export default Home