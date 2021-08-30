import React from 'react';

// Material UI
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

// Styles
import styles from './Table.module.css'

export default function BasicTable({ opportunityDetail }) {

    return (
      opportunityDetail &&
      <TableContainer component={Paper}>
        <Table className={styles.table} aria-label="table">
          <TableBody>
              {opportunityDetail.salary &&
              <TableRow>
                <TableCell align="left"> Salary </TableCell>
                <TableCell align="right">{opportunityDetail.salary}</TableCell>
              </TableRow>
              }
              {opportunityDetail.rating &&
              <TableRow>
                <TableCell align="left"> Rating </TableCell>
                <TableCell align="right">{opportunityDetail.rating}</TableCell>
              </TableRow>
              }
              {opportunityDetail.location &&
              <TableRow>
               <TableCell align="left"> Location </TableCell>
                <TableCell align="right">{opportunityDetail.location}</TableCell>
              </TableRow>
              }
              {opportunityDetail.years_experience_required && 
              <TableRow>
                <TableCell align="left"> Years Experience Req'd </TableCell>
                <TableCell align="right">{opportunityDetail.years_experience_required}</TableCell>
              </TableRow>
              }
              {opportunityDetail.responsibilities &&
              <TableRow>
                <TableCell align="left"> Responsibilites </TableCell>
                <TableCell align="right">{opportunityDetail.responsibilities}</TableCell>
              </TableRow>
              }
              {opportunityDetail.requirements &&
              <TableRow>
                <TableCell align="left"> Requirements </TableCell>
                <TableCell align="right">{opportunityDetail.requirements}</TableCell>
              </TableRow>
              }
              {opportunityDetail.listing_source && 
              <TableRow>
                <TableCell align="left"> Listing Source </TableCell>
                <TableCell align="right">{opportunityDetail.listing_source}</TableCell>
              </TableRow>
              }
              {opportunityDetail.keywords &&
              <TableRow>
                <TableCell align="left"> Keywords </TableCell>
                <TableCell align="right">{opportunityDetail.keywords}</TableCell>
              </TableRow>
              }
              {opportunityDetail.notes &&
              <TableRow>
                <TableCell align="left"> Notes </TableCell>
                <TableCell align="right">{opportunityDetail.notes}</TableCell>
              </TableRow>
              }
          </TableBody>
        </Table>
      </TableContainer>
    );
  }