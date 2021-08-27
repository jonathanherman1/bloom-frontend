import React, { useState, useEffect } from 'react';
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FullWidthTab from "./FullWidthTab/FullWidthTab";
import classes from "./OpportunityDetailCard.module.css";
import Table from "./Table/Table";
import EditDeleteBtn from "../EditDeleteBtn/EditDeleteBtn";
import { withRouter } from 'react-router-dom'

const OpportunityDetailCard = ( props ) => {
  const [oppActivities, setOppActivities] = useState([])
  const [oppContacts, setOppContacts] = useState([])

  useEffect(() => {
    const getActivities = () => {
      const filteredActivities = props.activities?.filter(activity => parseInt(activity.opportunity) === parseInt(props.match.params.id))
      setOppActivities(filteredActivities)
    }
    getActivities()
    return () => {setOppActivities([])}
  }, [props.activities, props.match.params.id]);

  useEffect(() => {
    const getContacts = () => {
      const filteredContacts = props.contacts?.filter(contact => parseInt(contact.opportunity) === parseInt(props.match.params.id))
      setOppContacts(filteredContacts)
    }
    getContacts()
    return () => {setOppContacts([])}
  }, [props.contacts, props.match.params.id]);


  return (
    <>
      <Box className={classes.titleContainer}>
        <Typography variant="h5">
          {props.opportunityDetail.name} at Company
        </Typography>
        <Box>
                <EditDeleteBtn 
                    model='opportunities'
                    id={props.match.params.id}
                    handleDelete={props.handleDelete}
                    state={props.opportunities}
                    setState={props.setOpportunities}
                    />
            </Box>
        <p>Status</p>
      </Box>
      <Box className={classes.detailsContainer} mt={1}>
        <Box  mt={1} className={classes.container1}>
          <Paper square>
            <FullWidthTab 
              opportunityDetail={props.opportunityDetail} 
              oppActivities={oppActivities}
              oppContacts={oppContacts}
            />
          </Paper>
        </Box>
        <Box  mt={1} className={classes.container2}>
          <Box className={classes.container2left}>
            <p>pros</p>
          </Box>
          <Box className={classes.container2right}>
            <p>cons</p>
          </Box>
        </Box>
        <Box  mt={1} className={classes.container3}>
          <Table opportunityDetail={props.opportunityDetail} />
        </Box>
      </Box>
    </>
  );
};

export default withRouter(OpportunityDetailCard);
