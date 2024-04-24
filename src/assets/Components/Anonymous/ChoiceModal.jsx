/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import React from 'react'
import "./ChoiceModal.css"

const ChoiceModal = ({choiceModal, setChoiceModal, handleCluesSubmit, clues, setClues }) => {




  const handleChange = (e) => {
    setClues({ ...clues, [e.target.name]: e.target.value });
};

console.log(clues)


  return (
    <div className='hints-form' >

    
      
      
      <h1 className='hints-header' >fill the form Below to give @Oluwarotimi__ some clues about yourself</h1>
     
    
    <div className="hints-question">


<div className="hint-que">
 <p> What is an initial of any of your Name</p>

<input value={clues.setNameInitial} onChange={(e)=> setNameInitial(e.target.value) } className='hint-input' type="text" /> 

</div>

<div className="hint-que">
 <p> Rate your friendship on a scale of 1-10</p>

<input  value={friendship} onChange={(e)=> setFriendship(e.target.value) }  className='hint-input' type="text" /> 

</div>



<div className="hint-que">
 <p> How close are you to @Oluwarotimi__</p>
 <span className='hint-notices' >(E.g close, not too close, very close)</span>

<input   value={close} onChange={(e)=> setClose(e.target.value) }  className='hint-input' type="text" /> 

</div>


<div className="hint-que">
 <p> Any Special Clue??</p>
 <span className='hint-notices'>(Riddle @Oluwarotimi__ or descrive a special clue)</span>

<input  value={specialClues} onChange={(e)=> setSpecialClues(e.target.value) }  className='hint-input' type="text" /> 

</div >


<div className='position-clues-btn' >
<button  className="submit-clues">Submit Clues</button>

</div>



    </div>
    
    
    
    </div>
  )
}

export default ChoiceModal




