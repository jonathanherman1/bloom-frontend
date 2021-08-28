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
import BusinessIcon from '@material-ui/icons/Business'
import NoteIcon from '@material-ui/icons/Note'
import EditDeleteBtn from '../../../../Components/EditDeleteBtn/EditDeleteBtn'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import LanguageIcon from '@material-ui/icons/Language';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import AssignmentIcon from '@material-ui/icons/Assignment';

import * as companyService from '../../../../services/companyService.js'

const CompanyDetail = (props) => {
    const [companyDetail, setCompanyDetail] = useState('')
    useEffect(() => {
        (async () => {
            const newCompanyDetail = await companyService.getCompanyById(props.match.params.id)
            setCompanyDetail(newCompanyDetail)
        })()
    }, [props.match.params.id]);

    return ( 
        companyDetail &&
        <Box className={classes.container} mt={4}>
            <Box className={classes.titleContainer}>
            <Paper elevation={10}  className={classes.titlePaper}>
                <Typography variant="h3"> {companyDetail.name} </Typography>
                <Box>
                <EditDeleteBtn 
                    model='companies'
                    id={props.match.params.id}
                    handleDelete={props.handleDelete}
                    state={props.companies}
                    setState={props.setCompanies}
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
                        <BusinessIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Business Structure" secondary={companyDetail.business_structure} />
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
                        {companyDetail.interested === true ? 
                        <ThumbUpAltIcon />
                        :
                        <ThumbDownAltIcon />
                        }
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText 
                        primary={companyDetail.interested === true ? "Interested" : "Not Interested"} 
                        secondary={companyDetail.interested} 
                    />
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