import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


// Projects:
// - RR
// - Blog
// - Final for DD (ongoing)

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 435,
  },
  media: {
    height: 215,
  },
});

function Projects() {
  const classes = useStyles();
  return (
    <ul class="card-container">
      <li>
        <Card
        className={classes.root}
        style={{backgroundColor: "#96ccbf"}}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="histdigi-blog.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2"
              style={{color: "#071e22",
              'font-family': 'Spartan',
              'font-weight': '500',
              'font-size': '23px'}}
              >
                Lizard
              </Typography>
              <Typography variant="body2" style={{color: "#2c5056", 'margin-left': '0.25em'}} component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" style={{color: "#071e22"}} >
              Learn More
            </Button>
          </CardActions>
        </Card>
      </li>

      <li>
        <Card
        className={classes.root}
        style={{backgroundColor: "#96ccbf"}}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="readrav.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2"
              style={{color: "#071e22",
              'font-family': 'Spartan',
              'font-weight': '500',
              'font-size': '23px'}}
              >
                Lizard
              </Typography>
              <Typography variant="body2" style={{color: "#2c5056", 'margin-left': '0.25em'}} component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" style={{color: "#071e22"}} >
              Learn More
            </Button>
          </CardActions>
        </Card>
      </li>

      <li>
        <Card
        className={classes.root}
        style={{backgroundColor: "#96ccbf"}}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="witches.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2"
              style={{color: "#071e22",
              'font-family': 'Spartan',
              'font-weight': '500',
              'font-size': '23px'}}
              >
                Lizard
              </Typography>
              <Typography variant="body2" style={{color: "#2c5056", 'margin-left': '0.25em'}} component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" style={{color: "#071e22"}} >
              Learn More
            </Button>
          </CardActions>
        </Card>
      </li>

      </ul>
  );
}

export default Projects;
