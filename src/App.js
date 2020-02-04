import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import RVSignUp from './components/RVSignUp'
import RVLogin from './components/RVLogin'
import './css/App.css';
import LandOwnerSignUp from './components/LandOwnerSignUp'
import LandOwnerLogin from './components/LandOwnerLogin'

function App() {
  return (
      <div className="App">
        <LandOwnerLogin />
        <LandOwnerSignUp />
        <>
          <Switch>
            <Route path='/rv-owner/login' component={RVLogin} />
            <Route path='/rv-owner/sign-up' component={RVSignUp} />
            <Route path='/land-owner/login' component={LandOwnerLogin} />
            <Route path='/land-owner/sign-up' component={LandOwnerSignUp} />
          </Switch>
        </>
      </div>
  );
}

export default App;
