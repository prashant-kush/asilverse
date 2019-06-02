import React from "react";
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
const Input=({margin,height,font})=>
{
    const useStyles = makeStyles({
        root: {
          background: 'linear-gradient(45deg, #BB5959 30%, #BB5959 90%)',
          border: 0,
          borderRadius: 3,
          fontSize:`0.9vw`,
          color: 'white',
          marginLeft: `6vw`,
          marginTop: '1.5vw',
          height: `3vw`,
          padding: '0 2vw',
        },
      });
      const classes = useStyles();
      return(
            <Button variant="contained" color="primary" className={classes.root}>
                Show me more
            </Button>
      );
}
export default Input;