import React from 'react';
import { Route, Switch} from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';

import RegisterRVUser from './components/Auth/RegisterRVUser';
import Login from './components/Auth/Login'

import './css/App.css';

function App() {
  return (
      <div className="App">
        <>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/rv/register' component={RegisterRVUser} />
          </Switch>
        </>
      </div>
  );
}

export default App;
