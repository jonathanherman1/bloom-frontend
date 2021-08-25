import React, { useState } from 'react';
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import FullWidthTab from './FullWidthTab/FullWidthTab'
import classes from './OpportunityDetailCard.module.css'
import Table from './Table/Table'

const OpportunityDetailCard = ({opportunityDetail}) => {
    return (
            <>
            <Box className={classes.titleContainer} >
                <Typography variant="h5">
                    {opportunityDetail.name} at Company
                </Typography>
                <p>status</p>
            </Box>
            <Box 
                component="fieldset" 
                className={classes.detailsContainer}
                borderColor="white" 
                mt={3}
            >
            <Box component="fieldset" mt={3} borderColor="white" className={classes.container1}>
                <Paper square>
                    <FullWidthTab opportunityDetail={opportunityDetail}/>
                </Paper>
            </Box>

            <Box component="fieldset" mt={3} borderColor="white" className={classes.container2}>
                <Box className={classes.container2left}>
                    <p>pros</p>
                </Box>
                <Box className={classes.container2right}>
                    <p>cons</p>
                </Box>
            </Box>
            <Box component="fieldset" mt={3} borderColor="white" className={classes.container3}>
                <Table />
            </Box>

            </Box>
            </>
  );
}
 
export default OpportunityDetailCard;