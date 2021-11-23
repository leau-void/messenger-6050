import React from "react";
import { Box, SvgIcon, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { authpageSidebarImage, AuthpageBubble } from "../../assets"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "40vw",
    padding: 0,
    background: `top / cover no-repeat url(${authpageSidebarImage})`,
    position: "relative",
    color: "white",
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: "linear-gradient(rgba(58, 141, 255, 0.85), rgba(134, 185, 255, 0.85))",
    display: "grid",
    grid: "1fr auto 1fr/ 1fr",
    placeItems: "center"
  },
  bubble: {
    placeSelf: "end center",
    width: "66px",
    height: "67px"
  },
  text: {
    fontSize: "26px",
    textAlign: "center",
    width: "75%",
    padding: "2.5rem",
    lineHeight: "40px"
  }
}));

const Sidebar = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <AuthpageBubble className={classes.bubble} />
        <Typography className={classes.text}>Converse with anyone with any language</Typography>
      </Box>
    </Box>
  )
};

export default Sidebar;
