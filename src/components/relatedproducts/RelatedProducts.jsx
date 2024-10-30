import React from 'react'
import './RelatedProducts.css'
import { Link } from 'react-router-dom'
const RelatedProducts = (props) => {
      
  return (
    <div className='related'>
      <div className='relProd'>
            <Link to={`/product/${props.id}`}>
            <img id='rim'  onClick={window.scrollTo(0,0)} src={props.image}/>
            </Link>
            <p id='titl'>{props.title}</p>
            <div className='price'>
                  <div className="old">₹{props.new_price}</div>
                  <div className='new'>₹{props.old_price}</div>
            </div>
      </div>
    </div>
  )
}

export default RelatedProducts