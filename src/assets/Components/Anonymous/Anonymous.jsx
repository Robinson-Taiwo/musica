/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import AnonymousModal from './AnonymousModal'
import play from "/Images/play.png"
import share from "/icons/share.svg"
import whatsapp from "/icons/whatsapp.svg"
import arrow from "/icons/arrow.svg"
import copy from "/icons/copy.svg"
import settings from "/icons/settings.svg"


import instagram from "/icons/instagram.svg"
import facebook from "/icons/facebook.svg"

import "./Anonymous.css"
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './contexts/authContext'
import { useDispatch, useSelector } from 'react-redux'
import { getAuth, signOut } from 'firebase/auth'
import { logout } from './Store/MessageSlice'

const Anonymous = () => {
    const userInfo = useSelector(state => state.user); // Correctly access the messages state
const navigate = useNavigate()
    const logedIn = useSelector(state => state.isLoggedIn)

    const [modal, setmodal] = useState(false)
    const [dummyName, setDummyName] = useState("unknown")
 
useEffect(() => {
 
    setmodal(true)
}, [])



useEffect(() => {
 if (!logedIn){

    navigate('/', { replace: true })
 }
    
}, [logedIn, navigate])

    //defining a function to close the modal up
    const closeModal = ()=>{
        setmodal(false)
        }
        

const { currentUser } = useAuth()
const auth = getAuth();
const dispatch = useDispatch()

const handleLogOut = () =>{
    signOut(auth).then(() => {
        dispatch(logout());
        
        console.log("you have signed out")
        navigate('/', { replace: true })

      }).catch((error) => {
        // An error happened.
      });
}


  return (


    <section className='a-container' >
<section className="second-layer">

    <h1 className="user-name">
    {userInfo && userInfo.user.displayName ? userInfo.user.displayName : "unknown"}'s Profile
           {/* {console.log(userInfo.displayName)} */}
    </h1>

    <h2 className="user-link">
       <span> https://gdpd.xyz/{userInfo && userInfo.user.displayName ? userInfo.user.displayName : "unknown"}__</span>  <span><img className='copy' src={copy} alt="" /></span>
    </h2>

    <p className="user-notice">
        <span className="notice-bold">share your profile link❤️  </span> to  get responses from your friend. Go to <span className="notice-bold" >"View Messages"</span> to check out the responses.👌
    </p>


<div className="user-buttons">


<Link  to="/Answers" className="view-messages settings">
<span>View Messages</span> <span><img src={arrow } alt="" className='share' /></span>
</Link>

<button  className="share-link settingss ">
 <span><img src={share} alt="" className='share' /></span> <span>Share My Profile</span>
</button>

<button className="share-link settings green  ">
<span><img src={whatsapp} alt="" className='share' /></span> <span>Share on Whatsapp</span>
</button>

<button className="share-link settings blue">
<span><img src={facebook} alt="" className='share' /></span> <span>Share on Facebook</span>
</button>

<button className="share-link settings ">
<span><img src={instagram} alt="" className='share' /></span> <span>Share My Intagram</span>
</button>

    
</div>


<img src={play} alt=""  className='google_play' />

<div className="purple-line">
</div>

<button onClick={()=> handleLogOut()} className="view-messages settings ">
   <span>settings</span> <span><img src={settings} alt="" className='shared' /></span>
</button>


</section>



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



{/* <div className={`${modal ? "Modal-container" : "showNoModal"}`}>

<div className={`${modal ? "showModal" : "showNoModal"}`} >
    
    
    <div className="modal-texts">
    what if Anonymous isn't really Anonymous?? 

<div>want to check it out?</div>

    </div>



<button onClick={()=>closeModal()}  className="modal-answer">
    sureee!!
</button>



</div>

</div> */}


{/* {modal && <div  className={!modal ? "hidden" : "flex" } ><AnonymousModal modal={modal} /></div>} */}




 

    </section>
  )
}

export default Anonymous