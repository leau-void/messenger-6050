import React from "react";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "grid",
    grid: "1fr / fit-content(400px) auto",
    "@media (max-width: 475px)": {
      grid: "1fr auto / 1fr",
      height: "fit-content",
      flexWrap: "no-wrap"
    }
  },
  content: {
    height: "100%",
    width: "100%"
  },
}));

const AuthenticationPage = (props) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <Grid container className={classes.root}>
      <Sidebar />
      <Box className={classes.content}>
        {children}
      </Box>
    </Grid>
  );
};

export default AuthenticationPage;
