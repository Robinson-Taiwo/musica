/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import icon from "/Images/logo-icon.png"
import "./Login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='a-containerl' >
        
<div className="second-layersss">


<div className="icon-header">
    <img className='icon-logo' src={icon} alt="" />
</div>


<h1 className="login-header">
    Login
</h1>

<p className="login-text">
    Recieve anonymous compliments from your friends and send anonymous messages to your friends for free
</p>

<form action="">


    <p className='form-label' >Your Username </p>


    <input className='login-input'  type="text" placeholder='Enter your username ' />

    <p className='form-label  mt ' >Password</p>


<input className='login-input '  type="text" placeholder='Enter your password ' />

<Link to="/Profile" className="view-messagesd settings ">
   <span>Login</span> <span></span>
</Link>
</form>

<div className="login-last">
<p className="forgot-password">
    Forgot Password
</p>

<Link to="/Register" className="forgot-password">
    Don't Have An Account? Register
</Link>

</div>



</div>




<div className="anonymous-footerl">

<div className="owner-footer">
© <span className='text-white' > 2024</span> - Oluwarotimi 

</div>

<div className="footer-links">
<p>Home</p>
<div className="v-lines">
</div>
<p>Disclaimer</p>
<div className="v-lines">
</div>

<p>Contact us</p>

</div>



</div>

    </div>
  )
}

export default Login