import React from 'react';
import { Route, Switch} from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';

import RVSignUp from './components/SignUp/RVSignUp'
import RVLogin from './components/LogIn/RVLogin'
import './css/App.css';
import LandOwnerSignUp from './components/SignUp/LandOwnerSignUp'
import LandOwnerLogin from './components/LogIn/LandOwnerLogin'

function App() {
  return (
      <div className="App">
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
