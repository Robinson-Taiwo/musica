/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import icon from "/Images/logo-icon.png"
import arrow from "/icons/arrow.svg"

import { Link, useNavigate } from 'react-router-dom'
import "./Registration.css"
import { supabase } from './Supabase/supabase'

const Registration = () => {

   
  let navigate = useNavigate();

  const [redirecting, setRedirecting] = useState(false);
  
 
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (redirecting) {
      const timeout = setTimeout(() =>  navigate('/', { replace: true })
      , 3000); // Redirect after 3 seconds

      // Cleanup function to clear timeout on component unmount
    //   return () => clearTimeout(timeout);
    }
  }, [redirecting, navigate]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e)=>{
e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            username: formData.username,
          }
        }
     
      }, {
        headers: {
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtkb3p4a2Nma2JjZ2dqZm14emp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0OTU0MzEsImV4cCI6MjAzMDA3MTQzMX0.eAkfQHpoaFsU9lnlp2gvXmzlx6qsKKND9Ss-W-w-yWA',
        },
      });
      
      setFormData({
        email: "",
        username: "",

  password: ""
      })
      setRedirecting(true)
    setSuccessMessage("Account created successfully! check your email")
    } catch (error) {
     setErrorMessage(error)
    }

  }


  return (
    <div className='a-container' >
        
<div className="second-layerss">


<div className="icon-header">
    <img className='icon-logo' src={icon} alt="" />
</div>


<h1 className="login-header">
   Register
</h1>

<div className="toatL-messages">
{successMessage && <p>{successMessage}</p>}

</div>

<div className="toatsSs-messages">
{errorMessage && <p>{errorMessage}</p>} 

</div>





<form  onSubmit={handleSubmit}>



<p className='form-label' >Your Username </p>


<input
    type="text"
    name="username"
    value={formData.username}
    onChange={handleChange}
    placeholder="Username"
    required // Add required attribute for form validation
    className='login-input'
  />



<p className='form-label  mt ' >E-mail</p>


    <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required // Add required attribute for form validation
        className='login-input'
      />

    <p className='form-label  mt ' >Password</p>

    <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required // Add required attribute for form validation
        className='login-input'

      />

<button type='submit' className="view-messagesd settings ">
   <span>Register Account</span> <span><img src={arrow } alt="" className='share' /></span>
</button>
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