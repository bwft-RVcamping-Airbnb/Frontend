import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import NavBar from './components/Navigation/Navbar'

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
      <NavBar />
          <>
          <Switch>
            <Route path='/rv-owner/login' component={RVLogin} />
            <Route path='/rv-owner/sign-up' component={RVSignUp} />
            <Route path='/land-owner/login' component={LandOwnerLogin} />
            <Route path='/land-owner/sign-up' component={LandOwnerSignUp} />           
          </Switch>
        </>
      </div>
    </ThemeProvider>
  );
}

export default App;
