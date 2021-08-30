import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

// Components
import List from '../List/List'

// Material UI
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';

// Styles
import styles from './FullWidthTab.module.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100vw',
  },
}));

export default function FullWidthTabs({oppActivities, oppContacts, id}) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs"
        >
          <Tab label="Activities" {...a11yProps(0)} />
          <Tab label="Contacts" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <div className={styles.grid}>
              <div className={styles.flex}>
              <Grid 
                style={{ display: "flex", color: '#7fc8a9', padding: '1rem' }} 
                component={Link} 
                to={`/opportunities/${id}/new-activity`}
              >
                <AddCircleOutlineIcon/>
                <Typography>
                &nbsp; Add activity
                </Typography>
              </Grid>
             </div>
             {oppActivities &&
              <List items={oppActivities} model='activities' style={{ color: '#7fc8a9' }} />
            }
             </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <div className={styles.grid}>
              <div className={styles.flex}>
              <Grid 
                style={{ display: "flex", color: '#7fc8a9', padding: '1rem' }} 
                component={ Link } 
                to={`/opportunities/${id}/new-contact`}
              >
                <AddCircleOutlineIcon 
                  />
                <Typography>
                &nbsp; Add contact
                </Typography>
              </Grid>
             </div>
             {oppContacts &&
             <List items={oppContacts} model='contacts' />
            }
             </div>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}