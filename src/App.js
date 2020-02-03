import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import SignUpForm from './components/RVSignUp'
import RVLogin from './components/RVLogin'
import './css/App.css';
import LandOwnerSignUp from './components/LandOwnerSignUp'
import LandOwnerLogin from './components/LandOwnerLogin'

function App() {
  return (
    <Router>
      <div className="App">
        <RVLogin />
        <SignUpForm />
        <LandOwnerLogin />
        <LandOwnerSignUp />
      </div>
    </Router>
  );
}

export default App;
