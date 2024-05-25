import React from 'react'
import './css/cart.css'

const Cart = () => {
  return (
    <div className='cart-box'>
    <div className='cart-details'>
    <img src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b2e8f89f-7725-40e8-8616-4e35415f66e8/air-jordan-1-low-se-craft-shoes-8SsDw6.png'></img>
    <div className='cart-desc'>
    <h1>Nike shoe1</h1>
    <p>UI/UX DESIGNING USING REACT</p>
    <p>Nike shoes are a prominent line of footwear produced by Nike, Inc., a global leader in sportswear and athletic gear. Known for their innovative designs, high-quality materials, and advanced technology, Nike shoes cater to a wide range of activities, from running and basketball to casual wear and fashion.</p>
    <div className='btn'>
      <button>-</button>
      <span>1</span>
      <button>+</button>
    </div>
   
    </div>
    <div className='price'>
      $23
    </div>
</div>
    </div>
  )
}

export default Cart