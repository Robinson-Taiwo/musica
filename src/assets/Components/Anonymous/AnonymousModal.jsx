/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import close from "/icons/close.svg"

import "./AnonymousModal.css"
import ChoiceModal from './ChoiceModal'

const AnonymousModal = ({modal, setShowModal, choiceModal, setChoiceModal, toastMessage, setToastMessage, openModal  }) => {


// const [nextt, setNextt]= useState("")
const [warning, setWarning]= useState("")


const next = ()=>{

 setChoiceModal(true)
 setShowModal(false)

}


const fully = ()=>{

  openModal()
  setToastMessage("Message sent without Clues")

  
 
 }



  return (
    <div className='showModal' >

      
<div className="modal-box">

<div onClick={()=>setShowModal(!modal)}  className="close-modal-box">
 <img src={close} alt="" />
</div>

<div className="abs">
 {warning}
</div>

<h3 className="modal-que">

  How do you want to send this message
</h3>


<div className="modal-options">

<input value="send" onClick={()=>fully()} type="radio" name="anonymous" id="a-check" className='checkbox' />

<p className="modal-opt">
Fully Anonymous
</p>

</div>


<div className="modal-options">

<input value="dont" onClick={()=> next() } type="radio" name="anonymous" id="a-check" className='checkbox' />

<p className="modal-opt">
partly Anonumous
</p>

</div>

{/* <div onClick={()=> next()} className="modal-next">
  Next
</div> */}



</div>





    </div>
  )
}

export default AnonymousModal

