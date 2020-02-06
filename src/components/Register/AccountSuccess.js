import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';


const AccountSuccess = (props) => {

    useEffect(() => {
        setTimeout(() => {
           props.history.push('/')
        }, 1500);
    });

    return(
        <div className="account-success">
            <h1>Creating Your Account...</h1>
            <h2>You will directed to log in</h2>
            <Link to='/'>
                <button className="success-btn">
                    Click Here To LogIn
                </button>
            </Link>
        </div>
    );
}

export default AccountSuccess;