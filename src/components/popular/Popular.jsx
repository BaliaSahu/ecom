import React from 'react'
import './Popular.css'
import Item from '../item/Item'
import p1_img from '../../assets/iphone.webp'

const Popular = () => {
      let item=[
            {
                  id:1,
                  name:"Stripped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
                  image:p1_img,
                  new_price:49.89,
                  old_price:89.00,
            },
            {
                  id:2,
                  name:"Stripped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
                  image:p1_img,
                  new_price:49.89,
                  old_price:89.00,
            },
            {
                  id:3,
                  name:"Stripped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
                  image:p1_img,
                  new_price:49.89,
                  old_price:89.00,
            },
            {
                  id:4,
                  name:"Stripped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
                  image:p1_img,
                  new_price:49.89,
                  old_price:89.00,
            }
      ]
      return (
            <div className='popular'>
                  <h2>POPULAR IN WOMEN</h2>
                  <hr />
                  <div className="popular-item">
                        {item.map((i)=>{
                              return <Item key={i} id={i.id} name={i.name} image={i.image} old_price={i.old_price} new_price={i.new_price}></Item>
                        })}
                  </div>
            </div>
      )
}

export default Popular