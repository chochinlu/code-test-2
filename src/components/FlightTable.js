import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const FlightTable = () => (
  <div>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Cabin</TableCell>
          <TableCell>Departure</TableCell>
          <TableCell>Arrival</TableCell>
          <TableCell>Flight Time</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Cheap</TableCell>
          <TableCell>14:20PM Taipei</TableCell>
          <TableCell>22:30PM Bangkok</TableCell>
          <TableCell>3 h 30 m</TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <p>paging</p>
  </div>
);
export default FlightTable;
