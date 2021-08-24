import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import classes from './PrevCard.module.css'

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
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {date} 
              {notes}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/opportunities/${id}`}>
            <Button size="small" color="primary">
                View
            </Button>
          </Link>
          <Link to={`/opportunities/${id}/new-activity`}>
            <Button size="small" color="primary">
              Add Activity
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  }