import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  button: {
    fontFamily: "Montserrat, Open Sans, sans-serif",
  },
}));

const AuthenticationPage = (props) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <Grid container>
      <Sidebar />
      {Array.isArray(children) ? children.map((child) => child) : children}
    </Grid>
  );
};

export default AuthenticationPage;
