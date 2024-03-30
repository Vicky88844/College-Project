import React from 'react'
import './Loginscreen.css'
import LOGO from"./logo/LOGO.png"
function Loginscreen() {
  return (
    <div className='loginscreen'>
        <div className='loginscreen-background'>
        <img 
        className='loginscreen-logo' alt=''
        src={LOGO}>
       </img>
       <button className='loginscreen-button'>
           Sign In</button>

         <div className="loginscreen-gradient" />  
        </div>
        <div className='loginscreen-body'>
          <>
          <h1>Unlimited films, Tv programmes and
          more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2> 
            <h3>
              Ready to watch? Enter your email to 
              create or restart your
              membership. 
            </h3>
          </>
        </div>
    </div>
  )
}

export default Loginscreen