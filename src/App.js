import React from 'react';
<<<<<<< HEAD
import {Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import NavBar from './components/Navigation/Navbar'
=======
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/Navigation/Navbar';
import AddListing from './components/Listings/AddListing';
>>>>>>> c17a0f2727348ddf6fd6dd5d97ca9d7fd3303adf

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
<<<<<<< HEAD
      <div className="App">
      {/* <NavBar /> */}
          <>
          <Route exact path='/' component={Login} />
          <Route path='/rv/register' component={RegisterRVUser} />
          <Route path='/land/register' component={RegisterLandUser} />
          <Route path='/account/success' component={AccountSuccess} />

=======
     <div className="App">
      <AddListing />
      <NavBar />
        <>
>>>>>>> c17a0f2727348ddf6fd6dd5d97ca9d7fd3303adf
          <Switch>
            <PrivateRoute exact path='/dashboard/user/' component={Dashboard} />
            <PrivateRoute path='/dashboard/user/:id/add-listing' component={AddListing} />
          </Switch>
        </>
      </div>
  );
}
export default App;
