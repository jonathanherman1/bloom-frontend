import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classes from './PrevCard.module.css'

export default function MediaCard(props) {
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image=""
            title="placeholder"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              title
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              body text goes here!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
          <Button size="small" color="primary">
            Add Activity
          </Button>
        </CardActions>
      </Card>
    );
  }