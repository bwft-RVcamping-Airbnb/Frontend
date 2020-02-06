import React from 'react';
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { Navbar } from 'reactstrap';

const NavigationBar = () => {
  return(
    <div>
      <Navbar color='primary'>
        <Link className='navbar' to='/dashboard'>Dashboard</Link>
      </Navbar>
    </div>
  )
}
  
export default NavigationBar;