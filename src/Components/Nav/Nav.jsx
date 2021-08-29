import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ContactsIcon from '@material-ui/icons/Contacts';
import EcoIcon from '@material-ui/icons/Eco';
import ApartmentIcon from '@material-ui/icons/Apartment';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import * as navStyles from './Nav.module.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function Nav({ displayForm, handleLogout, loggedIn, darkMode, setDarkMode }) {
  const classes = useStyles();
  const [ open, setOpen ] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open)
  };

  
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
              <Button onClick={toggleDrawer(true)}>Open</Button>
              <SwipeableDrawer
                anchor='right'
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
              >
                <List>
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
                    to='contacts'
                  >
                    <ListItemIcon>
                      <ContactsIcon />
                    </ListItemIcon>
                    <ListItemText primary='CONTACTS' />
                  </ListItem>
                  <ListItem
                    button key ='companies'
                    component={Link}
                    to='companies'
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
                    onClick={handleLogout}
                  >
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary='LOGOUT' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={darkMode ? 'DARK MODE' : 'LIGHT MODE'} />
                  <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
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