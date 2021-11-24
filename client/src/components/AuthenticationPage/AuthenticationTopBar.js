import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "fit-content",
    alignSelf: "end",
    justifyContent: "center",
    padding: "2rem 3rem",
    fontSize: "14px",
    alignItems: "center",
    gap: "3rem",
    color: "#B0B0B0",
    marginBottom: "auto",
    textAlign: "center",

    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "1.5rem"
    },

    "@media (max-width: 475px)": {
      flexDirection: "row",
      gap: "1rem",
      padding: "2rem 1.5rem",
      alignSelf: "center"
    }
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
