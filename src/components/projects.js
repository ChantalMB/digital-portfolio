import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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
                History, Digitized.
              </Typography>
              <Typography variant="body2" style={{color: "#2c5056", 'margin-left': '0.25em'}} component="p">
                A website built to document my journey in digital humanities through weekly blog posts. Features a number of both completed and WIP digital projects. 
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" style={{color: "#071e22"}} href="https://github.com/ChantalMB/histdigi-site">
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
                Readable Ravelry
              </Typography>
              <Typography variant="body2" style={{color: "#2c5056", 'margin-left': '0.25em'}} component="p">
              Following a design update that left many users unable to use <a href="https://www.ravelry.com/">Ravelry</a>, I made this browser extension to make Ravelry readable for those sensitive to light/brightness.             
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" style={{color: "#071e22"}} href= "https://github.com/ChantalMB/readable-ravelry">
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
                Fate of the Fair
              </Typography>
              <Typography variant="body2" style={{color: "#2c5056", 'margin-left': '0.25em'}} component="p">
                For seminar on witchcraft in the Early Modern period; utilizes the <a href="http://witches.shca.ed.ac.uk/">SSW Database</a> to analyze the relationship between belief in fairies and the developments of witchcraft. 
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" style={{color: "#071e22"}} href="https://github.com/ChantalMB/ssw-site" >
              Learn More
            </Button>
          </CardActions>
        </Card>
      </li>

      </ul>
  );
}

export default Projects;
