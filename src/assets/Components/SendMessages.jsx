/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./SendMessages.css"

const SendMessages = () => {
  return (


<section className="a-container">


    <div className="second-layers">

<h1 className="say-something">
    Say Something..
</h1>


<form action="" className="message-form">

<label htmlFor="#saySomething">

    <p id='saySomething' className='saySomething' >
<span>Say Something About Me</span> <span className='red-star' >*</span>
    </p>
</label>

<textarea name="" placeholder='Leave A message for @oluwarotimi__ here..' maxLength={254} id="text-area" ></textarea>

<p className="character-left">
   <span className="bold-white"> 254</span> characters remaining 
</p>
<div className="horizontal-line"></div>


<div className="send-message">

<button className="view-messagess settings ">
   <span>send Message</span> <span><img  alt="" className='shared' /></span>
</button>

</div>

<p className="send-notice">
By using this service, you agree to our Privacy Policy, Terms of Service and any related policies. 
</p>


</form>

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