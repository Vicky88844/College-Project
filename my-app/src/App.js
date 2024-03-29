import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router,Switch,Route}
from "react-router-dom";
import Loginscreen from './Loginscreen';
function App() {
  const user =null;

 console.log()
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Loginscreen />
        ) : (
          <Switch>
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

