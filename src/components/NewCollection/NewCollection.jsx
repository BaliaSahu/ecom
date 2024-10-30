import React, { useContext } from 'react'
import './NewCollection.css'
import dd from '../../assets/mens.webp'
// import collection from '../../assets/allproduct.js'
import { ShopContext } from '../../context/ShopContext.jsx'

const NewCollection = () => {
      const {collection}=useContext(ShopContext);
      return (
            <div className='new-collection'>
                  <h1>NEW COLLECTIONS</h1>
                  <hr />
                  <div className="collection">
                        {
                              collection.map((item)=>{
                                    return <>
                                          {/* <Link to='/mens'> */}
                                          <div className="itemes">
                                                <div className='it1'>
                                                      <img src={item.image} className='im' />
                                                </div>
                                                <div className='it2'>
                                                      <h3>{item.title}</h3>
                                                      <caption>{item.caption}</caption>
                                                      <div className="prices">
                                                            <p>{item.new_price}</p>
                                                            <p className='old'>{item.old_price}</p>
                                                      </div>
                                                </div>
                                          </div>
                                          {/* </Link> */}
                                    </>
                              })
                        }
                  </div>
            </div>
      )
}

export default NewCollection