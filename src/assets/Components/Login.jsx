/* eslint-disable no-unused-vars */
import React from 'react'
import icon from "/Images/logo-icon.png"
import "./Login.css"

const Login = () => {
  return (
    <div className='a-container' >
        
<div className="second-layerss">


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


    <p>yourusername </p>

    <input type="text" />
</form>


</div>


    </div>
  )
}

export default Login