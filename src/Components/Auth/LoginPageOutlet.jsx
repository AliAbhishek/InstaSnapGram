import React from 'react'
import Login from './Login'
import {Outlet} from "react-router-dom"
import LoginImages from './LoginImages'

const LoginPageOutlet = () => {
  return (
    <div className='flex'>
       
        <div className='w-full md:w-1/2'><Outlet/></div>

        <div className='hidden md:block'> <LoginImages/></div>
       
    </div>
  )
}

export default LoginPageOutlet