import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

// Components
import EditDeleteBtn from "../../../../Components/EditDeleteBtn/EditDeleteBtn"

// Services
import * as activityService from "../../../../services/activityService.js";

// Material UI
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import LabelIcon from "@material-ui/icons/Label";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import NoteIcon from "@material-ui/icons/Note";
import Paper from "@material-ui/core/Paper";
import TocIcon from "@material-ui/icons/Toc";
import TodayIcon from "@material-ui/icons/Today";
import Typography from "@material-ui/core/Typography";

// Styles
import styles from "./ActivityDetail.module.css";


const ActivityDetail = (props) => {
  const [activityDetail, setActivityDetail] = useState(null);

  useEffect(() => {
    (async () => {
      const newActivityDetail = await activityService.getActivityById(
        props.match.params.id
      );
      setActivityDetail(newActivityDetail);
    })();
  }, [props.match.params.id]);

  return (
    activityDetail && (
      <Box className={styles.container} mt={4}>
        <Box className={styles.titleContainer}>
          <Paper elevation={10} className={styles.titlePaper}>
            <div className={styles.grid}>
              <div className={styles.flex}>
                <Typography variant='h5'> {activityDetail.name} </Typography>
              </div>
              <div className={styles.flexDots}>
                  <EditDeleteBtn 
                      model='activities'
                      id={props.match.params.id}
                      handleDelete={props.handleDelete}
                      state={props.activities}
                      setState={props.setActivities}
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
                    <TodayIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Contact Made "
                  secondary={activityDetail.date}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LabelIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Type Of Contact"
                  secondary={activityDetail.type}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <TocIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Contact Method"
                  secondary={activityDetail.contact_method}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <NoteIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Notes"
                  secondary={activityDetail.notes}
                />
              </ListItem>
            </List>
          </Paper>
        </Box>
      </Box>
    )
  );
};

export default withRouter(ActivityDetail);
