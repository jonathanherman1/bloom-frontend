import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Animation from '../../../../Components/Animation/AnimationNoCss'
import PrevCard from '../../../../Components/PrevCard/PrevCard'

// Content
import seedAnimation from '../../../../Assets/lottie-files/73344-seed.json'

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import AddIcon from '@material-ui/icons/Add'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'

// Styles
import styles from './OpportunityIndex.module.css'

const OpportunityIndex = ({ opportunities }) => {

  const opportunitiesList = () => {
    return opportunities.map((o, i) => {
      return (
        <Grid item xs className={styles.grid}>
        <PrevCard
          key={i}
          name={o.name}
          notes={o.notes}
          id={o.id}
          preRoute="opportunities"
        />
        </Grid>
      );
    });
  };

  const noOpportunities = () => {
    return (
      <Box className={styles.noData}>
        <Animation animData={seedAnimation} />
        <h1>No opportunities. Would you like to add one?</h1>
        <Button
          component={Link}
          to='/opportunities/new'
          startIcon={<AddCircleOutlineIcon id={styles.btnAddOpp}/>}
        >
          Add Opportunity
        </Button>
      </Box>
    );
  };

  const button = (
    <Box className={styles.addBtnContainer}>
       <Tooltip 
          title="Add Opportunity" 
          aria-label="add" 
          component={Link}
          to='/opportunities/new'
          placement="right">
          <Fab color="primary">
            <AddIcon />
          </Fab>
        </Tooltip>
    </Box>
  );

  return (
    <div className={styles.container}>
      {opportunities.length ? (
        <>
          {button}
          <Grid 
          container
          direction="row"
          justifyContent="center"
          alignItems="center">
          {opportunitiesList()}
          </Grid>
        </>
      ) : (
        noOpportunities()
      )}
    </div>
  );
};

export default OpportunityIndex;
