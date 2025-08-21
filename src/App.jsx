import React, { useEffect, useState } from 'react'
import "./App.css"
import { BrowserRouter as Router,Routes, Route, BrowserRouter,  } from "react-router-dom";

import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product';
import Cart from './pages/Cart';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Login from './pages/Login';
import Register from './pages/Register';
import Myorders from './pages/Myorders';
import Scroll from './pages/Scroll';




const App = () => {
  let details=localStorage.getItem("registerdetails")
    
  return (
    <div>
          
     
    
    <BrowserRouter>
    <Scroll/>
      
       
      <Routes>
        
      
        <Route path="/" element={details?(<Home/>):(<Register/>)}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>
        <Route path="/Contactus" element={<Contactus/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/orders" element={<Myorders/>}  />
        


    
      </Routes>
      
    </BrowserRouter>

   </div>
  )
}

export default App