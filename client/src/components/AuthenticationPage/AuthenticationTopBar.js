import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "flex-end",
    padding: "2rem 3rem",
    fontSize: "14px",
    alignItems: "center",
    gap: "3rem",
    color: "#B0B0B0"
  },
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
