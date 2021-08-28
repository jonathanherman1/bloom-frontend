import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import classes from "./ActivityDetail.module.css";
import * as activityService from "../../../../services/activityService.js";

import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import EditDeleteBtn from "../../../../Components/EditDeleteBtn/EditDeleteBtn"
import LabelIcon from "@material-ui/icons/Label";
import NoteIcon from "@material-ui/icons/Note";
import TocIcon from "@material-ui/icons/Toc";
import TodayIcon from "@material-ui/icons/Today";



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
      <Box className={classes.container} mt={4}>
        <Box className={classes.titleContainer}>
          <Paper elevation={10} className={classes.titlePaper}>
            <Typography variant="h3"> {activityDetail.name} </Typography>
            <Box>
                <EditDeleteBtn 
                    model='activities'
                    id={props.match.params.id}
                    handleDelete={props.handleDelete}
                    state={props.activities}
                    setState={props.setActivities}
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
