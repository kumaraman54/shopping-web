import React, {useState, useContext} from "react";

export const OrderContext = React.createContext()

export const OrderContextProvider = ({children}) => {
    const [order, setOrder] = useState([])
    const [totalOrder, setTotalOrder] = useState(0)

    return(
        <OrderContext.Provider value={{order, setOrder, totalOrder, setTotalOrder}}>
            {children}
        </OrderContext.Provider>
    )
}

export default function useOrderContext(){
    return useContext(OrderContext)
} 
