import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  section3: {
    height:'auto',
    minHeight:600,
    background:"#fafafa",
    fontSize:20,
    display:'flex',
    flexDirection:'column',
    textAlign:'center',
    alignItems:'center',
    padding:80,
  },
  header:{
    maxWidth:800
  },
  mt24:{
    marginTop:24
  },
  mt48:{
    marginTop:48
  },
  cp:{
    cursor:'pointer',
    color:'#5abebe',
    '&:hover':{
      transform:'scale(1.05)'
    }
  }
}))

export default function Section3(){
  const classes = useStyles();
  return (
    <Box bgcolor="#fafafa" height={600} px={4} className={classes.section3}>
      <Typography variant="h3" className={classes.header}>
         Manage your speakers and promote who’s speaking
      </Typography>
      <Typography variant="h5" className={clsx(classes.header,classes.mt24) }>
        Instead of dealing with spreadsheets, manage your speakers in SlidesUp and start promoting them on your website to get the community excited.
      </Typography>
     
      <img src="/static/images/section3Info.png" alt="" className={classes.mt48}/>
       
      <img src="/static/images/section3Info2.png" alt="" className={classes.mt48}/>
      <Typography variant="button" className={clsx(classes.mt48,classes.cp) }>
        try it now >
      </Typography>
    </Box>
  )
}