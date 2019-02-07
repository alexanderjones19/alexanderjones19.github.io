import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.secondary.dark}`
  },
  logo: {
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 25,
      marginLeft: 120
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 25,
      marginLeft: 180
    },
    flexGrow: 1
  },
  marginLink: {
    [theme.breakpoints.between('md', 'lg')]: {
      marginRight: 120
    },
    [theme.breakpoints.up('lg')]: {
      marginRight: 180
    },
    color: theme.palette.primary.contrastText,
    // '&:active': { color: theme.palette.secondary.dark }
    transition: 'color 0.75s ease',
    '&:hover': {
      color: theme.palette.secondary.dark,
      backgroundColor: 'transparent'
    },
    '&:active': { color: theme.palette.primary.contrastText }
  },
  link: {
    color: theme.palette.primary.contrastText,
    // '&:active': { color: theme.palette.secondary.dark },
    transition: 'color 0.75s ease',
    '&:hover': {
      color: theme.palette.secondary.dark,
      backgroundColor: 'transparent'
    },
    '&:active': { color: theme.palette.primary.contrastText }
  }
});

const Nav = (props) => {
  const { classes } = props;
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.logo} variant="title" color="inherit">
          Alexander Jones
        </Typography>
        <Button component={NavLink} to="/" color="inherit" className={classes.link}>About</Button>
        <Button component={NavLink} to="/portfolio" color="inherit" className={classes.link}>Portfolio</Button>
        <Button component={NavLink} to="/contact" color="inherit" className={classes.marginLink}>Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Nav);