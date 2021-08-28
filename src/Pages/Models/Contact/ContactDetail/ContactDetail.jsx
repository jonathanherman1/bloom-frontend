import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import * as contactService from '../../../../services/contactService.js'
import classes from './ContactDetail.module.css'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import BusinessIcon from '@material-ui/icons/Business'
import NoteIcon from '@material-ui/icons/Note'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EditDeleteBtn from '../../../../Components/EditDeleteBtn/EditDeleteBtn.jsx'

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
        <Box className={classes.container} mt={4}>
            <Box className={classes.titleContainer}>
            <Paper elevation={10}  className={classes.titlePaper}>
                <Typography variant="h3"> {contactDetail.name} </Typography>
                <Box>
                <EditDeleteBtn 
                    model='contacts'
                    id={props.match.params.id}
                    handleDelete={props.handleDelete}
                    state={props.contacts}
                    setState={props.setContacts}
                    />
            </Box>
            </Paper>
            </Box>
         <Box className={classes.listContainer}>
            <Paper>
            <List className={classes.root}>
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