import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "fit-content",
    alignSelf: "end",
    justifyContent: "center",
    padding: theme.spacing(4, 6),
    fontSize: "14px",
    alignItems: "center",
    gap: theme.spacing(6),
    color: theme.palette.secondary.main,
    marginBottom: "auto",
    textAlign: "center",

    "@media (max-width: 768px)": {
      padding: theme.spacing(3, 1),
      alignSelf: "center",
      gap: theme.spacing(2)
    },

    "@media (max-height: 520px)": {
      paddingBottom: theme.spacing(1)
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
