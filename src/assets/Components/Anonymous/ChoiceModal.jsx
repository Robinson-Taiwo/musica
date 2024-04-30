/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import React, { useState } from 'react'
import "./ChoiceModal.css"

const ChoiceModal = ({choiceModal, setChoiceModal, handleCluesSubmit, clues, openModal, setClues }) => {




  const handleChange = (e) => {
    setClues({ ...clues, [e.target.name]: e.target.value });
};

const [warning, setWarning]= useState("")


const SubmitClues = (e) => {

  if (
    clues.nameInitial === "" ||
    clues.friendship === "" ||
    clues.closeRelation === "" ||
    clues.specialClues === ""
  ) {
    setWarning("Please fill up all the fields before proceeding");
  
    setTimeout(() => {
      setWarning("");
    }, 3000);
  }

  // handleCluesSubmit()
  openModal()

    // Reset the state values of the input fields to empty strings
    setClues({
      nameInitial: "",
      friendship: "",
      closeRelation: "",
      specialClues: ""
    });
  








};



console.log(clues.specialClues === "" )


  return (
    <div className='hints-form' >

    <div className="toatss-messages">
{warning}
    </div>
      
      
      <h1 className='hints-header' >Fill the form below to give @Oluwarotimi__ some clues about yourself</h1>
     
    
    <div className="hints-question">


<div className="hint-que">
 <label htmlFor='nameInitial'> Your Hobbies</label>

<input type="text" id="nameInitial" name="nameInitial" className='hint-input' value={clues.nameInitial} onChange={handleChange}/> 

</div>

<div className="hint-que">
 <label htmlFor='friendship'  > Rate your friendship on a scale of 1-10</label>

<input  type="number" id="friendship" name="friendship" className='hint-input' value={clues.friendship} onChange={handleChange} /> 

</div>



<div className="hint-que">
 <label htmlFor="closeRelation" > How close are you to @Oluwarotimi__</label>
 <span className='hint-notices' >(E.g close, not too close, very close)</span>

<input type="text" id="closeRelation" name="closeRelation" value={clues.closeRelation} onChange={handleChange} className='hint-input'  /> 

</div>


<div className="hint-que">
 <label> Any Special Clue??</label>
 <span className='hint-notices'>(Riddle @Oluwarotimi__ or describe a special clue)</span>

<input id="specialClues" name="specialClues" value={clues.specialClues} onChange={handleChange} className='hint-input' type="text" /> 

</div >


<div className='position-clues-btn' >
<button  onClick={()=>SubmitClues()}  className="submit-clues">Submit Clues</button>

</div>



    </div>
    
    
    
    </div>
  )
}

export default ChoiceModal




