import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "fit-content",
    alignSelf: "end",
    justifyContent: "center",
    padding: "2rem 3rem",
    fontSize: "14px",
    alignItems: "center",
    alignContent: "space-around",
    gap: "3rem",
    color: "#B0B0B0",
    marginBottom: "auto"
  }
}));

const AuthenticationTopBar = (props) => {
  const classes = useStyles();
  const { children, text, ...restProps } = props;
  return (
    <Grid container {...restProps} className={classes.root} >
      {Array.isArray(children) ? children.map((child) => child) : children}
    </Grid>
  );
};

export default AuthenticationTopBar;
