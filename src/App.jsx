import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Cart from "./Page/Cart";
import Navbar from "./Page/Navbar";
import Items from "./Page/Contaxt";
import By from "./Page/By";
import Favorite from "./Page/Favorite";
import Login from "./Page/Login";
import SignUP from "./Page/SignUP";

function App() 
{

  let [time,setTime]=useState([]);

  let [count, setCount]=useState({});

  let [favorite,setFavorite]=useState([]);

  let ATC=(val)=>
  {
    let Add = time.find((x)=> x.id == val.id)
    if(!Add)
    {
      setTime([...time, val]);
    }else{
      alert("Second Time Not To Be Added...!!");
    }
  };


  let RFC= (val) =>
  {
    let remove = time.filter((y)=>y.id !==val.id)
    setTime(remove);
  };


  let ATF = (val) =>
  {
    let fav =favorite.find((x)=>x.id == val.id)
    if(!fav)
    {
      setFavorite([...favorite, val]);
    }
    else
    {
      alert("Already In Favorite...!");
    }
  };

  let RFF = (val) =>
  {
    let remove = favorite.filter((y)=>y.id !== val.id)
    setFavorite(remove);
  };


  return(
    <>
    <Items.Provider value={{time, ATC, RFC, count, setCount, favorite, ATF, RFF}}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="/by" element={<By/>}/>
      <Route path="lg" element={<Login/>} />
      <Route path="/favorite" element={<Favorite/>}/>
      <Route path="sign-up" element={<SignUP/>}/>
    </Routes>
    </BrowserRouter>
    </Items.Provider>
    </>
  )
}

export default App;