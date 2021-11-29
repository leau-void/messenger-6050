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
    color: theme.palette.secondary.main,
    marginBottom: "auto",
    textAlign: "center",

    "@media (max-width: 768px)": {
      padding: "1.5rem 0.5rem",
      alignSelf: "center",
      gap: "1rem"
    },

    "@media (max-height: 520px)": {
      paddingBottom: "0.5rem"
    }
  }
}));

const TopBar = (props) => {
  const classes = useStyles();
  const { children, text, ...restProps } = props;
  return (
    <Grid container {...restProps} className={classes.root} >
      {children.map((child) => child)}
    </Grid>
  );
};

export default TopBar;
