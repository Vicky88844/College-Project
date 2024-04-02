import React, { useState } from "react";
import "./SignUpScreen.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const SignUpScreen = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const register = (e) => {
e.preventDefault();
createUserWithEmailAndPassword(auth, email, password)
.then((authUser) => {
console.log(authUser);
})
.catch((err) => {
alert(err.message);
});
};
return (
<div className="signupScreen">
<form>
<h1>Sign In</h1>
<input value={email} placeholder="Email" type="email" onChange={e=>setEmail(e.target.value)} />
<input value={password} placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)} />
<button type="submit">Sign In</button>

<h4>
<span className="signupScreen-gray">New to Netflix? </span>
<span className="signupScreen-link" onClick={register}>
Sign up Now
</span>
</h4>
</form>
</div>
);
};
export default SignUpScreen;