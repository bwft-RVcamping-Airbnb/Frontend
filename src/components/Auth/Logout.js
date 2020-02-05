import React from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

const Logout = props => {

    const clearToken = () => {
        localStorage.removeItem('token');
        props.push('/');
    }

    return(
        <div>
            <button onClick={clearToken}>
                Log Out
            </button>
        </div>
    )
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, { push })(Logout);
