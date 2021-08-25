import React from 'react';
import Box from '@material-ui/core/Box'
// import Rating from '@material-ui/lab/Rating'
// import Typography from '@material-ui/core/Typography'
import classes from './OpportunityDetailCard.module.css'

const OpportunityDetailCard = ({opportunityDetail}) => {


    return (
            <>
            <p>{opportunityDetail.name} at Company</p>
            <Box 
                component="fieldset" 
                flexDirection="column"
                className={classes.detailsContainer}
                borderColor="white" 
                display="flex" 
                mt={3}
            >
            <Box component="fieldset" mt={3} borderColor="white" display="flex" flexDirection="column">
                <p>Activities</p>
                <p>Contacts</p>
            </Box>
                <p>location</p>

                <Box component="fieldset" mt={3} borderColor="white" display="flex">
                    <p>pros</p>
                    <p>cons</p>
                </Box>
                
                <p>salary</p>
                <p>responsibilities</p>
                <p>status</p>
                <p>yrs exp req</p>
            </Box>
            </>
  );
}
 
export default OpportunityDetailCard;