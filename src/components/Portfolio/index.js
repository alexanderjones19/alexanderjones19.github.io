import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    marginTop: 10,
    padding: 20,
    paddingBottom: 200
  }
});

const Portfolio = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      
    </div>
  );
}

export default withStyles(styles)(Portfolio);