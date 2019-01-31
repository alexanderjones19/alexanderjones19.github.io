import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
    }
  }
})

const Nav = (props) => {
  const { classes } = props;
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.logo} variant="title" color="inherit">
          Alexander Jones
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Nav);