import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
  }
}));

const Content = (props) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <Grid container className={classes.root} >
      {Array.isArray(children) ? children.map((child) => child) : children}
    </Grid>
  );
};

export default Content;
