import React from "react";
import Loader from 'react-loader-spinner';
import {useHistory} from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux';

import {getUserLogIn} from '../../actions/getLogIn';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Login = props => {
  const history = useHistory();
  // const [savedUser, setSavedUser] = useState('');
  const { register, handleSubmit, errors} = useForm()

  // useEffect(() => {
  //   setSavedUser(JSON.parse(localStorage.getItem('user')));
  // }, []);

  const onSubmit = data => {
    const credentials = {
      username: data.username,
      password: data.password
    }
    props.getUserLogIn(credentials);
   
    history.push(`/dashboard`);
  };

  console.log('user:' , props.user);
  console.log('render 1: ', history);
  // console.log(savedUser);
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
          <input type="text" name='username' ref={register({ required: true})} />
 
          {errors.username && errors.username.type === 'required' && (<p>Username is required</p>
          )}

          <label>Password</label>
          <input type="password" name='password' ref={register({ required: true})} />

          {errors.password && errors.password.type === 'required' && (<p>Password is required</p>
          )}

          <input type='submit' />
        </form>
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
