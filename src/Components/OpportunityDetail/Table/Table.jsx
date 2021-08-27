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
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="table">
          <TableBody>
              <TableRow>
                <TableCell align="left">{opportunityDetail.salary}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">{opportunityDetail.location}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">{opportunityDetail.yrs_exp_req}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">{opportunityDetail.responsibilities}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }