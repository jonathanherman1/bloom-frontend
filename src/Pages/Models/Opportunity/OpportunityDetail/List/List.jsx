import React from 'react';
import { Link } from 'react-router-dom'

// Material UI
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function SimpleList(props) {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <List component="nav" aria-label="prop name list">
        {
          props.items.map(item => (
            <Link to={`/${props.model}/${item.id}`} style={{ color: '#7fc8a9' }}>
              <ListItem 
                key={item.id}
                button
              >
                <ListItemIcon>
                  <AssignmentTurnedInIcon />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </Link>
          ))
        }
      </List>
    </div>
  );
}