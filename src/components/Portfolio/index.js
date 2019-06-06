import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
  card: {
    marginTop: 20
  },
  media: {
    objectFit: 'cover',
    objectPosition: 'top'
  },
  cardButtons: {
    color: theme.palette.primary.contrastText,
    transition: 'color 0.75s ease',
    '&:hover': {
      color: theme.palette.secondary.dark,
      backgroundColor: 'transparent'
    },
    '&:active': { color: theme.palette.primary.contrastText }
  },
  cardContent: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderBottom: `1px solid ${theme.palette.secondary.dark}`
  },
  cardActions: {
    justifyContent: 'space-evenly',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  header: {
    fontFamily: theme.typography.fontFamily,
    fontSize: 19,
    color: theme.palette.primary.contrastText,
  }
});

const Portfolio = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container justify="space-evenly" alignItems="center" spacing={32}>
        <Grid item xs={12}>
          <Typography className={classes.header} variant="subtitle1" align="left">
            Portfolio
          </Typography>
        </Grid>
        {props.portfolioItems.map(item => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <Card className={classes.card} raised={true} square={true}>
              <CardMedia
                component="img"
                alt={item.title}
                className={classes.media}
                height="140"
                image={process.env.PUBLIC_URL + item.image}
                title={item.title}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2" color="inherit">
                  {item.title}
                </Typography>
                <Typography component="p" color="inherit">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
                  <Tooltip disableFocusListener disableTouchListener title="Github">
                    <IconButton className={classes.cardButtons} color="inherit">
                      <i className="fab fa-github"></i>
                    </IconButton>
                  </Tooltip>
                </a>
                <a href={item.deployedLink} target="_blank" rel="noopener noreferrer">
                  <Tooltip disableFocusListener disableTouchListener title="Deployed">
                    <IconButton className={classes.cardButtons} color="inherit">
                      <i className="fas fa-globe"></i>
                    </IconButton>
                  </Tooltip>
                </a>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Portfolio);