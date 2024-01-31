import React from 'react'
import {Routes,Route} from "react-router"
import Login from '../Components/Auth/Login'
import LoginPageOutlet from '../Components/Auth/LoginPageOutlet'

import Signup from '../Components/Auth/Signup'

import HomeOutlet from '../Pages/HomeOutlet'
import HomeFeed from '../Pages/HomeFeed'
import Explore from '../Pages/Explore'
import People from '../Pages/People'
import Saved from '../Pages/Saved'
import Create from '../Pages/Create'

const Routing = () => {
  return (
    <div>
        <Routes>
            
            <Route path='/' element={<LoginPageOutlet/>} >
                <Route path='/' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>} />
            </Route>
            <Route path='/content' element={<HomeOutlet/>}>
              <Route path='/content/home' element={<HomeFeed/>}/>
              <Route path='/content/explore' element={<Explore/>}/>
              <Route path='/content/people' element={<People/>}/>
              <Route path='/content/saved' element={<Saved/>}/>
              <Route path='/content/create' element={<Create/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default Routing