import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    marginTop: 10,
    padding: 20,
    paddingBottom: 200,
    [theme.breakpoints.between('md', 'lg')]: {
      marginLeft: 120,
      marginRight: 120
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: 180,
      marginRight: 180
    }
  },
  header: {
    fontFamily: theme.typography.fontFamily,
    fontSize: 19,
    color: theme.palette.primary.contrastText,
  },
  contactContainer: {
    marginLeft: 30,
    marginRight: 30
  },
  contactButtons: {
    color: theme.palette.primary.contrastText,
    transition: 'color 0.75s ease',
    '&:hover': {
      color: theme.palette.secondary.dark,
      backgroundColor: 'transparent'
    },
    '&:active': { color: theme.palette.primary.contrastText },
    fontSize: 75,
    [theme.breakpoints.down('sm')]: {
      fontSize: 100
    }
  },
  contactItems: {
    marginTop: 40,
    textAlign: 'center',
  }
});

const Contact = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="flex-start" spacing={32}>
        <Grid item xs={12}>
          <Typography className={classes.header} variant="subheading" align="left">
            Contact
          </Typography>
        </Grid>
        <Grid container className={classes.contactContainer} justify="center" alignItems="center" spacing={32}>
          <Grid item xs={12} sm={6} md={3} className={classes.contactItems}>
            <a href="/images/Resume.pdf" target="_blank">
              <Tooltip disableFocusListener disableTouchListener title="Resume">
                <IconButton className={classes.contactButtons} color="inherit">
                  <i className="fas fa-file-pdf"></i>
                </IconButton> 
              </Tooltip>
            </a>
          </Grid> 
          <Grid item xs={12} sm={6} md={3} className={classes.contactItems}>
            <a href="mailto:alexanderjones4215@gmail.com">
              <Tooltip disableFocusListener disableTouchListener title="Email: alexanderjones4215@gmail.com">
                <IconButton className={classes.contactButtons} color="inherit">
                  <i className="fas fa-envelope"></i>
                </IconButton>
              </Tooltip>
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.contactItems}>
            <a href="https://github.com/alexanderjones19" target="_blank" rel="noopener noreferrer">
              <Tooltip disableFocusListener disableTouchListener title="Github">
                <IconButton className={classes.contactButtons} color="inherit">
                  <i className="fab fa-github-square"></i>
                </IconButton>
              </Tooltip>
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.contactItems}>
            <a href="https://www.linkedin.com/in/alexander-jones-73a707166/" target="_blank" rel="noopener noreferrer">
              <Tooltip disableFocusListener disableTouchListener title="LinkedIn">
                <IconButton className={classes.contactButtons} color="inherit">
                  <i className="fab fa-linkedin"></i>
                </IconButton>
              </Tooltip>
            </a>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Contact);