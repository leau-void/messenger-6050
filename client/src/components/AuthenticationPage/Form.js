import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "60%",
    marginBottom: "auto",
    "@media (max-width: 475px)": {
      width: "80%"
    }
  },
  container: {
    flexDirection: "column",
    gap: "1rem",
    "& h1": {
      fontSize: "26px",
      fontWeight: "bold",
      width: "100%",
      alignSelf: "left"
    }
  },
  button: {
    fontFamily: "Montserrat, Open Sans, sans-serif",
  },
}));

const Form = (props) => {
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

export default Form;
