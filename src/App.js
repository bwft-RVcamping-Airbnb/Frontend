import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/Navigation/Navbar'

import { ThemeProvider } from '@material-ui/core/styles';

import RegisterRVUser from './components/Auth/RegisterRVUser';
import RegisterLandUser from './components/Auth/RegisterLandUser';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddListing from './components/Listings/AddListing';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Auth/Login'

import './css/App.css';

function App(){
  return (
      <div className="App">
      {/* <NavBar /> */}
          <>
          <Switch>
            <PrivateRoute path='/dashboard/user/:id/add' component={AddListing} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <Route path='/rv/register' component={RegisterRVUser} />
            <Route path='/land/register' component={RegisterLandUser} />
            <Route exact path='/' component={Login} />
          </Switch>
        </>
      </div>
  );
}

export default App;
