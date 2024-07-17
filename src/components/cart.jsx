import React, {useState} from 'react'
import './css/cart.css'
import useOrderContext from '../context/OrderContext'
import OrderCard from './OrderCard'

const Cart = () => {
  const {order, setOrder} = useOrderContext()
  
  

  return (
    <div className='cart-box'>
    {
      order.length == 0 ? "Add something to your liking :)" :
      order.map((item) => (
        <OrderCard key={item.id} item={item}/>
      ))
    }
    </div>
  )
}


export default Cart