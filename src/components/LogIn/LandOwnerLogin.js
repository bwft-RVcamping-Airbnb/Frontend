import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';

import {getUserLogIn} from '../../actions/getLogIn';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const LandOwnerLogin = () => {
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

  const submitForm = e => {
    e.preventDefault();
     
  };
 
  return (
    <form onSubmit={submitForm}>
      <h2>Land Owner Login</h2>
      <label htmlFor='name'>Name</label>
        <input 
          id='name'
          type='text'
          placeholder='UserName'
          onChange = {handleChange}
          name='name'
          value={login.name}
        /> 
      <label htmlFor='email'>Email</label>
        <input 
          id='password'
          type='password'
          placeholder='Password'
          onChange = {handleChange}
          name='email'
          value={login.email}
        />
      <Button variant="contained">Login</Button>
    </form>
  )
}

export default LandOwnerLogin;