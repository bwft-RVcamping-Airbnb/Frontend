import React from 'react'
import { useForm } from 'react-hook-form'
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';

import { registerUserAction} from '../../actions/registerUserAction';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const SignUp = props => {

    const { register, handleSubmit, errors} = useForm()
    const onSubmit = data => {
        const truthyData = data.account !== 'true' ? false : true;
        const credentials = {
            username: data.username, 
            password: data.password,
            is_land_owner: truthyData
        }

        props.registerUserAction(credentials);
        console.log(credentials);
    }

    console.log(props);

    return(
        <div>
            {props.isLoading &&
                <Loader type="Rings" color="red" />
             }

            {!props.isLoading && 
                <>
                <h2>Sign-Up!</h2>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="sign-up-input-container">
                        <input type="text" placeholder="Username" name="username" ref={register({required: true})} />
                        {errors.username && errors.username.type === 'required' && (<p>This is required</p>)}
                    </div>
                    <div className="sign-up-input-container">
                        <input type="password" placeholder="Password" name="password" ref={register({required: true})} />
                        {errors.password && errors.password.type === 'required' && ( <p>This is required</p> )}
                    </div>
                    <div className="sign-up-account-container">
                        <label htmlFor="account">
                            <input name="account" type="radio" value={false} ref={register({ required: true })}/> RV Owner 
                        </label> 
                    </div>
                    <div className="sign-up-account-container">
                        <label htmlFor="">
                            <input name="account" type="radio" value={true} ref={register({ required: true })}/> Property Host
                        </label>
                    </div>
                    {errors.account && errors.account.type === 'required' && ( <p>This is required</p> )}
                    <input type="submit" />
                </form>
                </>
            }

        </div>
    )
}

const mapStateToProps = state => ({
   
})

export default connect(mapStateToProps, {registerUserAction})(SignUp);