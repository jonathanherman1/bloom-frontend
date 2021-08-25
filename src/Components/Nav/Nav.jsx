import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch'
import IconButton from '@material-ui/core/IconButton';
import * as navStyles from './Nav.module.css';
import { Link } from 'react-router-dom'


function Nav({ displayForm, handleLogout, loggedIn, darkMode, setDarkMode }) {
  
  return (
    <>
    <header className={navStyles.header}>
      <AppBar position="static" >
        <Toolbar className={navStyles.toolBar}>
        <div className={navStyles.leftMenu}>
          <IconButton edge="start" className={navStyles.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Link to ='/'>
            <Typography
              variant="h6" className={navStyles.title}>
              <img className={navStyles.logo} src="/Assets/images/bloom-logo-blk.png" alt="bloom logo"/>
            </Typography>
          </Link>
          </div>
          <div className={navStyles.rightMenu}>
            {loggedIn &&
              <>
                <span id={navStyles.navlinks}>
                  <Link to='/opportunities'><Button>OPPORTUNITY</Button></Link>
                  <Link to='/activities'><Button>ACTIVITY</Button></Link>
                  <Link to='/contacts'><Button>CONTACT</Button></Link>
                  <Link to='/companies'><Button>COMPANY</Button></Link>
                </span>
                <Button onClick={handleLogout}>Logout</Button>
              </>
            }
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
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