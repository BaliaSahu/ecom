import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
      <div className='div'><img id="idm" src={props.image}/></div>
      <p>{props.name}</p>
      <div className="item-prices">
            <div className="newprice">
                  ${props.new_price}
            </div>
            <div className="oldprice">
                  ${props.old_price}
            </div>
      </div>
    </div>
  )
}

export default Item