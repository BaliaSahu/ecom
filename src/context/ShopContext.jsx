import React, { createContext, useState, useEffect } from "react";
import collection from "../assets/allproduct";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
      let cart = {};
      for (let index = 0; index < collection.length; index++) {
            cart[index] = 0;
      }
      return cart;
};

const ShopContextProvider = (props) => {
      const [cart, setCartItems] = useState(getDefaultCart());
      const [total, setTotal] = useState(0);
      const[count,setCount]=useState(0);
      useEffect(() => {
            const calculateTotal = () => {
                  let newTotal = 0;
                  for (let item in cart) {
                        if (cart[item] > 0) {
                              const itemInfo = collection.find((e) => e.id === Number(item));
                              if (itemInfo) {
                                    newTotal += itemInfo.new_price * cart[item];
                              }
                              
                        }
                  }
                  setTotal(newTotal);
            };
            calculateTotal();
      }, [cart]); // Recalculate total when the cart changes

      const addToCart = (itemId) => {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
            setCount(count+1);
      };

      const removeFromCart = (itemId) => {
            setCartItems((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) })); // Prevent negative quantities
            setCount(count-1);
      };

      const contextValue = { count,total, collection, cart, addToCart, removeFromCart };

      return (
            <ShopContext.Provider value={contextValue}>
                  {props.children}
            </ShopContext.Provider>
      );
};

export default ShopContextProvider;
