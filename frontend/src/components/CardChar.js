import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    width: 345,
    margin: "2em"
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({character}) {
  const classes = useStyles();

  return (
        <Card className={classes.card}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={character.image}
            title={character.name}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {character.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Specie: {character.species}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Gender: {character.gender}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Add Favorite
            </Button>
        </CardActions>
        </Card>
  );
}
