/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */




import React, { useEffect, useState } from 'react'
import send from "/icons/send.svg"

import "./SendMessages.css"
import AnonymousModal from './Anonymous/AnonymousModal'
import ChoiceModal from './Anonymous/ChoiceModal'
import { useDispatch, useSelector } from 'react-redux'
import { addClues, addMessage } from './Anonymous/Store/MessageSlice'
import { useNavigate } from 'react-router-dom';


const SendMessages = () => {

// const [messageLength, setMessageLenth] =useState(0)
const [message, setMessage] = useState("")
const [modal, setModal] = useState(false);
const [choiceModal, setChoiceModal] = useState(false)
const [showModal, setsSowModal] = useState(false)
const [toastMessage, setToastMessage] = useState("")
// const [messages, setMessages] = useState([])
const [nameInitial, setNameInitial] = useState("")
const [friendship, setFriendship] = useState("")
const [close, setClose] = useState("")
const [specialClues, setSpecialClues] = useState("")
const [completed, setCompleted] = useState("")
const [warning, setWarning]= useState("")
const [redirecting, setRedirecting] = useState(false);




const [clues, setClues] = useState({
    nameInitial: "",
    friendship: "",
    closeRelation: "",
    specialClues: ""
});

// const [message, setMessage] = useState("");
// const [toastMessage, setToastMessage] = useState("");
const messages = useSelector(state => state.messages); // Correctly access the messages state
const dispatch = useDispatch();
  let navigate = useNavigate();


const maxLengths = 508;
const remainingCharacter = maxLengths - message.length;

const openModal = () => {
    // event.preventDefault();

    const timeSent = new Date().toLocaleTimeString();

    const dateSent = new Date().toLocaleDateString()

    if (message.trim() !== "") {
        const newMessage = {
            message: message, 
            id: messages.length, // Use messages.length as the ID
            time: timeSent,
            date: dateSent,
            name: clues.nameInitial,
            friendship: clues.friendship,
            closeRelation: clues.closeRelation,
            specialClues: clues.specialClues,
        };


    dispatch(addMessage(newMessage));
    setToastMessage("Clues Submitted with anonyous message ");
    setChoiceModal(false);
    
    setTimeout(() => {
  setToastMessage("")
}, 3000);
    setMessage("");
    setRedirecting(true)

 
    

// setsSowModal(true)
setsSowModal(false)



    }
};

console.log(messages);

useEffect(() => {
    if (redirecting) {
      const timeout = setTimeout(() =>  navigate('/Profile', { replace: true })
      , 3000); // Redirect after 3 seconds

      // Cleanup function to clear timeout on component unmount
    //   return () => clearTimeout(timeout);
    }
  }, [redirecting, navigate]);

  
  const handleCluesSubmit = () => {
    dispatch(addClues(clues));
    setToastMessage("Clues Submitted with anonymous message");
    setChoiceModal(false);
    setTimeout(() => {
  setToastMessage("")
}, 3000);
};


 const showSow = () =>{

message.trim() !== "" ?

    setsSowModal(true) 
    : setWarning("Please Type a Message before sending message")


 }

  return (


<section className="a-container">



    {showModal ? <AnonymousModal choiceModal={choiceModal}  setChoiceModal={setChoiceModal} setShowModal={setsSowModal} toastMessage={toastMessage} setToastMessage={setToastMessage}  openModal={openModal} modal={showModal} /> : ""} 


    {/* {choiceModal && <ChoiceModal showModal={modal} />} */}


   


    <div className="second-layers">

<h1 className={!choiceModal ? "say-something" : "fill-form" }>
   {!choiceModal ? "Say Something.." : "Clues Form"}
</h1>



<div className="toat-messages">
    {/* {toastMessage} */}
{!choiceModal ? toastMessage : ""}

</div>

<div className="toatss-messages">
    {/* {toastMessage} */}
{warning}
</div>

{/* {console.log(completed)} */}


{choiceModal ? <ChoiceModal  choiceModal ={choiceModal} toastMessage={toastMessage} setToastMessage={setToastMessage} setChoiceModal={setChoiceModal} setClues={setClues} clues={clues} handleCluesSubmit={handleCluesSubmit}  openModal={openModal} /> : (<div action="" onSubmit={openModal} className="message-form">

<label htmlFor="#saySomething">

    <p id='saySomething' className='saySomething' >
<span>Say Something About Me</span> <span className='red-star' >*</span>
    </p>
</label>

<textarea name="" placeholder='Leave A message for @oluwarotimi__ here..' maxLength={maxLengths} id="text-area"
value={message}
onChange={(e)=>setMessage(e.target.value)}
></textarea>

<p className="character-left">
   <span className="bold-white">
    {remainingCharacter}</span> characters remaining
</p>
<div className="horizontal-line"></div>


<div className="send-message">

<button type='submit' onClick={()=>showSow()} className="view-messagessd settings ">
   <span>send Message</span> <span><img src={send}  alt="" className='sharedd' /></span>
</button>

</div>

<p className="send-notice">
By using this service, you agree to our Privacy Policy, Terms of Service and any related policies. 
</p>


</div>) }





<p className="wyt">
Say what do you think about oluwarotimi__ or Leave a feedback for oluwarotimi__ <span className='bold-white' >anonymously</span> using the form <span className='bold-white' >above</span> .. 🥰
Thank You!! 😍😊
</p>

<p className="anonymous-guide">
<span className="bold-white">
Guide to write perfect Anonymous Messages by Kubool:
</span> With the help of our anonymous message sender named Kubool now, you can easily message your heart's desire to your friends, family members, and anyone you know who are on Kubool. We care about our users and thus we are suggesting what you may choose to tell them anonymously. Everyone in this world loves to get affection from their loved ones be it their parents, partners, or close friends. Tell them how much they matter to you and how much you care for them! These compliments will increase their positive feelings and they will feel your friendly love from the core of their heart. If you feel like there is something you do not like out of them, you may choose to constructively criticize them about it. That is completely fine and in fact when constructive criticism is delivered right, one can develop themselves accordingly to become a better person as a whole. Make sure to be on point with the criticism and make sure that it does not become an insult at the end. You may also choose to suggest things that will help them become a better person as a whole! Future predictions are tough, as shown by the available future predictions apps just like the love predictions! No one knows what is going to happen next. But, it is always good to be aware of your cons, focuses on your pros, and transforming your cons to your pros. That is exactly what good constructive criticism helps you achieve! We hope you liked this little guide on how you can write better anonymous messages which are going to be very productive. Don't forget to play by the rules, keep it clean out there. 😉

</p>




    </div>

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


</section>

    )
}

export default SendMessages

