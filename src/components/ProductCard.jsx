// import React from 'react'
// import './css/product.css'
// import useOrderContext from '../context/OrderContext'

// const ProductCard = ({objects}) => {
//     const {order, setOrder} = useOrderContext()

//     const addToCart = () => {
//         const newOrder = {...objects, about: "Nike shoes are a prominent line of footwear produced by Nike, Inc., a global leader in sportswear and athletic gear. Known for their innovative designs, high-quality materials, and advanced technology, Nike shoes cater to a wide range of activities, from running and basketball to casual wear and fashion.",
//        quantity: 1 ,id: objects.head}

//        setOrder([...order, newOrder])
//     }
//   return (
//     <div className='product'>
        
        
//         <div className='pro-img'>
//             <img src={objects.image}></img>
//             </div>
//             <h1>{objects.head}</h1>
//             <span>{objects.price}</span>
//             <p>{objects.desc}</p>
//             <button onClick={addToCart}>Add to cart</button>
//         </div>
//   )
// }

// export default ProductCard

import React, { useState } from 'react';
import './css/product.css';
import useOrderContext from '../context/OrderContext';

const ProductCard = ({ objects }) => {
  const { order, setOrder } = useOrderContext();
  const [showPopup, setShowPopup] = useState(false);

  const addToCart = () => {
    const newOrder = {
      ...objects,
      about: "Nike shoes are a prominent line of footwear produced by Nike, Inc., a global leader in sportswear and athletic gear. Known for their innovative designs, high-quality materials, and advanced technology, Nike shoes cater to a wide range of activities, from running and basketball to casual wear and fashion.",
      quantity: 1,
      id: objects.head,
    };

    setOrder([...order, newOrder]);
    setShowPopup(true);

    // Hide the popup after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className='product'>
      <div className='pro-img'>
        <img src={objects.image} alt={objects.head}></img>
      </div>
      <h1>{objects.head}</h1>
      <span>{objects.price}</span>
      <p>{objects.desc}</p>
      <button onClick={addToCart}>Add to cart</button>

      {showPopup && <div className='popup'>Item added to cart!</div>}
    </div>
  );
};

export default ProductCard;
