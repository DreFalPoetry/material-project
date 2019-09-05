import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer:{
    borderTop:'4px solid #5abebe',
    display:'flex',
    flexDirection:'column',
    textAlign:'center',
    alignItems:'center',
    color:'#909090',
    padding:'24px 0px'
  },
  navWrapper:{
    display:'flex',
    width:400,
    alignItems:'baseline',
    justifyContent:'space-between',
    marginTop:32,
  
  },
  navItem:{
    fontWeight:500,
    cursor:'pointer',
    '&:hover':{
      transform:'scale(1.1)'
    }
  },
  mt12:{
    marginTop:12
  },
  mt24:{
    marginTop:24
  }
}))

export default function Footer(){
  const classes = useStyles();
  return (
    <Box bgcolor="#ecfcfc" px={4} className={classes.footer}>
      <Typography variant="h4" className={classes.mt12} style={{fontWeight:'bold',color:'#5abebe'}}>
        Welcome to join and start your ....
      </Typography>
      <div className={classes.navWrapper}>
        <Typography variant="body1" className={classes.navItem}>
          Home
        </Typography>
        |
        <Typography variant="body1" className={classes.navItem}>
          Tracker
        </Typography>
        |
        <Typography variant="body1" className={classes.navItem}>
          Publisher
        </Typography>
        |
        <Typography variant="body1" className={classes.navItem}>
          Forum
        </Typography>
      </div>
      <Typography variant="body2" className={classes.mt24} style={{color:'#909090'}}>
          Copyright @2018 Moca Technology  
        </Typography>
    </Box>
  )
}