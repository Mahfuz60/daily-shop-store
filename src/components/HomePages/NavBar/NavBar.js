import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg  '>
      <div className='container-fluid'>
        <NavLink to='/' className='navbar-brand'>
          Daily Shop Store
        </NavLink>
        <button
          className='navbar-toggler navbar-light bg-light'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon '></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav  mb-2 mb-lg-0 mx-auto'>
            <li>
              <NavLink to='/home' className='nav-link ' aria-current='page'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/product' className='nav-link'>
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to='' className='nav-link'>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to='' className='nav-link'>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to='' className='nav-link'>
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
