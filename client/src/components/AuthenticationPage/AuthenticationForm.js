import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
  },
  container: {
    paddingTop: "3rem",
    "& > h2": {
      color: "red"
    }
  },
  button: {
    fontFamily: "Montserrat, Open Sans, sans-serif",
  },
}));

const AuthenticationForm = (props) => {
  const classes = useStyles();
  const { children, onSubmit } = props;
  return (
    <form onSubmit={onSubmit} className={classes.root}>
      <Grid container className={classes.container} >
        {Array.isArray(children) ? children.map((child) => child) : children}
      </Grid>
    </form>
  );
};

export default AuthenticationForm;
