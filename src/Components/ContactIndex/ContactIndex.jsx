import React from 'react';
import { Link } from 'react-router-dom';

// Components
import PrevCard from '../PrevCard/PrevCard';
import Animation from '../Animation/Animation';

// Content
import seedAnimation from '../../Assets/lottie-files/73344-seed.json';

// Material UI
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

// Styles
import styles from './ContactIndex.module.css';

const ContactIndex = ({ contacts }) => {
    const contactsList = () => {
        return contacts.map((c, i) => {
            return (
                <PrevCard
                    key={i}
                    name={c.name}
                    phone={c.phone}
                    email={c.email}
                    department={c.department}
                    notes={c.notes}
                    id={c.id}
                />
            );
        });
    };

    const noContacts = () => {
        return (
            <Box className={styles.noData}>
                <Animation animationData={seedAnimation} />
                <h1>No Contacts. Would you like to add one?</h1>
                <Button
                    component={Link}
                    to='/contact/new'
                    startIcon={<AddCircleOutlineIcon />}
                >
                    Add Contact
                </Button>
            </Box>
        )
    };

    return (
        <div className={styles.container}>
            {contacts.length ? contactsList() : noContacts()}
        </div>
    );
};

export default ContactIndex;
