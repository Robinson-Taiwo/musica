/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import icon from "/Images/logo-icon.png"
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from './Supabase/supabase'
// import { supabase } from '../Components/Supabase';
import { createUser, doSignOut, doSendEmailVerification, loginUser, getCurrentUser } from './Anonymous/Firebase/auth'
import { AuthContext, useAuth } from './Anonymous/contexts/authContext'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfo } from './Anonymous/Store/MessageSlice'
// import {value}

const Login = () => {

 

  const [userName, setUserName] = useState("")
const [password, setPassword] = useState("")
const [isSigningIn, setIsSigningIn] = useState(false)


   const dispatch = useDispatch()
let navigate = useNavigate();

const userInfo = useSelector(state => state.user); // Correctly access the messages state
const logedIn = useSelector(state => state.isLoggedIn)


const [redirecting, setRedirecting] = useState(false);

const [user, setUser] = useState(null); // State to store the current user

  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  useEffect(() => {
    const unsubscribe = getCurrentUser(setUser); // Listen for changes in authentication state

    return () => unsubscribe(); // Cleanup function to unsubscribe when component unmounts
  }, []);

  console.log(userInfo)



  const handleSubmit = async (e)=>{
e.preventDefault()




  try {
     // Logging in with email and password
     const user = await loginUser(formData.email, formData.password);

     // Optionally, you can display a message to the user indicating that they have successfully logged in
     setSuccessMessage("You have successfully logged in");
     setTimeout(() => setSuccessMessage("")
     , 3000); 


     
     // Clear form fields after successful login
     setFormData({
       email: '',
       password: '',
      });
      

      // Redirect the user to another page if needed
      navigate('/Profile', { replace: true });
      
      // Dispatch action to store user information in Redux state
      dispatch(setUserInfo(user)); // Assuming 'user' contains the user information
  } catch (error) {
    // Handle any errors that occur during sign-up
    setErrorMessage(error.message.includes("invalid-credential") && "invalid username or password");
    setTimeout(() => setErrorMessage("")
    , 2000); 
     // Clear form fields after error is displayed
     setFormData({
      email: '',
      password: '',
     });
    console.log(error.message);
  }


  }

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

<div className="toatL-messages">

{successMessage && <p>{successMessage}</p>}
</div>




<div className="toatsSs-messages">
{errorMessage && <p>{errorMessage}</p>} 

</div>

<form onSubmit={handleSubmit}>


    <p className='form-label' >Your E-mail </p>


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
   <span>Login</span> <span></span>
</button>
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