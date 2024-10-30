import React from 'react'
import linkedln from '../../assets/linkedln.svg'
import insta from '../../assets/insta.svg'
import whatsapp from '../../assets/whatsapp.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <h2>Shoppy</h2>
      </div>
      <div className='pages-links'>
        <div className="subpages">
          Company
        </div>
        <div className="subpages">
          Products
        </div>
        <div className="subpages">
          Offices
        </div>
        <div className="subpages">
          About
        </div>
        <div className="subpages">
          Contact
        </div>
      </div>
      <div className="social-links">
        <div className='social'>
          <img src={linkedln}  />
        </div>
        <div className='social'>
          <img src={whatsapp} />
        </div>
        <div className='social'>
          <img src={insta} />
        </div>
      </div>
      <div className='copyright'>
        <hr />
        <p>Copyright@2024-All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer