import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { authpageSidebarImage, AuthpageBubble } from "../../assets"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "min(35vw, 400px)",
    padding: 0,
    background: `top / cover no-repeat url(${authpageSidebarImage})`,
    position: "relative",
    color: "white",

    "@media (max-width: 475px)": {
      width: "100%",
      height: "fit-content"
    }
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
    placeItems: "center",

    "@media (max-width: 475px)": {
      position: "relative",
      grid: "auto auto / 1fr",
      height: "fit-content",
    }
  },
  bubble: {
    placeSelf: "end center",
    width: "66px",
    height: "67px",
    paddingTop: theme.spacing(2)
  },
  text: {
    width: "75%",
    padding: theme.spacing(2)
  }
}));

const Sidebar = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <AuthpageBubble className={classes.bubble} />
        <Typography variant="h2" className={classes.text}>Converse with anyone with any language</Typography>
      </Box>
    </Box>
  )
};

export default Sidebar;
