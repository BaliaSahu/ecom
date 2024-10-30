import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'

const CartItems = () => {
      const {total,cart,collection,removeFromCart}=useContext(ShopContext);
      // console.log(getTotalCartAmount());
      
      return (
            <div className='CartItems'>
                  <div className="cartItems-format-main">
                        <p>Products</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                  </div>
                  <hr />
                  {
                        collection.map((item)=>{
                              if(cart[item.id]>0){
                                    let b=cart[item.id];
                                    console.log(b);
                                    return(
                                          <div className='cartitems-format'>
                                                <img id="src" src={item.image} alt="" />
                                                <p id="iTitle">{item.title}</p>
                                                <p id="inp">₹{item.new_price}</p>
                                                <button id="cbtn">{cart[item.id]}</button>
                                                <p>₹{b*item.new_price}</p>
                                                <button onClick={()=>{ removeFromCart(item.id) }} className='remove' id="remo">Remove</button>
                                          <hr />
                                          </div>
                                          
                                    )
                              }
                              else{
                                    return null;
                              }
                        })
                  }
                  <div className="cartItems-down">
                        <div className='cartItemsTotal'>
                              <h2 id="ct">Cart Totals</h2>
                        </div>
                        <div className='six'>
                              <div className='same'>
                                    <div>Subtotal</div>
                                    <div>₹{total}</div>
                              </div>
                              <hr />
                              <div className='same'>
                                    <div>Shipping fee</div>
                                    <div>Free</div>
                              </div>
                              <hr />
                              <div className='same'>
                                    <div>Total</div>
                                    <div>₹{total}</div>
                              </div>
                        </div>
                        <div>
                              <button className='proceed'>PROCEED TO CHECKOUT</button>
                        </div>
                  </div>
            </div>
      )
}

export default CartItems