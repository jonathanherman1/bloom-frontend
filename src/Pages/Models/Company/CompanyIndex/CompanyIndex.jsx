import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Animation from '../../../../Components/Animation/AnimationNoCss';
import PrevCard from '../../../../Components/PrevCard/PrevCard';

// Content
import companyAnimation from '../../../../Assets/lottie-files/71205-company-discussion.json';

// Material UI
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';

// Styles
import styles from './CompanyIndex.module.css';

const CompanyIndex = ({ companies }) => {
  const companiesList = () => {
    return companies.map((o, i) => {
      return (
        <Grid item xs className={styles.grid}>
        <PrevCard
          key={i}
          name={o.name}
          date={o.date}
          notes={o.notes}
          id={o.id}
          preRoute="companies"
        />
        </Grid>
      );
    });
  };

  const noCompanies = () => {
    return (
        <Box className={styles.noData}>
        <Animation animData={companyAnimation} />
            <h1>No companies. Would you like to add one?</h1>
            <Button
                component={Link}
                to='/companies/new'
                startIcon={<AddCircleOutlineIcon id={styles.btnAddCompany}/>}
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
        <Grid 
          container
          direction="row"
          justifyContent="center"
          alignItems="center">
        {companiesList()}
        </Grid>
      </> : noCompanies()}
    </div>
  );
};

export default CompanyIndex;
