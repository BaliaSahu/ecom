import React from 'react'
import './loginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="container">
        <h3>Sign Up</h3>
        <input type="text" name="name" placeholder='Your Name' />
        <input type="email" name="email" placeholder='Email Address' />
        <input type="password" placeholder='password' />
        <button className='continue'>Continue</button>
        <div className='two'>
          <p>Already have an account ? <span className='here'>login here</span> </p>
        </div>
        <div className='two'>
          <input type="checkbox" />
          <p>By continuing i agree to the term of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup