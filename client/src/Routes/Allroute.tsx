import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../pages/Home'
import Navbar from '../Components/Navbar'

const Allroute = () => {
  return (
    <>
     <Navbar></Navbar>
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    {/* <Route path="" element={<Home></Home>}></Route> */}
    </Routes>
    </>

  )
}

export default Allroute