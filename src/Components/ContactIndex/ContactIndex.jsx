import React from 'react';
import { Link } from 'react-router-dom';

// Components
import PrevCard from '../PrevCard/PrevCard';
import Animation from '../Animation/AnimationNoCss';

// Content
import contactAnimation from '../../Assets/lottie-files/contact.json';

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
                    preRoute="contacts"
                />
            );
        });
    };

    const noContacts = () => {
        return (
            <Box className={styles.noData}>
                
                <div className={styles.boxContainer}>
                    <div>
                        <Animation animData={contactAnimation} />
                    </div>
                    <div className={styles.rightpart}>
                        <h1>No Contacts. Would you like to add one?</h1>
                        <Button
                            component={Link}
                            to='/contacts/new'
                            startIcon={<AddCircleOutlineIcon 
                            id={styles.btnAddContact}/>}
                        >
                            Add Contact
                        </Button>
                    </div>
                </div>
                
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
