/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./AnonymousModal.css"

const AnonymousModal = ({modal}) => {

    const [showModal, setshowModal] = useState(true)

    //defining a function to close the modal up
const closeModal = ()=>{
setshowModal(!modal)
}

// console.log(showModal)

  return (

    <div className="Modal-container">

    <div className={`${showModal ? "showModal" : "showNoModal"}`} >
        
        
        <div className="modal-texts">
        what if Anonymous isn't really Anonymous??
        </div>
    
    
    
    <button onClick={()=>closeModal()}  className="modal-answer">
        what happens?
    </button>
    
    
    
    </div>

    </div>




  )
}

export default AnonymousModal