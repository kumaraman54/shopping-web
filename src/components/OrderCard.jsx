

import React, { useState, useEffect } from 'react';
import './css/cart.css';
import useOrderContext from '../context/OrderContext';

const OrderCard = ({ item }) => {
    const { order, setOrder } = useOrderContext();

    // Initialize orderCount state with the quantity from the context
    const [orderCount, setOrderCount] = useState(item.quantity);

    // Update the quantity in the context whenever orderCount changes
    useEffect(() => {
        setOrder(prevItems =>
            prevItems.map(order =>
                order.id === item.id ? { ...order, quantity: orderCount } : order
            )
        );
    }, [orderCount, item.id, setOrder]);

    const incrOrder = () => {
        if (orderCount < 3) {
            setOrderCount(prevCount => prevCount + 1);
        } else {
            console.warn("Three per piece per account at most");
        }
    };

    const decrOrder = () => {
        if (orderCount > 1) {
            setOrderCount(prevCount => prevCount - 1);
        }
    };

    return (
        <div className='cart-details'>
            <img src={item.image} alt={item.head} />
            <div className='cart-desc'>
                <h1>{item.head}</h1>
                <p>{item.desc}</p>
                <p>{item.about}</p>
                <div className='btn'>
                    <button onClick={decrOrder}>-</button>
                    <span>{orderCount}</span>
                    <button onClick={incrOrder}>+</button>
                </div>
            </div>
            <div className='price'>
                {item.price}
            </div>
        </div>
    );
}

export default OrderCard;

