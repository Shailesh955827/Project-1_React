import React, { useContext } from 'react';
import { Link } from 'react-router';
import "../Componates/Navbar.css";
import Items from './Contaxt';

const Navbar = () => {

  let {time,count}=useContext(Items);

  let Totalqty = time.reduce((total,item)=>total +(count[item.id] || 1), 0);

  let Total_price = time.reduce((total,item)=>total + item.price * (count[item.id] || 1), 0);

  return (
    <>
    <div className='main-container'>
      <Link className='sign-list' to="sign-up">Sign-UP</Link>
    <div className="nav-list">
        <Link className='nav-ll' to="/">Home</Link>
        <Link className='nav-ll' to="about">About</Link>
        <Link className='nav-ll' to="cart">Cart <sup>{Totalqty}</sup></Link>
        <Link className='nav-ll' to="/favorite">Favorite</Link>
        <Link className='nav-ll' to="lg">Login</Link>
        <div className='tt-p'>
        <Link className='tt1' to="context">Total-price : Rs. {Total_price}</Link>
        </div>
    </div>
    </div>
    </>
  )
}

export default Navbar;
