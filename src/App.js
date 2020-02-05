import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/Navigation/Navbar';


import { ThemeProvider } from '@material-ui/core/styles';

import AccountSuccess  from './components/Register/AccountSuccess';
import RegisterRVUser from './components/Register/RegisterRVUser';
import RegisterLandUser from './components/Register/RegisterLandUser';
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
          <Route path = '/register/rv' component={RegisterRVUser} />
            <Route path = '/register/land' component ={RegisterLandUser} />
            <Route path = '/register/success' component={AccountSuccess} />
            <Route exact path='/' component={Login} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <Route exact path='/dashboard/user/:id/add' component={AddListing} />
            
          </Switch>
        </>
      </div>
  );
}
export default App;
