/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import close from "/icons/close.svg"

import "./Clues.css"
import { useSelector } from 'react-redux';

const Clues = ({ clues, setClues, closeRelation, friendship, specialClues, onClose  }) => {

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
     Oops! 😅 No one has sent you a message in last 3 Days! Share your profile link and check back later again!  
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


        </div> )  : (    <div>
    <div className="initals">

<p className="senders-initial">Sender's Initials</p>
<p className="sender-initials">{specialClues}</p>
</div>
   {/* Display other clues */}
   <div>
          <p>Close Relationship: {closeRelation}</p>
          <p>Friendship: {friendship}</p>
         
        </div>

</div> ) }



     


     



        </div>




    </div>
  )
}

export default Clues