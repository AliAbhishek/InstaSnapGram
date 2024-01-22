import React from 'react'
import {Routes,Route} from "react-router"
import Login from '../Components/Auth/Login'
import LoginPageOutlet from '../Components/Auth/LoginPageOutlet'
import LoginImages from '../Components/Auth/LoginImages'
import Signup from '../Components/Auth/Signup'

const Routing = () => {
  return (
    <div>
        <Routes>
            
            <Route path='/' element={<LoginPageOutlet/>} >
                <Route path='/' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>} />
            </Route>
        </Routes>
    </div>
  )
}

export default Routing