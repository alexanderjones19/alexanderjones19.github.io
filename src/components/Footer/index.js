import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  appBar: {
    bottom: 0,
    borderTop: `1px solid ${theme.palette.secondary.dark}`
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

const Footer = (props) => {
  const { classes } = props;
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
      
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Footer);