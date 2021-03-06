import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  input: {
    padding: theme.spacing(0.5),
  },
  label: {
    padding: theme.spacing(0.5),
  }
}));

const AuthenticationTextField = (props) => {
  const classes = useStyles();

  return <TextField 
  className={classes.root} {...props} 
  InputProps={{
    className: classes.input
    }}
  InputLabelProps={{
    className: classes.label
  }} />
}

export default AuthenticationTextField