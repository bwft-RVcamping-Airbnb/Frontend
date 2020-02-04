import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';

 import { registerNewRVUser } from '../../actions/registerNewRVUser';

 import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

 const RegisterRVUser = props => {
   const [signup, setSignUp] = useState ({
    username: '', 
    password: '',
    is_land_owner: false
   });
  
 
   const handleChange = e => {
    setSignUp({ 
      ...signup, 
      [e.target.name]: e.target.value 
    });
  };


  const handleSubmit= e => {
    e.preventDefault();
    registerNewRVUser(signup);
  };

  return (
    
    <div className="sign-up-form-container">
      {props.isLoading &&
        <Loader type="Rings" color="red" />
      }

      {!props.isLoading && 
        <>
        <h2>Create RV Owner Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Username: </label>
            <input 
              id='username'
              type='text'
              placeholder='Enter Username'
              onChange = {handleChange}
              name='username'
              value={signup.username}
            />
          </div> 
          <div>
            <label htmlFor='password'>Password: </label>
            <input 
              id='password'
              type='password'
              placeholder='Create Password'
              onChange = {handleChange}
              name='password'
              value={signup.password}
            />
          </div>
          <Button variant="contained" color="primary" size="small" type="submit">Register</Button>
        </form>
        </>
      } 
    </div>
  )
 }

 const mapStateToProps = state => ({
    isLoading: state.newRVUser.isLoading
 });

 export default connect(mapStateToProps, {registerNewRVUser})(RegisterRVUser);