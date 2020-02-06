import React from 'react';
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { Navbar } from 'reactstrap';
import {connect} from 'react-redux';

import {getLoggedOut} from '../../actions/logout';

import LogOut from '../Auth/Logout';

const NavigationBar = props => {
  return(
    <div>
      <Navbar color='primary'>
        <div>
        {props.user.isLoggedIn && 
          <>
            <Link to='/dashboard' className='navbar'>Dashboard</Link>
            <LogOut/>
          </>
        }

        {props.user.isLandOwner === 1  && 
                <>
                    <Link to={`/listing/add`}>
                        Add Listing
                    </Link>
                </>
        }

        {!props.user.isLoggedIn && 
          <>
           <Link to='/'>Login</Link>
           <Link to='/register'>Sign-Up</Link>
          </>
        }
        </div>
     </Navbar>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
})
export default connect(mapStateToProps, {getLoggedOut})(NavigationBar);