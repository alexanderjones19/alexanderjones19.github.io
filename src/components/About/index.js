import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import portrait from '../../images/me_portrait.jpg'

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    marginTop: 10,
    padding: 20,
    paddingBottom: 200
  },
  header: {
    fontFamily: theme.typography.fontFamily,
    fontSize: 19,
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.between('md', 'lg')]: {
      marginLeft: 120
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: 180
    }
  },
  imagePaper: {
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.between('md', 'lg')]: {
      marginLeft: 120,
      marginRight: 10
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: 180,
      marginRight: 20
    },
    [theme.breakpoints.only('sm')]: {
      marginRight: 10
    },
    [theme.breakpoints.only('xs')]: {
      marginLeft: 100,
      marginRight: 100
    },
    marginTop: 20
  },
  // card: {
  //   // maxWidth: 345,
  //   // maxWidth: '100%',
  //   marginLeft: 60,
  //   marginRight: 60,
  //   backgroundColor: theme.palette.primary.main
  // },
  aboutPaper: {
    [theme.breakpoints.between('md', 'lg')]: {
      marginRight: 120,
      marginLeft: 10
    },
    [theme.breakpoints.only('sm')]: {
      marginLeft: 10
    },
    [theme.breakpoints.up('lg')]: {
      marginRight: 180,
      marginLeft: 20
    },
    backgroundColor: theme.palette.primary.main,
    marginTop: 20
  },
  portrait: {
    width: '100%',
    height: 'auto',
    padding: 5
  },
  aboutText: {
    padding: 10,
    color: theme.palette.primary.contrastText
  }
});

const About = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="flex-start" spacing={24}>
        <Grid item xs={12}>
          <Typography className={classes.header} variant="subheading" align="left">
            Full Stack Developer
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.imagePaper} elevation={8} square={true}>
            <img src={portrait} alt="Alexander Jones" className={classes.portrait}></img>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.aboutPaper} elevation={8} square={true}>
            <Typography className={classes.aboutText} variant="body1">
              I am a budding full-stack developer with an interest in all things in the web development world. This website will be used to showcase some of the projects that I complete throughout my burgeoning career as a full-stack developer. Some of my other interests and hobbies include playing and producing music, spending time with my family, and brazilian jiu-jitsu.
            </Typography>
            <br/>
            <Typography className={classes.aboutText} variant="body1">
              I am constantly seeking to improve and further my knowledge in the field of web development. I am a creative, detail-oriented person at heart.
            </Typography>
            <br/>
            <Typography className={classes.aboutText} variant="body1">
              I look forward to showing you all what I am capable of creating. Please feel free to reach out and submit your information on the contact page to get in touch.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(About);