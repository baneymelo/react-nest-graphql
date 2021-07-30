import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginTop: "2em",
    justifyContent: 'center'
  }
});


function Favorites(){
  const classes = useStyles();

    return(
        <>
        <Typography className={classes.root} gutterBottom variant="h5" component="h2">
                Favorites
        </Typography>
        </>
    )
}

export default Favorites;