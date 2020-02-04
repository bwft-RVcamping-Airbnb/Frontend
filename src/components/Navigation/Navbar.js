import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';

const NavBar = () => {
  return(
    <div>
      <AppBar positin = "static">
        <ToolBar>
          <Typography variant="title" color="inherit">
            Testing
          </Typography>
        </ToolBar>
      </AppBar>
    </div>
  )
}
  
export default NavBar;