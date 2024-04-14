/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import icon from "/Images/logo-icon.png"
import arrow from "/icons/arrow.svg"

import { Link } from 'react-router-dom'
import "./Registration.css"

const Registration = () => {
  return (
    <div className='a-container' >
        
<div className="second-layerss">


<div className="icon-header">
    <img className='icon-logo' src={icon} alt="" />
</div>


<h1 className="login-header">
   Register
</h1>



<form action="">


    <p className='form-label' >Your Username </p>


    <input className='login-input'  type="text" placeholder='Enter your username ' />

    <p className='form-label  mt ' >Password</p>


<input className='login-input '  type="text" placeholder='Enter your password ' />

<Link to="/Profile" className="view-messagesd settings ">
   <span>Register Account</span> <span><img src={arrow } alt="" className='share' /></span>
</Link>
</form>

<div className="login-last">


<Link to="/Login" className="forgot-password">
    Already Have an Account? Login
</Link>

</div>

<p className="agreement">
By using this service, you agree to our Privacy Policy, Terms of Service and any related policies. (Check Disclaimer)   
</p>



</div>




<div className="anonymous-footer">

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

export default Registration