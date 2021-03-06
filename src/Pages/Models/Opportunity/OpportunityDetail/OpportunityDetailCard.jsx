import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'

// Components
import EditDeleteBtn from "../../../../Components/EditDeleteBtn/EditDeleteBtn";
import FullWidthTab from "./FullWidthTab/FullWidthTab";
import Table from "./Table/Table";

// Material UI
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid'
import Paper from "@material-ui/core/Paper";
import Divider from '@material-ui/core/Divider';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FlagIcon from '@material-ui/icons/Flag';

// Styles
import styles from "./OpportunityDetailCard.module.css";

const OpportunityDetailCard = ( props ) => {
  const [oppActivities, setOppActivities] = useState([])
  const [oppContacts, setOppContacts] = useState([])

  useEffect(() => {
    const getActivities = () => {
      if(props.activities?.length) {
        const filteredActivities = props.activities?.filter(activity => parseInt(activity.opportunity) === parseInt(props.match.params.id))
        setOppActivities(filteredActivities)
      }
    }
    getActivities()
    return () => {setOppActivities([])}
  }, [props.activities, props.match.params.id]);

  useEffect(() => {
    const getContacts = () => {
      if(props.contacts?.length){
        const filteredContacts = props.contacts?.filter(contact => parseInt(contact.opportunity) === parseInt(props.match.params.id))
        setOppContacts(filteredContacts)
      }
    }
    getContacts()
    return () => {setOppContacts([])}
  }, [props.contacts, props.match.params.id]);

  return (
    <>
      <Box className={styles.titleContainer}>
        <Box className={styles.titleHeader}>
          <div className={styles.grid}>
            <div className={styles.flex}>
              <Typography variant="h5">
                {props.opportunityDetail.name}
              </Typography>
            </div>
          </div>
        </Box>
        <div className={styles.statusGrid}>
          <div className={styles.flex}>
            <FlagIcon></FlagIcon>
          </div>
          <p className={styles.flex}>{props.opportunities[0]?.status}</p>
          <div className={styles.flex}>
              <EditDeleteBtn 
                  model='opportunities'
                  id={props.match.params.id}
                  handleDelete={props.handleDelete}
                  state={props.opportunities}
                  setState={props.setOpportunities}
              />
            </div>
        </div>
      </Box>
      <Box className={styles.detailsContainer} mt={1}>
        <Box  mt={1} className={styles.container1}>
          <Paper square>
            <FullWidthTab 
              opportunityDetail={props.opportunityDetail} 
              oppActivities={oppActivities}
              oppContacts={oppContacts}
              id={props.match.params.id}
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
