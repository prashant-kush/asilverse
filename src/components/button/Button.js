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
          fontSize:`${font}`,
          color: 'white',
          marginLeft: `${margin}`,
          marginTop: '3%',
          height: `${height}`,
          padding: '0 30px',
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