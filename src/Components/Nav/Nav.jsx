import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import * as navStyles from './Nav.module.css';

function Nav({ displayForm, handleLogout, loggedIn }) {
  
  const loggedOutNav = (
      <>
        <Button onClick={() => displayForm('login')}>Login</Button>
        <Button onClick={() => displayForm('signup')}>Signup</Button>
      </>
  );

  const loggedInNav = (
      <>
        <Button onClick={handleLogout}>Logout</Button>
      </>
  );

  return (
    <>
    <header className={navStyles.header}>
      <AppBar position="static" >
        <Toolbar className={navStyles.toolBar}>
        <div className={navStyles.leftMenu}>
          <IconButton edge="start" className={navStyles.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={navStyles.title}>
            <img className={navStyles.logo} src="/Assets/images/bloom-logo.png" alt="bloom logo"/>
          </Typography>
          </div>
          <div className={navStyles.rightMenu}>
            {loggedIn ? loggedInNav : loggedOutNav} 
          </div>
        </Toolbar>
      </AppBar>
      </header>
    </>
    );
}

export default Nav;

Nav.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  displayForm: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired
};