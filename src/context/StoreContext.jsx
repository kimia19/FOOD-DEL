import React, { createContext, useEffect, useState } from 'react'
import { food_list } from '../assets/assets'
export const StoreContext = createContext()

const StoreContextProvider = (props) => {

  const [cartItems, setCartItems] = useState({});
  {/* when the cart is empty we return an object where we define itemId 
the next parmetr is related to the quantity */}
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        let itemInfo = food_list.find((product) => product._id = items);
        totalAmount += itemInfo.price * cartItems[items];
      }
      return totalAmount;
    }
  }

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider