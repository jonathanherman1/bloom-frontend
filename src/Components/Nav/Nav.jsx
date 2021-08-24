import React from 'react';
import PropTypes from 'prop-types';
import * as navStyles from './Nav.module.css'

function Nav({ displayForm, handleLogout, loggedIn }) {
  
  const loggedOutNav = (
    <header className={navStyles.header}>
      <ul>
        <li onClick={() => displayForm('login')}>Login</li>
        <li onClick={() => displayForm('signup')}>Signup</li>
      </ul>
    </header>
  );

  const loggedInNav = (
    <header className={navStyles.header}>
      <ul>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </header>
  );
  return <div>{loggedIn ? loggedInNav : loggedOutNav} </div>;
}

export default Nav;

Nav.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  displayForm: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired
};