import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FullWidthTab from "./FullWidthTab/FullWidthTab";
import classes from "./OpportunityDetailCard.module.css";
import Table from "./Table/Table";

const OpportunityDetailCard = ({ opportunityDetail }) => {
  return (
    <>
      <Box className={classes.titleContainer}>
        <Typography variant="h5">
          {opportunityDetail.name} at Company
        </Typography>
        <p>Status</p>
      </Box>
      <Box className={classes.detailsContainer} mt={1}>
        <Box  mt={1} className={classes.container1}>
          <Paper square>
            <FullWidthTab opportunityDetail={opportunityDetail} />
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
          <Table opportunityDetail={opportunityDetail} />
        </Box>
      </Box>
    </>
  );
};

export default OpportunityDetailCard;
