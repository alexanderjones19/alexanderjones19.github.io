import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  header: {
    paddingTop: 40,
    fontFamily: theme.typography.title.fontFamily,
    fontSize: 40,
    color: theme.palette.primary.contrastText
  }
})

const About = (props) => {
  const { classes } = props;
  return (
    <Grid container justify="center" spacing={24}>
      <Typography className={classes.header}>
        Alexander Jones
      </Typography>
    </Grid>
  );
}

export default withStyles(styles) (About);