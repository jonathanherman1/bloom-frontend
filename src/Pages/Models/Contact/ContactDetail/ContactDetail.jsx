import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

// Components
import EditDeleteBtn from '../../../../Components/EditDeleteBtn/EditDeleteBtn.jsx'

// Services
import * as contactService from '../../../../services/contactService.js'

// Material UI
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import BusinessIcon from '@material-ui/icons/Business'
import Divider from '@material-ui/core/Divider'
import EmailIcon from '@material-ui/icons/Email'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import NoteIcon from '@material-ui/icons/Note'
import Paper from '@material-ui/core/Paper'
import PhoneIcon from '@material-ui/icons/Phone'
import Typography from '@material-ui/core/Typography'

// Styles
import styles from './ContactDetail.module.css'

const ContactDetail = (props) => {
    const [contactDetail, setContactDetail] = useState('')

    useEffect(() => {
        (async () => {
            const newContactDetail = await contactService.getContactById(props.match.params.id)
            setContactDetail(newContactDetail)
        })()
    }, [props.match.params.id]);


    return (
        contactDetail &&
        <Box className={styles.container} mt={4}>
            <Box className={styles.titleContainer}>
            <Paper elevation={10}  className={styles.titlePaper}>
            <div className={styles.grid}>
              <div className={styles.flex}>
                <Typography variant="h5"> {contactDetail.name} </Typography>
              </div>
              <div className={styles.flexDots}>
                <EditDeleteBtn 
                    model='contacts'
                    id={props.match.params.id}
                    handleDelete={props.handleDelete}
                    state={props.contacts}
                    setState={props.setContacts}
                />
              </div>
            </div>
            </Paper>
            </Box>
         <Box className={styles.listContainer}>
            <Paper>
            <List className={styles.root}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <PhoneIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='Phone Number' secondary={contactDetail.phone} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <EmailIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Email" secondary={contactDetail.email} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <BusinessIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Department" secondary={contactDetail.department} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <AccountCircleIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="First Contact Through" secondary={contactDetail.first_contact_through} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <NoteIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Notes" secondary={contactDetail.notes} />
                </ListItem>
            </List>
            </Paper>
            </Box>
        </Box>
    );
}

export default withRouter(ContactDetail);