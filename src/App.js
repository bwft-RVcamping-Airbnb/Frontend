import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NavigationBar from './components/Navigation/Navbar';

import AccountSuccess  from './components/Register/AccountSuccess';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddListing from './components/Listings/AddListing';
import Dashboard from './components/Dashboard/Dashboard';
import EditListing from './components/Listings/EditListing';
import Login from './components/Auth/Login';
import ErrorMessage from './components/Error/Error';
import ErrorLogin from './components/Error/ErrorLogin';
import DeleteListing from './components/DeleteListing/DeleteListing';
import SignUp from './components/Register/SignUp';
import ListingProfile from './components/Listings/ListingProfile';
import './css/App.css';

const App = () => {

  return (
  
      <div className="App">
      <NavigationBar /> 
          <>
          {/* {!localStorage.getItem('token') &&  
              <Route exact path='/' component={Login} />   
          } */}
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route path = '/register/success' component={AccountSuccess} />
          <Route exact path = '/register' component={SignUp} />

          <Switch>
            <PrivateRoute path='/listing/add' component={AddListing} />
            <PrivateRoute exact path = '/dashboard' component={Dashboard} />
            <PrivateRoute path='/listing/:id/profile' component={ListingProfile} />
            <PrivateRoute path='/listing/:id/edit' component={EditListing} />
            <PrivateRoute path='/listing/:id/delete' component={DeleteListing} />
            <PrivateRoute exact path='/404' component={ErrorMessage} />
            <PrivateRoute path='/404/log-in' component={ErrorLogin} />
          </Switch>
        </>
      </div>
  );
}

export default App;
