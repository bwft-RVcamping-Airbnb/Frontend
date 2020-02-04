import React from 'react';
import { Route, Switch} from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';


import RegisterRVUser from './components/Auth/RegisterRVUser';
import RegisterLandUser from './components/Auth/RegisterLandUser';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Auth/Login'

import './css/App.css';

function App() {
  return (
      <div className="App">
        <>
          <Switch>
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <Route path='/login' component={Login} />
            <Route path='/rv/register' component={RegisterRVUser} />
            <Route path='/land/register' component={RegisterLandUser} />
            <Route path='/' component={Login} />
            
          </Switch>
        </>
      </div>
  );
}

export default App;
