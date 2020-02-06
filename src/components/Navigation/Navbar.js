import React from 'react';
import { Link } from 'react-router-dom'
// import AppBar from '@material-ui/core/AppBar';
// import ToolBar from '@material-ui/core/ToolBar';
// import Typography from '@material-ui/core/Typography';
import { Navbar } from 'reactstrap';

const NavigationBar = () => {
  return(
    <div>
      <Navbar>
        <Link to='/dashboard'>Dashboard</Link>
      </Navbar>
    </div>
  )
}
  
export default NavigationBar;