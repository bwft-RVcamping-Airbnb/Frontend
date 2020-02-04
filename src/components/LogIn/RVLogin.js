import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import {getLogIn} from '../../actions/rvOwnerLoginActions';

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
    e.preventDefault();
    props.getLogIn();
    console.log('form submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>RV Owner Login</h2>
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
      {/* <Button variant="contained">Login</Button> */}
      <button>submit</button>
    </form>
  )
}

const mapStatetToProps = state => ({
  isLoading: state.isLoading
});

export default connect(mapStatetToProps, {getLogIn})(RVLogin);
