import React from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import ElevateAppBar from '../src/AppBar';
import Footer from '../src/Footer'
import TrackerPage from '../src/TrackerPage'
const styles = {
  root: {
    padding: 0,
  },
};


function Tracker(props) {
  const { classes } = props;
  return (
    <Container className={classes.root} maxWidth="xl">
      <ElevateAppBar>
        <TrackerPage/>
        <Footer/>
      </ElevateAppBar>
    </Container>
  );
}

export default withStyles(styles)(Tracker);