import React from 'react';
import { Link } from 'react-router-dom';

// Components
import PrevCard from '../PrevCard/PrevCard';
import Animation from '../Animation/Animation';

// Content
import seedAnimation from '../../Assets/lottie-files/73344-seed.json';

// Material UI
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

// Styles
import styles from './OpportunityIndex.module.css';

const OpportunityIndex = ({ opportunities }) => {
  const opportunitiesList = () => {
    return opportunities.map((o, i) => {
      return (
        <PrevCard
          key={i}
          name={o.name}
          date={o.date}
          notes={o.notes}
          id={o.id}
          preRoute="opportunities"

        />
      );
    });
  };

  const noOpportunities = () => {
    return (
      <Box className={styles.noData}>
        <Animation animationData={seedAnimation} />
        <h1>No opportunities. Would you like to add one?</h1>
        <Button
          component={Link}
          to='/opportunities/new'
          startIcon={<AddCircleOutlineIcon />}
        >
          Add Opportunity
        </Button>
      </Box>
    );
  };

  const button = (
    <Box className={styles.addBtnContainer}>
      <IconButton
        aria-label='add'
        component={Link}
        to='/opportunities/new'
        startIcon={<AddCircleOutlineIcon />}
        className={styles.addBtn}
        variant='outlined'
      >
        New Opportunity
      </IconButton>
    </Box>
  );

  return (
    <div className={styles.container}>
      {opportunities.length ? (
        <>
          {button}
          {opportunitiesList()}
        </>
      ) : (
        noOpportunities()
      )}
    </div>
  );
};

export default OpportunityIndex;
