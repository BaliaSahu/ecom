import React, { useContext, useRef } from 'react'
import './Navbar.css'
import { useState } from 'react'
import order from '../../assets/order.svg'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import open from '../../assets/nav_menu_open.svg'
import close from '../../assets/nav_menu_close.svg'

const Navbar = () => {
      // const[count,setCount]=useState(0);
      const[menu,setMenu]=useState();
      const menuref=useRef();
      const{count}=useContext(ShopContext);

      const openmenu=()=>{
            menuref.current.style.left="0px";
      }
      const closemenu=()=>{
            menuref.current.style.left="-400px";
      }
  return (
      <div className='Navbar'>
            <div className="nav-logo">
                  <h2>Shoppy</h2>
            </div>
            <div className="nav-menu">
                  <img src={open} onClick={openmenu} className='openee' id='openee' />
                  <ul id='navu' ref={menuref}>
                        <li><img src={close} onClick={closemenu} className='closee'/></li>
                        <li id='sections'>----Sections----</li>
                        <li><NavLink to='/'>Shop</NavLink></li>
                        <li><NavLink to='/mens'>Men</NavLink></li>
                        <li><NavLink to='/women'>Women</NavLink></li>
                        <li><NavLink to='/kid'>Kids</NavLink></li>
                  </ul>
            </div>
            <div className='nav-login-cart'>
                  <NavLink to='/login'><button id="login">Login</button></NavLink>
                  <NavLink to='/cart'>
                        <img src={order} id='ord'/>
                        <div className='nav-cart-count' id="count">{count}</div>
                  </NavLink>
            </div>
      </div>
  )
}
export default Navbar