import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';


const ErrorLogin = props => {
    
    useEffect(() => {
        setTimeout(() => {
            props.push('/');
         }, 3000);
    })

    console.log(props);
    return(

        <div className="error-message">
            <h1>Doh! There was an issue loggin in.</h1>
            <h2>You are being redirected.</h2>
            <h3>If you aren't redirect in 5 seconds <Link to='/dashboard'>Click Here!</Link></h3>
        </div>
    )
}

export default connect(null, {push})(ErrorLogin);