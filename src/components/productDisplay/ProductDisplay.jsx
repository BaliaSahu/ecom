import React, { useContext } from 'react'
import './ProductDisplay.css'
import star from '../../assets/star.svg'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
      // console.log(props.title)
      const{addToCart}=useContext(ShopContext)
      return (
            <div className='ProductDisplay'>
                  <div className='left'>
                        <div className="left4">
                              <img src={props.image} alt="" />
                              <img src={props.image} alt="" />
                              <img src={props.image} alt="" />
                              <img src={props.image} alt="" />
                        </div>
                        <div className="right1">
                              <img src={props.image}  />
                        </div>
                  </div>
                  <div className='righte'>
                        <div className='fir'><p>{props.title}</p></div>
                        <ul className="stars">
                              <li><img src={star} alt="" /></li>
                              <li><img src={star} alt="" /></li>
                              <li><img src={star} alt="" /></li>
                              <li><img src={star} alt="" /></li>
                              <li><img src={star} alt="" /></li>
                        </ul>
                        <div className="price">
                              <p className='old'>₹{props.new_price}</p>
                              <p className='new'>₹{props.old_price}</p>
                        </div>
                        <main className='size'>
                              <ul>
                                    <li>S</li>
                                    <li>M</li>
                                    <li>L</li>
                                    <li>XL</li>
                                    <li>XXL</li>
                              </ul>
                        </main>
                        <div className='bnt'><button onClick={()=>{addToCart(props.id)}} >Add to Cart</button></div>
                        <div id="cat">Category-{props.category}</div>
                  </div>
            </div>
      )
}

export default ProductDisplay