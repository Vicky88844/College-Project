import React, { useRef } from 'react'
import './SignUpScreen.css';
import { auth } from './firebase';
function SignUpScreen() { 
  const emailRef=useRef(null);
  const passwordRef=useRef(null);

 const register = (e) => {
  e.preventDefault();

  auth.createUserWithEmailAndPassword(
    emailRef.current.value,
    passwordRef.current.value
  )
  .then((authUser) => {
    console.log(authUser);

  })
  .catch((error) => {
    alert(error.message);
  });
 };
 
 const signIn = (e) =>{
  e.preventDefault();
 };
  
  return (
    <div className='signupScreen'>
    <form>
    <h1>Sign In</h1>
    <input ref={emailRef} placeholder='Email' type='email'/>
          <input ref={passwordRef} placeholder='Password' type='password' />
          <button type='submit'onClick={register}>Sign In</button>
          <h4>
           <span className='signupScreen-grey'> New to Movieverse? </span>
           <span className='signupScreen-link'onClick={signIn}>Sign Up now</span>
           
           </h4>
      </form>
             </div>
  )
}

export default SignUpScreen