import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'
import TopCreators from '../Components/TopCreators'

const HomeOutlet = () => {
  return (
   
         <div className="h-screen">
      <div>
        <Header />
      </div>
      <div className="flex">
        <Sidebar  />
        <Outlet />
        <TopCreators />
      </div>
    </div>
    
  )
}

export default HomeOutlet