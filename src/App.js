import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NavigationBar from './components/Navigation/Navbar';

import AccountSuccess  from './components/Register/AccountSuccess';
import RegisterRVUser from './components/Register/RegisterRVUser';
import RegisterLandUser from './components/Register/RegisterLandUser';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddListing from './components/Listings/AddListing';
import Dashboard from './components/Dashboard/Dashboard';
import EditListing from './components/Listings/EditListing';
import Login from './components/Auth/Login';
import ErrorMessage from './components/Error/Error';


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
          <Route path = '/register/rv' component={RegisterRVUser} />
          <Route path = '/register/land' component ={RegisterLandUser} />
          <Route path = '/register/success' component={AccountSuccess} />

          <Switch>
            <PrivateRoute path='/listing/add' component={AddListing} />
            <PrivateRoute exact path = '/dashboard' component={Dashboard} />
            <PrivateRoute path='/listing/:id/edit' component={EditListing} />
            <PrivateRoute path='/404/' component={ErrorMessage} />
          </Switch>
        </>
      </div>
  );
}

export default App;
