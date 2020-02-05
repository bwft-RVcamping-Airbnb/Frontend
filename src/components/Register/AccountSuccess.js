import React, {useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';


const AccountSuccess = (props) => {

    useEffect(() => {
        setTimeout(() => {
           props.history.push('/')
        }, 3000);
    });

    return(
        <div className="account-success">
            <h1>Account Created Successfully.</h1>
            <h2>You will automattically be redirected to log in</h2>
            <Link to='/'>
                <button className="success-btn">
                    Click Here To LogIn
                </button>
            </Link>
        </div>
    );
}

export default AccountSuccess;