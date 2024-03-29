import React from 'react'
import './Loginscreen.css'
import LOGO from"./logo/LOGO.png"
function Loginscreen() {
  return (
    <div className='loginscreen'>
        <div className='loginscreen-background'>
        <img 
        className='loginscreen-logo'
        src={LOGO}>
       </img>
       <button className='loginscreen-button'>
        
        Sign in</button>
        </div>
    </div>
  )
}

export default Loginscreen