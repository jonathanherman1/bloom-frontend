import React from 'react';
import { Link } from 'react-router-dom'
import styles from './BottomNav.module.css'
import { makeStyles } from '@material-ui/core/styles';

import ApartmentIcon from '@material-ui/icons/Apartment';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ContactsIcon from '@material-ui/icons/Contacts';
import EcoIcon from '@material-ui/icons/Eco';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';


const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        
    },
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('opportunity');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={styles.bottomNav}>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Opportunity" value="opportunity" icon={<EcoIcon />} component={Link} to={'/opportunities'}/>
            <BottomNavigationAction label="Activity" value="activity" icon={<LocalActivityIcon />} component={Link} to={'/activities'}/>
            <BottomNavigationAction label="Contact" value="contact" icon={<ContactsIcon />} component={Link} to={'/contacts'}/>
            <BottomNavigationAction label="Company" value="company" icon={<ApartmentIcon />} component={Link} to={'/companies'}/>
        </BottomNavigation>
        </div>
    );
}
