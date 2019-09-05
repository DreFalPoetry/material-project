import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import MuiLink from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    padding: 0,
  },
  appBarWrapper:{
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  nav:{
    display:'inline-block',

  },
  navItem:{
    display:'inline-block',
    marginLeft:24,
    color:'#5abebe',
    cursor:'pointer',
    '&:hover':{
      transform:'scale(1.05)'
    }
  }
});

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props} className={classes.appBarWrapper}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" className={classes.title} color="secondary">Ad Exchange</Typography>
            <div className={classes.nav}>
              <Typography  className={classes.navItem}>
                <MuiLink color="secondary" href="/tracker">
                  Tracker
                </MuiLink>
              </Typography>
              <Typography  className={classes.navItem}>
                Publisher
              </Typography>
              <Typography className={classes.navItem}>
                Forum
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container className={classes.root} maxWidth="xl">
        {props.children}
      </Container>
    </React.Fragment>
  );
}
