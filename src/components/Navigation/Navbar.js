import React from 'react';
import { Link } from 'react-router-dom'
// import AppBar from '@material-ui/core/AppBar';
// import ToolBar from '@material-ui/core/ToolBar';
// import Typography from '@material-ui/core/Typography';
import { Navbar } from 'reactstrap';
import {connect} from 'react-redux';

import {getLoggedOut} from '../../actions/logout';

import LogOut from '../Auth/LogOut';

const NavigationBar = props => {
  return(
    <div>
      <Navbar>
        {props.user.isLoggedIn && 
          <>
            <Link to='/dashboard'>Dashboard</Link>
            <LogOut/>
          </>
        }

        {!props.user.isLoggedIn && 
          <>
           <Link to='/'>Login</Link>
          </>
        }
        
      </Navbar>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
})
export default connect(mapStateToProps, {getLoggedOut})(NavigationBar);