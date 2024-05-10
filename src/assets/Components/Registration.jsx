/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import icon from "/Images/logo-icon.png"
import arrow from "/icons/arrow.svg"

import { Link, useNavigate } from 'react-router-dom'
import "./Registration.css"
import { supabase } from './Supabase/supabase'
import { loginUser, createUser } from './Anonymous/Firebase/auth'
import { useAuth } from './Anonymous/contexts/authContext'
import { sendEmailVerification, updateProfile } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Anonymous/Firebase/firebase'



const Registration = () => {

   
  let navigate = useNavigate();

  const [redirecting, setRedirecting] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false)
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

   
    }
  }, [redirecting, navigate]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
   
      try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);


        const user = userCredential.user

        await updateProfile(user, { displayName: formData.username });

        
        // Send verification email
        await sendEmailVerification(userCredential.user);
  
        // Optionally, you can display a message to the user indicating that a verification email has been sent
      
        setSuccessMessage("Verification email has been sent. Please verify your email before logging in.")
        setTimeout(() => setSuccessMessage("")
        , 2000); 
        
        setTimeout(() => navigate('/', { replace: true })
        , 5000); 

        // Clear form fields after successful signup
        setFormData({
          username: '',
          email: '',
          password: '',
        });
      } catch (error) {
        // Handle any errors that occur during sign-up
        setFormData({
          username: '',
          email: '',
          password: '',
        });
        setErrorMessage(error.message.includes("auth/email-already-in-use") && "invalid username or password");
        // setErrorMessage(error.message);

        console.log(error.message)

        setTimeout(() => setErrorMessage("")
      , 2000); 
      } finally {
        // Reset isSigningIn state after sign-up attempt
        setIsSigningIn(false);
        setFormData({
          username: '',
          email: '',
          password: '',
        });
      }
    
  };


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