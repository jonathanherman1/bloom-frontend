import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import classes from './PrevCard.module.css'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';

const flower = "/Assets/images/flower.png"

export default function PrevCard({ name, notes, id, preRoute }){
    return (
      <Card className={classes.root}>
        <CardActionArea
        component={Link}
        to={`/${preRoute}/${id}`}
        >
          <CardMedia
            className={classes.media}
            image={flower}
            title="placeholder"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" noWrap={false}>
              {name}
              <Divider />
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" noWrap={false}>
              {notes}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Button 
            component={Link}
            to={`/${preRoute}/${id}`}
            size="small" 
            color="primary"
            startIcon={<VisibilityIcon />}
            >
                View
            </Button>
            {preRoute === "opportunities" ? 
              <Button 
              component={Link}
              to={`/opportunities/${id}/new-activity`}
              size="small" 
              color="primary"
              startIcon={<AddCircleOutlineIcon />}
              >
                Add Activity 
              </Button>
              : ""
            }     
        </CardActions>
      </Card>
    );
  }