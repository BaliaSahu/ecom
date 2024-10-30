import React, { useContext } from 'react'
import { NavLink,Link } from 'react-router-dom';
import './CSS/ShopCategory.css'
import {ShopContext} from '../context/ShopContext'
import Item from '../components/item/Item';

const ShopCategory = (props) => {
  const {collection}=useContext(ShopContext);
  // console.log(collection[0]);
  return (
    <div id="parent">
    <div className='ShopCategory'>
      <div className='Fifty_off'>
        <div className='texts'>
          <h2 id="flat">FLAT 50% OFF</h2>
          {/* <h4><span>12</span> Hours <span>20</span> mins</h4> */}
          <button id="exp">Explore now</button>
        </div>
        <div className='cursiveStyle'>
            <h1 id="ptext">{props.text}</h1>
        </div>
      </div>
      <div id="pech" className='shopcategory-products'>
        {
          collection.map((item,index)=>{
            console.log(item.category,props.category);
            if(props.category==item.category){

              return <>
                <div className='product_data'>
                <Link to={`/product/${item.id}`}>
                  <img id='pimage' src={item.image}/>
                </Link>
                  <div className="title">{item.title}</div>
                  <div className='pr'>
                    <div className="old">₹{item.new_price}</div>
                    <div className="new">₹{item.old_price}</div>
                  </div>
                </div>
              </> 
            }
            else{
              return null;
            }
            console.log(item.category);
            return 0;
          })
        }
      </div>
    </div>
    </div>
  )
}

export default ShopCategory