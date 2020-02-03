import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import SignUpForm from './components/SignUp'
import Login from './components/Login'
import './css/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Login />
        <SignUpForm />
      </div>
    </Router>
  );
}

export default App;
