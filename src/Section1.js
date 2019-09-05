import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles,createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary:{
      main:'#5abebe'
    },
  }
});

const useStyles = makeStyles(theme => ({
  section1: {
    height:'auto',
    minHeight:560,
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
    width:500,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    padding:'32px 16px'
  },
  padding:{
    padding:8
  },
  inputOuterStyle:{
    width:'100%',
    display:'block',
    marginTop:16
  },
  inputRoot:{
    width:'100%',
  },
  inputStyle:{
    padding:'9px 5px',
  },
  inputLabelOutlined:{
    transform:'translate(14px, 12px) scale(1)'
  },
  stateWrapper:{
    alignItems:'flex-end'
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
              <Typography variant="h5"  className={classes.padding}>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              </Typography>
              <ThemeProvider theme={theme}>
                <TextField
                  label="Url"
                  variant="outlined"
                  classes={{
                    root:classes.inputOuterStyle
                  }}
                  InputProps={{
                    classes:{
                      root:classes.inputRoot,
                      input:classes.inputStyle
                    }
                  }}
                  InputLabelProps={{
                    classes:{
                      outlined:classes.inputLabelOutlined
                    }
                  }}
                />
              </ThemeProvider>
              <Grid container className={classes.stateWrapper} spacing={3}>
                <Grid item xs={6} >
                  <ThemeProvider theme={theme}>
                    <TextField
                      label="OS"
                      variant="outlined"
                      classes={{
                        root:classes.inputOuterStyle
                      }}
                      InputProps={{
                        classes:{
                          root:classes.inputRoot,
                          input:classes.inputStyle
                        }
                      }}
                      InputLabelProps={{
                        classes:{
                          outlined:classes.inputLabelOutlined
                        }
                      }}
                    />
                  </ThemeProvider>
                </Grid>
                <Grid item xs={6} >
                  <ThemeProvider theme={theme}>
                    <TextField
                      label="State"
                      variant="outlined"
                      classes={{
                        root:classes.inputOuterStyle
                      }}
                      InputProps={{
                        classes:{
                          root:classes.inputRoot,
                          input:classes.inputStyle
                        }
                      }}
                      InputLabelProps={{
                        classes:{
                          outlined:classes.inputLabelOutlined
                        }
                      }}
                    />
                  </ThemeProvider>
                </Grid>
              </Grid>
              <Grid container className={classes.stateWrapper} spacing={3} style={{marginTop:12}}>
                <Grid item xs={6}>
                  <Button variant="contained" color="secondary" style={{width:'100%',color:'white'}}>
                    Submit
                  </Button>
                </Grid>
                <Grid item xs={6}>
                    <a style={{fontSize:12,color:'#5abebe',cursor:'pointer'}}>Click to get more >></a>
                </Grid>
              </Grid>
              <Typography variant="body1"  className={classes.padding} style={{marginTop:16}}>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </Typography>
              <Typography variant="body1"  className={classes.padding}>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
    </Box>
  )
}