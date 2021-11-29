import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "max(60%, 240px)",
    marginBottom: "auto",
    "@media (max-width: 475px)": {
      width: "80%"
    }
  },
  container: {
    flexDirection: "column",
    gap: theme.spacing(2),
    "& h1": {
      fontSize: "26px",
      fontWeight: "bold",
      width: "100%",
      alignSelf: "left"
    },
    "@media (max-height: 600px)": {
      gap: theme.spacing(1)
    },
  }
}));

const Form = (props) => {
  const classes = useStyles();
  const { children, onSubmit } = props;
  return (
    <form onSubmit={onSubmit} className={classes.root}>
      <Grid container className={classes.container} >
        {children.map((child) => child)}
      </Grid>
    </form>
  );
};

export default Form;
