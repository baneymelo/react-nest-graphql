import { Typography } from "@material-ui/core";
import { useContext } from "react";
import AppContext from "../ContextAPI/AppContext";
import CharactersQuery from "./CharactersQuery";
import Paginator from "./Paginator";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center'
  }
});


function Characters(){
  const classes = useStyles();

    const { page } = useContext(AppContext)
    return(
        <>
        <Typography className={classes.root} gutterBottom variant="h5" component="h2">
                Characters
        </Typography>
        <CharactersQuery page={page}/>
        <div className={classes.root}>
            <Paginator/>
        </div>
        </>
    )
}

export default Characters;