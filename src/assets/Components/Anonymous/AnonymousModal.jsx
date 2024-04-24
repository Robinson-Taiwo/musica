/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import close from "/icons/close.svg"

import "./AnonymousModal.css"
import ChoiceModal from './ChoiceModal'

const AnonymousModal = ({modal, setShowModal, choiceModal, setChoiceModal}) => {


const next = ()=>{

setChoiceModal(true)
setShowModal(false)


}



  return (
    <div className='showModal' >

      
<div className="modal-box">

<div onClick={()=>setShowModal(!modal)}  className="close-modal-box">
 <img src={close} alt="" />
</div>


<h3 className="modal-que">

  How do you want to send this message
</h3>


<div className="modal-options">

<input type="radio" name="anonymous" id="a-check" className='checkbox' />

<p className="modal-opt">
Fully Anonymous
</p>

</div>


<div className="modal-options">

<input type="radio" name="anonymous" id="a-check" className='checkbox' />

<p className="modal-opt">
partly Anonumous
</p>

</div>

<div onClick={()=> next()} className="modal-next">
  Next
</div>



</div>





    </div>
  )
}

export default AnonymousModal