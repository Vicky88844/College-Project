import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router,Switch,Route}
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
          <Switch>
            <Route path='/profile'>
              <ProfileScreen />
            </Route>
          <Route exact path ="/">
            <HomeScreen />
          </Route>
        </Switch>
        )}
        
      </Router>
    </div>
  );
}

export default App;

