import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import ElevateAppBar from '../src/AppBar';

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
        <Box>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
                      Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </ElevateAppBar>
    </Container>
  );
}

export default withStyles(styles)(Index);
