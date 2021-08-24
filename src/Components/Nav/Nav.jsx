import React from 'react';
import PropTypes from 'prop-types';


function Nav({ displayForm, handleLogout, loggedIn }) {
  
  const loggedOutNav = (
    <ul>
      <li onClick={() => displayForm('login')}>login</li>
      <li onClick={() => displayForm('signup')}>signup</li>
    </ul>
  );

  const loggedInNav = (
    <ul>
      <li onClick={handleLogout}>logout</li>
    </ul>
  );
  return <div>{loggedIn ? loggedInNav : loggedOutNav} </div>;
}

export default Nav;

Nav.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  displayForm: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired
};