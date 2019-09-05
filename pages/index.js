import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import ElevateAppBar from '../src/AppBar';
import Section1 from '../src/Section1'
import Section2 from '../src/Section2'

const styles = {
  root: {
    padding: 0,
  },
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Index(props) {
  const { classes } = props;
  return (
    <Container className={classes.root} maxWidth="xl">
      <ElevateAppBar>
       <Section1/>
       <Section2/>
      </ElevateAppBar>
    </Container>
  );
}

export default withStyles(styles)(Index);
