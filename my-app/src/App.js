import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router,Routes,Route}
from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import Loginscreen from './Loginscreen';
import { login, logout, selectUser } from './features/counter/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import ProfileScreen from './screens/ProfileScreen';




function App() {
  const user =useSelector(selectUser);

const dispatch = useDispatch();

useEffect(()=>{
  const unsubcribe = onAuthStateChanged(auth,(userAuth)=>{
    if(userAuth){
      dispatch(login({
        uid:userAuth.uid,
        email:userAuth.email
      }));
    }
    else{
      dispatch(logout());
    }
  });
  return unsubcribe;
},[]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Loginscreen />
        ) : (
          <Routes>
            <Route path="/profile" element={<ProfileScreen />}/>
            <Route path="/" element={<HomeScreen />}/>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;

