import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// Components
import EditDeleteBtn from '../../../../Components/EditDeleteBtn/EditDeleteBtn'

// Services
import * as companyService from '../../../../services/companyService.js'

// Material UI
import AssignmentIcon from '@material-ui/icons/Assignment';
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import BusinessIcon from '@material-ui/icons/Business'
import Divider from '@material-ui/core/Divider'
import LanguageIcon from '@material-ui/icons/Language';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import NoteIcon from '@material-ui/icons/Note'
import Paper from '@material-ui/core/Paper'
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Typography from '@material-ui/core/Typography'

// Styles
import styles from './CompanyDetail.module.css'

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
        <Box className={styles.container} mt={4}>
            <Box className={styles.titleContainer}>
            <Paper elevation={10} className={styles.titlePaper}>
            {/* <div className={styles.paper}> */}
              <div className={styles.grid}>
                <div className={styles.flex}>
                  <Typography variant="h5"> {companyDetail.name} </Typography>
                </div>
                <div className={styles.flexDots}>
                  <EditDeleteBtn 
                      model='companies'
                      id={props.match.params.id}
                      handleDelete={props.handleDelete}
                      state={props.companies}
                      setState={props.setCompanies}
                  />
                </div>
              </div>
            {/* </div> */}
            </Paper>
            </Box>
         <Box className={styles.listContainer}>
            <Paper>
            <List className={styles.root}>
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