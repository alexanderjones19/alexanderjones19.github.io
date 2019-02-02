import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
    maxWidth: 345
  },
  media: {
    objectFit: 'cover'
  }
});

const Portfolio = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container justify="space-evenly" alignItems="center" spacing={24}>
        {props.portfolioItems.map(item => (
          <Grid key={item.id} item xs={12} md={4} lg={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={item.title}
                  className={classes.media}
                  height="140"
                  image={process.env.PUBLIC_URL + item.image}
                  title={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography component="p">
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Github
                </Button>
                <Button size="small" color="primary">
                  Deployed
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Portfolio);