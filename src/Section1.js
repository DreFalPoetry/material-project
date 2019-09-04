import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  section1: {
    background:"#fafafa url('/static/images/section1Bg.png') no-repeat right",
  },
}));

export default function Section1(){
  const classes = useStyles();
  return (
    <Box bgcolor="#fafafa" height={500} px={4} className={classes.section1}>
      {[...new Array(12)]
        .map(
          () => `Cras mattis consectetur purus sit amet fermentum.
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        )
        .join('\n')}
    </Box>
  )
}