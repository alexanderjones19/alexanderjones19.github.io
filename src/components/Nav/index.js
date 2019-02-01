import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
  buttons: {
    [theme.breakpoints.between('md', 'lg')]: {
      marginRight: 120
    },
    [theme.breakpoints.up('lg')]: {
      marginRight: 180
    }
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
        <Button color="inherit">About</Button>
        <Button color="inherit">Portfolio</Button>
        <Button className={classes.buttons} color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Nav);