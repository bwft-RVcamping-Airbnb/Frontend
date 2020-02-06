import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';


const ErrorMessage = props => {
    
    useEffect(() => {
        setTimeout(() => {
            props.push('/dashboard');
         }, 3000);
    })

    console.log(props);
    return(

        <div className="error-message">
            <h1>Doh! Something Went Wrong!</h1>
            <h2>You are being redirected.</h2>
            <h3>If you aren't redirect in 5 seconds <Link to='/dashboard'>Click Here!</Link></h3>
        </div>
    )
}

export default connect(null, {push})(ErrorMessage);