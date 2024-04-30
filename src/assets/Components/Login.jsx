/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import icon from "/Images/logo-icon.png"
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from './Supabase/supabase'
// import { supabase } from '../Components/Supabase';


const Login = () => {

const [userName, setUserName] = useState("")
const [password, setPassword] = useState("")


   
let navigate = useNavigate();

const [redirecting, setRedirecting] = useState(false);


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
    if (redirecting) {
      const timeout = setTimeout(() =>  navigate('/Message', { replace: true })
      , 2000); // Redirect after 3 seconds

      // Cleanup function to clear timeout on component unmount
    //   return () => clearTimeout(timeout);
    }
  }, [redirecting, navigate]);


  const handleSubmit = async (e)=>{
e.preventDefault()
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password
          })

        
          if (error) {
            // Handle authentication errors
            if (error.message.includes('invalid')) {
              setErrorMessage('Invalid email or password');
            } else {
              setErrorMessage('An error occurred while logging in. Ensure your credentials are correct ');
              setTimeout(() => {
                setErrorMessage("")
              }, 3000);
            }
          } else {
            // Successful login
            setRedirecting(true)
            setSuccessMessage('You are successfully logged in');
            setTimeout(() => {
                setSuccessMessage("")
              }, 3000);
          }
      
          // Clear form data
          setFormData({
            email: '',
            password: ''
          });

    } catch (error) {
        console.error('Login error:', error.message);
        setErrorMessage('An error occurred while logging in');
        setTimeout(() => {
            setErrorMessage("")
          }, 9000);
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