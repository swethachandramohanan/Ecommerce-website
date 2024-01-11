import React,{Suspense,lazy} from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import Home from './home.jsx';
// import './css/style.css'
import User from './user.jsx';
import Login from './login.jsx';
import Nav from './Nav.jsx';
import Seller from './seller.jsx';
import Profile from './profile.jsx';
import Cart from './cart.jsx';

import {Product1,Product2,Product3,Product4,Product5,Product6,Product7,Product8} from './product.jsx'
import {
  Moisturizer,
  Sunscreen,
  Concealer,
  CompactPowder,
  Foundation,
  Primer,
  NailPolish,
  Eyeliner,
} from './view.jsx';
function App() {

  let mode = import.meta.env.MODE;
  console.log(mode);
  if(mode == "development"){
    axios.defaults.baseURL =`http://localhost:${import.meta.env.VITE_PORT}`;
    console.log("axios.defaults.baseURL:", axios.defaults.baseURL);
  }
  if(mode == "production"){
    axios.defaults.baseURL = 'http://localhost:3000';
  }
  const [count, setCount] = useState(0);
  const [data , setData] = useState(null);

  useEffect(() => {
    axios.get("/api")
      .then(res => {
        setData(res.data);
      });
  }, []); 

  return (
    <>
     <BrowserRouter>
     <Nav/>
   <Routes>
    <Route path="/" element={<Home />} />
     <Route path="/user" element={<User />} />
     <Route path="/login" element={<Login />} />
     <Route path="/seller" element={<Seller/>} />
     <Route path="/moisturizer" element={<Moisturizer/>} />
     <Route path="/sunscreen" element={<Sunscreen/>} />
     <Route path="/concealer" element={<Concealer />} />
     <Route path="/compactpowder" element={<CompactPowder />} />
     <Route path="/foundation" element={<Foundation />} />
    <Route path="/primer" element={<Primer />} />
     <Route path="/nailpolish" element={< NailPolish/>} />
    <Route path="/eyeliner" element={<Eyeliner />} />    
     <Route path="/profile" element={<Profile/>} />
     <Route path="/cart" element={<Cart />} />

           <Route path="/product1" element={<Product1 />} />
          <Route path="/product2" element={<Product2 />} />
          <Route path="/product3" element={<Product3 />} />
          <Route path="/product4" element={<Product4 />} />
          <Route path="/product5" element={<Product5 />} />
          <Route path="/product6" element={<Product6 />} />
          <Route path="/product7" element={<Product7 />} />
          <Route path="/product8" element={<Product8 />} />
  
   </Routes>
   </BrowserRouter>
   <ToastContainer />
    </>
  )
}
export default App;

