import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useContext } from 'react';
import AppContext from '../ContextAPI/AppContext';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
  
const Paginator = () => {
    const classes = useStyles();

    const {page, changePage } = useContext(AppContext)

    const handleChange = (e, value) => {
        changePage(value)
    }


    return (
    <div className={classes.root}>
      <Pagination 
        page={page} 
        onChange={handleChange}
        count={34} 
        shape="rounded" />
    </div>
    )

}

export default Paginator;