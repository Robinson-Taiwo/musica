/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import close from "/icons/close.svg"

import "./Clues.css"
import { useSelector } from 'react-redux';

const Clues = ({ clues, setClues, closeRelation, friendship, specialClues, onClose, initials  }) => {

    const messages = useSelector(state => state.messages); // Correctly access the messages state


    const [selectedClues, setSelectedClues] = useState(null);


  return (
    <div className='clues-container' >
        
        
        <div className="clues-inside">
        <div onClick={()=> onClose()}  className="close-modal-box">
 <img src={close} alt="" />
</div>


<h1 className="clues-head">
    Your Clues
</h1>

<p className="clues-subheading">
    The sender sent these Clues. check it out below 👇 👇
</p>

{/* 
<div className="initals">

<p className="senders-initial">
    Senders initials
</p>

<p className="sender-initials">
{specialClues}j
</p>

</div> */}

{ friendship === "" ? (   <div className="message-templatett">

<h1 className="message-temp-head">
    Message:
</h1>

     <p className="message-temp-text mb-[2rem]">
     Oops! 😅  The sender of this message decided to be completely Anonymous and left no clue. Try guessing on your own. 
     </p>

     {/* <div className="message-temp-sender">
        - Anonymous [13-04-2024 19:22 GMT]
     </div> */}

{/*           
<div className="message-temp-options">
<Link to="/Profile" className="share-response">
    Share Response
</Link>

<div className="share-response">
   More Options
</div>

<div className="share-response">
   Check Clues
</div>


</div> */}


        </div> )  : (    <div className='clue-container' >
    <div className="initals">

<p className="senders-init">Sender's Hobbies:</p>


<p className="sender-initial">{initials}</p>
</div>


<div className="initals">

<p className="senders-init">How close the sender is to you:</p>


<p className="sender-initial">{closeRelation}</p>
</div>


<div className="initals">

<p className="senders-init">The sender rated your friendship:</p>


<p className="sender-initial">{friendship} / 10</p>
</div>


<div className="initals">

<p className="senders-init">Special Clue:</p>


<p className="sender-initial">{specialClues}</p>
</div>


  

</div> ) }



     


     



        </div>




    </div>
  )
}

export default Clues