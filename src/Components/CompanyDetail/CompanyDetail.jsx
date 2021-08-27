import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import classes from './CompanyDetail.module.css'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import BuisnessIcon from '@material-ui/icons/Business'
import NoteIcon from '@material-ui/icons/Note'
import Fab from '@material-ui/core/Fab'

import DeleteIcon from '@material-ui/icons/Delete'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import LanguageIcon from '@material-ui/icons/Language';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import AssignmentIcon from '@material-ui/icons/Assignment';

import * as companyService from '../../services/companyService.js'

const CompanyDetail = (props) => {
    const [companyDetail, setCompanyDetail] = useState('')
    console.log(props)
    useEffect(() => {
        (async () => {
            const newCompanyDetail = await companyService.getCompanyById(props.match.params.id)
            setCompanyDetail(newCompanyDetail)
        })()
    }, []);
    return ( 
        companyDetail &&
        <Box className={classes.container} mt={4}>
            <Box className={classes.titleContainer}>
            <Paper elevation={10}  className={classes.titlePaper}>
                <Typography variant="h3"> {companyDetail.name} </Typography>
                <Fab variant="warning" aria-label="delete contact" className={classes.deleteFab}>
                    <DeleteIcon />
                </Fab>
            </Paper>
            </Box>
         <Box className={classes.listContainer}>
            <Paper>
            <List className={classes.root}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <LocationOnIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='Location' secondary={companyDetail.location} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <LanguageIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Website" secondary={companyDetail.url} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <BuisnessIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Buisness Structure" secondary={companyDetail.buisness_structure} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <MeetingRoomIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Glassdoor Rating" secondary={companyDetail.glassdoor_rating} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <ThumbUpAltIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Interested" secondary={companyDetail.interested} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <AssignmentIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Summary" secondary={companyDetail.summary} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <NoteIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Notes" secondary={companyDetail.notes} />
                </ListItem>
            </List>
            </Paper>
            </Box>
        </Box>
    );
}
 
export default withRouter(CompanyDetail);