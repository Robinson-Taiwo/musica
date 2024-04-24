/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./ChoiceModal.css"

const ChoiceModal = ({choiceModal, setChoiceModal, toastMessage, setToastMessage}) => {

const SubmitClues = (event)=>{
  // event.preventDefault()
  setChoiceModal(false)

  setTimeout(() => {
    setToastMessage("Message Sent with Clues")
  }, 4000);

}

  return (
    <div className='hints-form' >

    
      
      
      <h1 className='hints-header' >fill the form Below to give @Oluwarotimi__ some clues about yourself</h1>
     
    
    <div className="hints-question">


<div className="hint-que">
 <p> What is an initial of any of your Name</p>

<input className='hint-input' type="text" /> 

</div>

<div className="hint-que">
 <p> Rate your friendship on a scale of 1-10</p>

<input className='hint-input' type="text" /> 

</div>



<div className="hint-que">
 <p> How close are you to @Oluwarotimi__</p>
 <span className='hint-notices' >(E.g close, not too close, very close)</span>

<input className='hint-input' type="text" /> 

</div>


<div className="hint-que">
 <p> Any Special Clue??</p>
 <span className='hint-notices'>(Riddle @Oluwarotimi__ or descrive a special clue)</span>

<input className='hint-input' type="text" /> 

</div >


<div className='position-clues-btn' >
<button  onClick={()=>SubmitClues()} className="submit-clues">Submit Clues</button>

</div>



    </div>
    
    
    
    </div>
  )
}

export default ChoiceModal