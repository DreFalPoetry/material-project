import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {trackerData} from '../utils/consts';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  trackerItemWrapper:{
    display:'flex',
    alignItems:'center'
  }
}));

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData('www.baidu.com', 2, 'True', trackerData[0]),
  createData('www.jingdong.com', 3, 'True', trackerData[1]),
  createData('www.alibaba.com', 4, 'True', trackerData[2]),
  createData('www.google.com', 2, 'True', trackerData[3]),
  createData('www.antd.com', 3, 'True', trackerData[4]),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Url</TableCell>
            <TableCell align="right">Times</TableCell>
            <TableCell align="right">Is Target</TableCell>
            <TableCell align="right">Track Links</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs.map((v,ind)=>{
                return (
                  <div className={classes.trackerItemWrapper} key={ind}>
                    {ind + 1}
                    <img style={{width:'30px',height:'30px'}} src={v.img} alt=""/>
                    {v.url}
                  </div>
                )
              })}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}