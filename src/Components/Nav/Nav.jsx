import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import clsx from 'clsx';

// Material UI
import ApartmentIcon from '@material-ui/icons/Apartment';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ContactsIcon from '@material-ui/icons/Contacts';
import Divider from '@material-ui/core/Divider';
import EcoIcon from '@material-ui/icons/Eco';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Switch from '@material-ui/core/Switch'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Styles
import * as navStyles from './Nav.module.css';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function Nav({ displayForm, handleLogout, loggedIn, darkMode, setDarkMode, username }) {
  const classes = useStyles();
  const [ open, setOpen ] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open)
  };

  const handleNavLogout = () => {
    handleLogout()
    setOpen(false)
  }

  
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
              <Button onClick={toggleDrawer(true)}><MenuIcon fontSize='large'/></Button>
              <SwipeableDrawer
                anchor='right'
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
              >
                <List>
                  <ListItem>
                    <ListItemText>
                      {`Hello, ${username}`}
                    </ListItemText>
                  </ListItem>
                  <ListItem 
                    button key='opportunities'
                    component={Link}
                    to='/opportunities'
                  >
                    <ListItemIcon>
                      <EcoIcon />
                    </ListItemIcon>
                    <ListItemText primary='OPPORTUNITIES' />
                  </ListItem>
                  <ListItem
                    button key='activities'
                    component={Link}
                    to='/activities'
                  >
                    <ListItemIcon>
                      <LocalActivityIcon />
                    </ListItemIcon>
                    <ListItemText primary="ACTIVITIES" />
                  </ListItem>
                  <ListItem
                    button key='contacts'
                    component={Link}
                    to='/contacts'
                  >
                    <ListItemIcon>
                      <ContactsIcon />
                    </ListItemIcon>
                    <ListItemText primary='CONTACTS' />
                  </ListItem>
                  <ListItem
                    button key ='companies'
                    component={Link}
                    to='/companies'
                  >
                    <ListItemIcon>
                      <ApartmentIcon />
                    </ListItemIcon>
                    <ListItemText primary='COMPANIES' />
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem
                    button key='logout'
                    onClick={handleNavLogout}
                  >
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary='LOGOUT' />
                  </ListItem>
                    <ListItem>
                      <ListItemText primary={darkMode ? 'DARK MODE' : 'LIGHT MODE'} />
                      <Switch 
                        color='primary' 
                        checked={darkMode} 
                        onChange={() => setDarkMode(!darkMode)} 
                      />
                    </ListItem>
                </List>
              </SwipeableDrawer>
              </>
            }
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