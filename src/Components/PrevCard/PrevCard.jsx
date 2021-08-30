import React from 'react';
import { Link } from 'react-router-dom'

// Material UI
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';

// Styles
import classes from './PrevCard.module.css'

// Content
const flower = "/Assets/images/flower.png"

export default function PrevCard({ name, notes, id, preRoute }){
  const determineOptionalButtons = () => {
    switch(preRoute){
      case 'opportunities':
        return (
          <>
            <Button 
              component={Link}
              to={`/opportunities/${id}/new-activity`}
              size="small" 
              color="primary"
              startIcon={<AddCircleOutlineIcon />}
            >
              Add Activity 
            </Button>
            <Button 
              component={Link}
              to={`/opportunities/${id}/new-contact`}
              size="small" 
              color="primary"
              startIcon={<PersonAddIcon />}
            >
              Add Contact 
            </Button>
          </>
        )
      case 'activities':
        return (
          <Button 
          size="small" 
          color="warning"
          startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        )
      case 'companies':
        return (
          <Button 
          size="small" 
          color="warning"
          startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        )
      case 'contacts':
        return (
          <Button 
          size="small" 
          color="warning"
          startIcon={<DeleteIcon />}
          >
            Delete 
          </Button>
        )
      default:
        return ''
    }      
  }

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
            {determineOptionalButtons()}     
        </CardActions>
      </Card>
    );
  }