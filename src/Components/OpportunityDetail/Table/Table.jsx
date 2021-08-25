import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import classes from './Table.module.css'

export default function BasicTable() {
  
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="table">
          <TableBody>
              <TableRow>
                <TableCell align="left">salary</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">location</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">yrs exp req</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">responsibilities</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }