import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import authpageSidebarImage from "../../assets/authpageSidebarImage.png"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "40vw",
    padding: 0,
    background: `top / contain no-repeat url(${authpageSidebarImage})`,
    position: "relative",
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: "linear-gradient(rgba(58, 141, 255, 0.85), rgba(134, 185, 255, 0.85))"
  }
}));

const Sidebar = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
      </Box>
    </Box>
  )
};

export default Sidebar;
