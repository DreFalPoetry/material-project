import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PersonIcon from '@material-ui/icons/Person';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  content:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  contentWrapper:{
    width:'100%',
    height:400,
    background:'#fafafa',
    boxShadow:'0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
    display:'flex',
    flexDirection:'column',
    cursor:'pointer',
    "&:hover":{
      transform:'scale(1.02)'
    }
  },
  imgWrapper:{
    width:'100%',
    height:200,
    background:'#666',
    textAlign:'center',
    overflow:'hidden'
  },
  displayImg:{
    height:'100%'
  },
  descWrapper:{
    padding:'20px 10px'
  },
  iconDescWrapper:{
    fontSize:'16px',
    display:'grid',
    gridRowGap: 12,
    marginTop:12
  },
  iconDesc:{
    display:'flex',
    alignItems:'flex-end'
  },
  ml10:{
    marginLeft:10
  }
}))

export default function CampaignRecommend(){
  const classes = useStyles();
  return (
      <Grid container spacing={4}>
          <Grid item xs={6} className={classes.content}>
            <div className={classes.contentWrapper}>
              <div className={classes.imgWrapper}>
                <img src="/static/images/things1.png" alt="" className={classes.displayImg}/>
              </div>
              <div className={classes.descWrapper}>
                <Typography  variant="h6">
                  Cras mattis consectetur purus sit amet fermentum.
                </Typography>
                <Typography  variant="body1">
                  Cras mattis consectetur purus sit amet fermentum.
                </Typography>
                <div className={classes.iconDescWrapper}>
                  <div className={classes.iconDesc}><LocationCityIcon/><span className={classes.ml10}>India,China</span></div>
                  <div className={classes.iconDesc}><PersonIcon/><span className={classes.ml10}>Age 18-25,Male</span></div>
                  <div className={classes.iconDesc}><MonetizationOnIcon/><span className={classes.ml10}>$1.24</span></div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} className={classes.content}>
            <div className={classes.contentWrapper}>
              <div className={classes.imgWrapper}>
                <img src="/static/images/things1.png" alt="" className={classes.displayImg}/>
              </div>
              <div className={classes.descWrapper}>
                <Typography  variant="h6">
                  Cras mattis consectetur purus sit amet fermentum.
                </Typography>
                <Typography  variant="body1">
                  Cras mattis consectetur purus sit amet fermentum.
                </Typography>
                <div className={classes.iconDescWrapper}>
                  <div className={classes.iconDesc}><LocationCityIcon/><span className={classes.ml10}>India,China</span></div>
                  <div className={classes.iconDesc}><PersonIcon/><span className={classes.ml10}>Age 18-25,Male</span></div>
                  <div className={classes.iconDesc}><MonetizationOnIcon/><span className={classes.ml10}>$1.24</span></div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} className={classes.content}>
            <div className={classes.contentWrapper}>
              <div className={classes.imgWrapper}>
                <img src="/static/images/things1.png" alt="" className={classes.displayImg}/>
              </div>
              <div className={classes.descWrapper}>
                <Typography  variant="h6">
                  Cras mattis consectetur purus sit amet fermentum.
                </Typography>
                <Typography  variant="body1">
                  Cras mattis consectetur purus sit amet fermentum.
                </Typography>
                <div className={classes.iconDescWrapper}>
                  <div className={classes.iconDesc}><LocationCityIcon/><span className={classes.ml10}>India,China</span></div>
                  <div className={classes.iconDesc}><PersonIcon/><span className={classes.ml10}>Age 18-25,Male</span></div>
                  <div className={classes.iconDesc}><MonetizationOnIcon/><span className={classes.ml10}>$1.24</span></div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} className={classes.content}>
            <div className={classes.contentWrapper}>
              <div className={classes.imgWrapper}>
                <img src="/static/images/things1.png" alt="" className={classes.displayImg}/>
              </div>
              <div className={classes.descWrapper}>
                <Typography  variant="h6">
                  Cras mattis consectetur purus sit amet fermentum.
                </Typography>
                <Typography  variant="body1">
                  Cras mattis consectetur purus sit amet fermentum.
                </Typography>
                <div className={classes.iconDescWrapper}>
                  <div className={classes.iconDesc}><LocationCityIcon/><span className={classes.ml10}>India,China</span></div>
                  <div className={classes.iconDesc}><PersonIcon/><span className={classes.ml10}>Age 18-25,Male</span></div>
                  <div className={classes.iconDesc}><MonetizationOnIcon/><span className={classes.ml10}>$1.24</span></div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} className={classes.content}>
            <div className={classes.contentWrapper}>
              <div className={classes.imgWrapper}>
                <img src="/static/images/things1.png" alt="" className={classes.displayImg}/>
              </div>
              <div className={classes.descWrapper}>
                <Typography  variant="h6">
                  Cras mattis consectetur purus sit amet fermentum.
                </Typography>
                <Typography  variant="body1">
                  Cras mattis consectetur purus sit amet fermentum.
                </Typography>
                <div className={classes.iconDescWrapper}>
                  <div className={classes.iconDesc}><LocationCityIcon/><span className={classes.ml10}>India,China</span></div>
                  <div className={classes.iconDesc}><PersonIcon/><span className={classes.ml10}>Age 18-25,Male</span></div>
                  <div className={classes.iconDesc}><MonetizationOnIcon/><span className={classes.ml10}>$1.24</span></div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} className={classes.content}>
            <div className={classes.contentWrapper}>
              <div className={classes.imgWrapper}>
                <img src="/static/images/things1.png" alt="" className={classes.displayImg}/>
              </div>
              <div className={classes.descWrapper}>
                <Typography  variant="h6">
                  Cras mattis consectetur purus sit amet fermentum.
                </Typography>
                <Typography  variant="body1">
                  Cras mattis consectetur purus sit amet fermentum.
                </Typography>
                <div className={classes.iconDescWrapper}>
                  <div className={classes.iconDesc}><LocationCityIcon/><span className={classes.ml10}>India,China</span></div>
                  <div className={classes.iconDesc}><PersonIcon/><span className={classes.ml10}>Age 18-25,Male</span></div>
                  <div className={classes.iconDesc}><MonetizationOnIcon/><span className={classes.ml10}>$1.24</span></div>
                </div>
              </div>
            </div>
          </Grid>
      </Grid>
  )
}