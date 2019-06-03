import React from "react";
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
const Input=({title,width,height,marginTop,marginLeft,fontSize,color,background,fontWeight})=>
{
    const useStyles = makeStyles({
        root: {
          background: `linear-gradient(45deg, ${background} 30%, ${background} 90%)`,
          border: 0,
          borderRadius: 3,
          fontSize:`${fontSize}`,
          color: `${color}`,
          marginLeft: `${marginLeft}`,
          marginTop: `${marginTop}`,
          height: `${height}`,
          padding: '0 2vw',
          width: `${width}`,
          fontWeight:`${fontWeight}`,
          fontFamily:`CircularStd`,
          minWidth:`0px`,
          minMargin:`0px`
        },
      });
      const classes = useStyles();
      
      return(
            <Button variant="contained" color="primary" className={classes.root}>
              {title}
            </Button>  
      );
}
export default Input;