import React from "react";
import Loader from 'react-loader-spinner';
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux';

import {getUserLogIn} from '../../actions/getLogIn';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Login = props => {
  const { register, handleSubmit, errors} = useForm()

  
  const onSubmit = data => {
    console.log(data);

    const credentials = {
      username: data.username,
      password: data.password
    }
    console.log(props.user.id);
    props.getUserLogIn(credentials);

    props.history.push(`/dashboard/user/`);
  };

  return (
    <div className="rv-owner-login-container">
      
      {props.isLoading &&
        <Loader type="Rings" color="red" />
      }

      {!props.isLoading && 
      <>
        <h2>Please Log-in </h2>
        <form className="App" onSubmit={handleSubmit(onSubmit)}>
          <label>Username: </label>
          <input name='username' ref={register({ required: true})} />

          {errors.username && errors.username.type === 'required' && (<p>Username is required</p>
          )}

          <label>Password</label>
          <input name='password' ref={register({ required: true})} />

          {errors.password && errors.password.type === 'required' && (<p>Password is required</p>
          )}

          <input type='submit' />
        </form>
        {/* <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username: </label>
            <input 
              id='username'
              type='text'
              placeholder=' Enter Username'
              onChange = {e => setUsername(e.target.value)}
              name='username'
              value={username}
            
            /> 

          <label htmlFor='password'>Password: </label>
            <input 
              id='password'
              type='password'
              placeholder=' Enter Password'
              onChange = {e => setPassword(e.target.value)}
              name='password'
              value={password}
          
            />
            <Button color="primary" component="button" variant="contained" size="small" type="submit">Login</Button>
         </form> */}
      </>
      }
    </div>
  )
}

const mapStatetToProps = state => ({
  isLoading: state.user.isLoading,
  user: state.user
});

export default connect(mapStatetToProps, {getUserLogIn})(Login);
