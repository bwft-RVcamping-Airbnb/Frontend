import React from 'react'
import { useForm } from 'react-hook-form'
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';

import {registerNewLandUser} from '../../actions/registerNewLandUser';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const RegisterLandUser = props => {
  const { register, handleSubmit, errors} = useForm()
  const onSubmit = (data) => {
    const credentials = {
      username: data.username,
      password: data.password,
      is_land_owner: props.is_land_owner
    }
    props.registerNewLandUser(credentials);
    props.history.push('/account/success');
    console.log(credentials);
  }
  console.log(props);
  return (
    <div className="sign-up-form-container">
      {props.isLoading &&
        <Loader type="Rings" color="red" />
      }
    
    {!props.isLoading && 
        <>
          <h2>Create Land Owner Account</h2>

          <form className="App" onSubmit={handleSubmit(onSubmit)}>

          <div className="create-account-input-container">

            <label>Username: </label>
            <input type="text" name='username' ref={register({ required: true})} />
            {errors.username && errors.username.type === 'required' && (<p>This is required</p>)}

          </div>

          <div className="create-account-input-container">

            <label>Password: </label>
            <input type="password" name='password' ref={register({ required: true})} />
            {errors.password && errors.password.type === 'required' && (<p>This is required</p>)}

          </div>
            <input type='submit' />
          </form>
        </>
    } 
    </div>
  )
}

const mapStateToProps = state => ({
  isLoading: state.newLandUser.isLoading,
  is_land_owner: state.newLandUser.is_land_owner
});

export default connect(mapStateToProps, {registerNewLandUser})(RegisterLandUser);