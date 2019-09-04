import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  section1: {
    height:'auto',
    minHeight:500,
    background:"#fafafa url('/static/images/section1Bg.png') no-repeat top right",
    fontSize:20
  },
  content:{
    height:500,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  desc:{
    padding:32
  },
  form:{
    width:500
  },
  padding:{
    padding:8
  }
}));

export default function Section1(){
  const classes = useStyles();
  return (
    <Box bgcolor="#fafafa" height={500} px={4} className={classes.section1}>
        <Grid container>
          <Grid item xs={6} className={classes.content}>
            <div className={classes.desc}>
              <Typography  variant="h4" className={classes.padding}>
                Cras mattis consectetur purus sit amet fermentum.
              </Typography>
              <Typography variant="h5"  className={classes.padding}>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              </Typography>
              <Typography variant="h5"  className={classes.padding}>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </Typography>
              <Typography variant="h5"  className={classes.padding}>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} className={classes.content}>
            <Paper className={classes.form}>
              <Typography  variant="h4" className={classes.padding}>
                Cras mattis consectetur purus sit amet fermentum.
              </Typography>
              <Typography variant="h5"  className={classes.padding}>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              </Typography>
              <Typography variant="h5"  className={classes.padding}>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </Typography>
              <Typography variant="h5"  className={classes.padding}>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
    </Box>
  )
}