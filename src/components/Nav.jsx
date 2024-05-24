import React from 'react'
import menu from './svg/bars-solid.svg'
import cart from './svg/cart-shopping-solid.svg'
import './css/nav.css' 
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <header>
        <div className='logo'>
            <h1><a href='#'>Nike</a></h1>
        </div>   
        <nav>
            <ul>
                <li><Link to="home">Home</Link></li>
                <li><Link to="product">Product</Link></li>
                <li><Link to="contact">Contact</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="login">Login/Register</Link></li>
            </ul>
            <div className='nav-cart'>
                <span>0</span>
                <img src={cart} alt='0' width="20"></img>
            </div>
        </nav>
        </header>   
    </div>
  )
}

export default Nav