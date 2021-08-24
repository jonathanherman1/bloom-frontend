import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import classes from './PrevCard.module.css'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';

export default function MediaCard({ name, date, notes, id }) {
  
    return (
      <Card className={classes.root}>
        <CardActionArea
        component={Link}
        to={`/opportunities/${id}`}
        >
          <CardMedia
            className={classes.media}
            image=""
            title="placeholder"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" noWrap='false'>
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" noWrap='false'>
              {date} 
              {notes}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Button 
            component={Link}
            to={`/opportunities/${id}`}
            size="small" 
            color="primary"
            startIcon={<VisibilityIcon />}
            >
                View
            </Button>     
            <Button 
            component={Link}
            to={`/opportunities/${id}/new-activity`}
            size="small" 
            color="primary"
            startIcon={<AddCircleOutlineIcon />}
            >
              Add Activity 
            </Button>
        </CardActions>
      </Card>
    );
  }