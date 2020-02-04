import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';

import RVSignUp from './components/SignUp/RVSignUp'
import RVLogin from './components/LogIn/RVLogin'
import './css/App.css';
import LandOwnerSignUp from './components/SignUp/LandOwnerSignUp'
import LandOwnerLogin from './components/LogIn/LandOwnerLogin'

function App() {
  return (
    <ThemeProvider>
       <div className="App">
         <RVLogin />
         <RVSignUp />
         <LandOwnerLogin />
         <LandOwnerSignUp />
       </div>
    </ThemeProvider>
  );
}

export default App;
