import React from 'react';
import classes from './Table.module.css'

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

export default function BasicTable({ opportunityDetail }) {
  
    return (
      opportunityDetail &&
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="table">
          <TableBody>
              <TableRow>
                <TableCell align="left"> Salary </TableCell>
                <TableCell align="right">{opportunityDetail.salary}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left"> Rating </TableCell>
                <TableCell align="right">{opportunityDetail.rating}</TableCell>
              </TableRow>
              <TableRow>
               <TableCell align="left"> Location </TableCell>
                <TableCell align="right">{opportunityDetail.location}</TableCell>
              </TableRow>
              {opportunityDetail.years_experience_required && 
              <TableRow>
                <TableCell align="left"> Years Experience Req'd </TableCell>
                <TableCell align="right">{opportunityDetail.years_experience_required}</TableCell>
              </TableRow>
              }
              <TableRow>
                <TableCell align="left"> Responsibilites </TableCell>
                <TableCell align="right">{opportunityDetail.responsibilities}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }