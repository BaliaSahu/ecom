import React from 'react'
import back1 from '../../assets/heroback.jpg'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left" id="nh">
        <p><span>NEW ARRIVALS ONLY</span></p>
        <h1 id="h1">new collection for everyone</h1>
        <button className='hero-left-btn' id='n'>Latest Collection</button>
      </div>
      {/* <div className="hero-right"> */}
        
      {/* </div> */}
    </div>
  )
}

export default Hero