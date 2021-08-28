import React from "react";
import { Link } from "react-router-dom";

// Components
import Animation from "../../../../Components/Animation/AnimationNoCss";
import PrevCard from "../../../../Components/PrevCard/PrevCard";

// Content
import contactAnimation from "../../../../Assets/lottie-files/contact.json";

// Material UI
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddIcon from '@material-ui/icons/Add';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

// Styles
import styles from "./ContactIndex.module.css";

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
              to="/contacts/new"
              startIcon={<AddCircleOutlineIcon id={styles.btnAddContact} />}
            >
              Add Contact
            </Button>
          </div>
        </div>
      </Box>
    );
  };

  const button = (
    <Box className={styles.addBtnContainer}>
       <Tooltip 
          title="Add Contact" 
          aria-label="add" 
          component={Link}
          to='/contacts/new'
          placement="right">
          <Fab color="primary">
            <AddIcon />
          </Fab>
        </Tooltip>
    </Box>
  );

  return (
    <div className={styles.container}>
      {contacts.length ? 
        <> 
        {button} 
        {contactsList()}
        </> : noContacts()}
    </div>
  );
};

export default ContactIndex;
