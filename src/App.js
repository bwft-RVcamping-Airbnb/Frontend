import React from 'react';
import {Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import NavBar from './components/Navigation/Navbar'

import { ThemeProvider } from '@material-ui/core/styles';

import AccountSuccess  from './components/Auth/AccountSuccess';
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
          <Route exact path='/' component={Login} />
          <Route path='/rv/register' component={RegisterRVUser} />
          <Route path='/land/register' component={RegisterLandUser} />
          <Route path='/account/success' component={AccountSuccess} />

          <Switch>
            <PrivateRoute exact path='/dashboard/user/' component={Dashboard} />
            <PrivateRoute path='/dashboard/user/:id/add-listing' component={AddListing} />
          </Switch>
        </>
      </div>
  );
}
export default App;
