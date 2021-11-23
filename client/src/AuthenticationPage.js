import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh"
  }
}));

const AuthenticationPage = (props) => {
  const { children } = props
  return <div>{Array.isArray(children) ? children.map((child) => child) : children}</div>
}

export default AuthenticationPage