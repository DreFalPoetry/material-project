import React,{useState} from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles,createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import SimpleTable from './TrackerResTable';

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
    minHeight:'calc(100vh - 64px - 203px)',
    background:"#fafafa url('/static/images/section1Bg.png') no-repeat top right",
    fontSize:20
  },
  content:{
    minHeight:500,
    display:'flex',
    padding:32,
    paddingBottom:64,
    justifyContent:'center'
  },
  desc:{
    padding:32
  },
  form:{
    width:'100%',
    display:'flex',
    flexDirection:'column',
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

export default function TrackerPage(){

  const classes = useStyles();
  const [showMoreAct,setShowMoreAct] = useState(false)

  function toggleMoreOptions(){
    return setShowMoreAct(!showMoreAct)
  }

  return (
    <Box bgcolor="#fafafa" height={500} px={4} className={classes.section1}>
        <Grid container>
          <Grid item xs={8} className={classes.content}>
            <Paper className={classes.form}>
              <Typography variant="h5"  className={classes.padding}>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              </Typography>
              <Typography variant="body1"  className={classes.padding} style={{marginTop:16}}>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </Typography>
              <Typography variant="body1"  className={classes.padding}>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
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
              {
                showMoreAct ? (
                  <>
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
                  </>
                ) : null
              }
              <Grid container className={classes.stateWrapper} spacing={3} style={{marginTop:12}}>
                <Grid item xs={6}>
                  <Button variant="contained" color="secondary" style={{width:'100%',color:'white'}}>
                    Submit
                  </Button>
                </Grid>
                <Grid item xs={6}>
                    <a style={{fontSize:12,color:'#5abebe',cursor:'pointer'}} onClick={toggleMoreOptions}>
                      {
                        showMoreAct ?  'Retract these options >>' : 'Show more options >>'
                      }
                    </a>
                </Grid>
              </Grid>
              {
                <SimpleTable/>
              }
            </Paper>
          </Grid>
        </Grid>
    </Box>
  )
}