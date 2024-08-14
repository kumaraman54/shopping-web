

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import menu from './svg/bars-solid.svg';
import cart from './svg/cart-shopping-solid.svg';
import close from './svg/circle-xmark-solid.svg';
import './css/nav.css';
import useOrderContext from '../context/OrderContext';

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const { order, totalOrder, setTotalOrder } = useOrderContext();

  const menuToggle = () => {
    setToggle(!toggle);
    console.log('Click');
  };

  useEffect(() => {
    if (order.length) {
      let orderCount = 0;
      order.forEach(element => {
        orderCount += element.quantity;
      });
      setTotalOrder(orderCount);
    } else {
      setTotalOrder(0);
    }
  }, [order, setTotalOrder]);

  return (
    <div>
      <header>
        <div className='menu' onClick={menuToggle}>
          <img src={menu} alt='' width='20' />
        </div>

        <div className='logo'>
          <h1>
            <Link to='home'>Nike</Link>
          </h1>
        </div>
        <nav>
          <ul className={toggle ? 'toggle' : ''}>
            <li>
              <Link to='home'>Home</Link>
            </li>
            <li>
              <Link to='product'>Product</Link>
            </li>
            <li>
              <Link to='contact'>Contact</Link>
            </li>
            <li>
              {/* <Link to='about'>About</Link> */}
            </li>
            <li>
              <Link to='login'>Login/Register</Link>
            </li>
            <li className='close' onClick={menuToggle}>
              <img src={close} alt='' width='20' />
            </li>
          </ul>
          <div className='nav-cart'>
            <span>{totalOrder}</span>
            <Link to='cart'>
              <img src={cart} alt='0' width='20' />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
