import React from 'react';
import { Link } from 'react-router-dom';

// Components
import PrevCard from '../PrevCard/PrevCard';
import Animation from '../Animation/Animation';

// Content
import seedAnimation from '../../Assets/lottie-files/73344-seed.json';

// Material UI
import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

// Styles
import styles from './CompanyIndex.module.css';

const CompanyIndex = ({ companies }) => {
  const companiesList = () => {
    return companies.map((o, i) => {
      return (
        <PrevCard
          key={i}
          name={o.name}
          date={o.date}
          notes={o.notes}
          id={o.id}
          preRoute="companies"
        />
      );
    });
  };

  const noCompanies = () => {
    return (
        <Box className={styles.noData}>
            <Animation animationData={seedAnimation} />
            <h1>No companies. Would you like to add one?</h1>
            <Button
                component={Link}
                to='/companies/new'
                startIcon={<AddCircleOutlineIcon />}
            >
                Add Company
            </Button>
        </Box>
    )
  };

  const button = (
    <Box className={styles.addBtnContainer}>
       <Tooltip 
          title="Add Company" 
          aria-label="add" 
          component={Link}
          to='/companies/new'
          placement="right">
          <Fab color="primary">
            <AddIcon />
          </Fab>
        </Tooltip>
    </Box>
  )

  return (
    <div className={styles.container}>
      {companies.length ? 
      <>  
        {button} 
        {companiesList()} 
      </> : noCompanies()}
    </div>
  );
};

export default CompanyIndex;
