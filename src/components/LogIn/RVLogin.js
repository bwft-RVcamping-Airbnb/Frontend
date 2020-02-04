import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';

import {getUserLogIn} from '../../actions/getLogIn';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const RVLogin = props => {
  const [login, setLogin] = useState({ 
    username: "", 
    password: "" 
  });

  const handleChange = e => {
    setLogin({ 
      ...login, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit= e => {
   
    props.getUserLogIn(
      {
        username: login.username,
        password: login.password
      }
    );

  };

  console.log(props);
  return (
    <div className="rv-owner-login-container">
      

      {props.isLoading &&
        <Loader type="Rings" color="red" />
      }
      {!props.isLoading && 
      <>
        <h2>RV Owner Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username: </label>
            <input 
              id='username'
              type='text'
              placeholder='UserName'
              onChange = {handleChange}
              name='username'
              value={login.username}
            /> 

          <label htmlFor='password'>Password: </label>
            <input 
              id='password'
              type='password'
              placeholder='Password'
              onChange = {handleChange}
              name='password'
              value={login.password}
            />
            <Button color="primary" component="button" variant="contained" size="small" type="submit">Login</Button>
         </form>
      </>
      }
      

    </div>
  )
}

const mapStatetToProps = state => ({
  isLoading: state.rvLogin.isLoading
});

export default connect(mapStatetToProps, {getUserLogIn})(RVLogin);
