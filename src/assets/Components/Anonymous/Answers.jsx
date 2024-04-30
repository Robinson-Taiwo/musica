/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./Answers.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Clues from './Clues'

const Answers = () => {



const [km, setKm] = useState(true)
const messages = useSelector(state => state.messages); // Correctly access the messages state
const [clues, setClues] = useState(false)
const [selectedMessage, setSelectedMessage] = useState(null);


console.log(messages)

  return (
    <div className='my-answers' >


<div className="second-layers min-h-[110vh] ">
{/* 
   {clues && <Clues clues={clues} setClues={setClues} specialClues={messages.specialClues}  />} */}

   {console.log(messages.specialClues)}

<h1 className="my-answer">
            My Answers
        </h1>

        <p className="answers-subhead">
        👇 Scroll 👇 down to check out the messages that you have received
        </p>

{/* 
{ messages.message === "" && (<div className="message-template">

<h1 className="message-temp-head">
    Message:
</h1>

     <p className="message-temp-text">
     Oops! 😅 No one has sent you a message in last 3 Days! Share your profile link and check back later again!  
     </p>

     <div className="message-temp-sender">
        - Anonymous [13-04-2024 19:22 GMT]
     </div>


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


</div>


        </div>) )

} */}


{messages.length === 0 && (
          <div className="message-template">

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
          
          
                  </div>
        )}



<div className="answers-container">

   {messages.map(message => (
   <div key={message.id} className="message-template">

   <h1 className="message-temp-head">
       Message:
   </h1>
   {console.log(message)}
   
        <p className="message-temp-text">
        {message.message}  
        </p>
   
        <div className="message-temp-sender">
   -{` Anonymous [${message.date} ${message.time} GMT]`}
        </div>
   
   
   <div className="message-temp-options">
   <Link to="/Profile" className="share-response">
   ✨ Share Response ✨
   </Link>
   
   <div className="share-response">
      More Options
   </div>
   
   {/* <div onClick={()=>setClues(!clues)} className="share-response">
      Check for Clues

   </div>
    */}


<button onClick={() => setSelectedMessage(message)} className="share-response">Check for Clues</button>


  {/* Pass selected message to Clues component only if selectedMessage is not null */}
  {selectedMessage && (
          <Clues
            closeRelation={selectedMessage.closeRelation}
            friendship={selectedMessage.friendship}
            specialClues={selectedMessage.specialClues}
            clues={clues} setClues={setClues}
            onClose={() => setSelectedMessage(null)}
          />
        )}
   
   </div>
   
   
           </div>
   ))}

{/* 
<div className="message-template">

<h1 className="message-temp-head">
    Message:
</h1>

     <p className="message-temp-text">
     Oops! 😅 No one has sent you a message in last 3 Days! Share your profile link and check back later again!  
     </p>

     <div className="message-temp-sender">
        - Anonymous [13-04-2024 19:22 GMT]
     </div>


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


</div>


        </div>
         */}

        {/* <div className="message-template">

<h1 className="message-temp-head">
    Message:
</h1>

     <p className="message-temp-text">
     Oops! 😅 No one has sent you a message in last 3 Days! Share your profile link and check back later again!  
     </p>

     <div className="message-temp-sender">
        - Anonymous [13-04-2024 19:22 GMT]
     </div>


<div className="message-temp-options">
<div className="share-response">
    Share Response
</div>

<div className="share-response">
   More Options
</div>

<div className="share-response">
   Check Clues
</div>


</div>


        </div> */}

        {/* <div className="message-template">

<h1 className="message-temp-head">
    Message:
</h1>

     <p className="message-temp-text">
  There is nothing you will tell me right now..... i just want you to know that i hate you 
     </p>

     <div className="message-temp-sender">
        - Anonymous [13-04-2024 19:22 GMT]
     </div>


<div className="message-temp-options">
<div className="share-response">
    Share Response
</div>

<div className="share-response">
   More Options
</div>

<div className="share-response">
   Check Clues
</div>


</div>


        </div> */}


        {/* <div className="message-template">

<h1 className="message-temp-head">
    Message:
</h1>

     <p className="message-temp-text">
     Oops! 😅 No one has sent you a message in last 3 Days! Share your profile link and check back later again!  
     </p>

     <div className="message-temp-sender">
        - Anonymous [13-04-2024 19:22 GMT]
     </div>


<div className="message-temp-options">
<div className="share-response">
    Share Response
</div>

<div className="share-response">
   More Options
</div>

<div className="share-response">
   Check Clues
</div>


</div>


        </div> */}


</div>


<div onClick={()=> setKm(!km)} className="kubool-message-opt">
Kubool Message
</div>


<div className={km ? "kubool-message" : "hidden"}>

<p>
Kubool is an interactive Dare Game, where you can compliment and get complimented by your friends, family and closed ones keeping the privacy of the users safe.
</p>


One can only send you a private anonymous message in Kubool when he or she has your username. We recommend you share your unique profile link with everyone you love and care about. Not only them but you can also share the dare with everyone in your social media contact list and ask them to answer the dare. By doing this you will be able to know how people think about you in general. Ask your friends to join the platform and send their unique links too so that you can compliment them anonymously. Does not matter if you are shy to compliment someone or an introvert in general, you can always use the power of anonymity in front of everyone else on our platform and use it to send and receive anonymous compliments, and texts.
Suggestions and Compliments received by your friends and acquaintances are to be taken on a positive note.

<p className='kml' >

Messages that you receive can be shared as a Status/Story using the "Share" button under the message, once you reach the share page you can follow the instructions and share the secret message that you received. You can archive a message by tapping on "Archive Message" under "More Options" below the message that you want to archive. In case, you think that you may have received an inappropriate message you can always choose to "report" the message. The reported secret message will be sent to the designated support team for review. If the message is found to be violating our terms and conditions, the message sender will be blocked from further accessing the system.
</p>


</div>

</div>


        
     

        
        
        </div>
  )
}

export default Answers