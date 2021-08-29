import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'

// Components
import EditDeleteBtn from "../../../../Components/EditDeleteBtn/EditDeleteBtn";
import FullWidthTab from "./FullWidthTab/FullWidthTab";
import Table from "./Table/Table";

// Material UI
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Divider from '@material-ui/core/Divider';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Styles
import styles from "./OpportunityDetailCard.module.css";

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
      <Box className={styles.titleContainer}>
        <Box className={styles.titleHeader}>
        <Typography variant="h5">
          {props.opportunityDetail.name}
        </Typography>
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
      <Box className={styles.detailsContainer} mt={1}>
        <Box  mt={1} className={styles.container1}>
          <Paper square>
            <FullWidthTab 
              opportunityDetail={props.opportunityDetail} 
              oppActivities={oppActivities}
              oppContacts={oppContacts}
            />
          </Paper>
        </Box>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Pros/Cons</Typography>
          <Divider />
        </AccordionSummary>
        <AccordionDetails>
          <Box  mt={1} className={styles.container2}>
            <Box className={styles.container2left}>
              <Typography variant="h5">PROS</Typography>
              <Divider />
              <Box>
                  <Typography>{props.opportunityDetail.pros}</Typography>
              </Box>
            </Box>
            <Box className={styles.container2right}>
              <Typography variant="h5">CONS</Typography>
              <Divider />
              <Box>
                  <Typography>{props.opportunityDetail.cons}</Typography>
              </Box>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
        <Box  mt={1} className={styles.container3}>
          <Table opportunityDetail={props.opportunityDetail} />
        </Box>
      </Box>
    </>
  );
};

export default withRouter(OpportunityDetailCard);
