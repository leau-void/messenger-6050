import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import MessageWrap from "./MessageWrap";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginBottom: theme.spacing(2),
    borderRadius: "10px 10px 0 10px",
    justifyContent: "flex-end"
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: theme.spacing(0.5),
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: theme.spacing(1),
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  bubble: {
    background: "#F4F6FA",
    flexShrink: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "inherit",
  },
  singleImage: {
    width: "100%",
    maxWidth: "200px",
    borderRadius: "10px 10px 0 0",
  },
}));

const SenderBubble = (props) => {
  const classes = useStyles();
  const { time, text, images } = props;

  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      <MessageWrap images={images}>
        {text && (
          <Box className={classes.bubble}>
            {images.length === 1 && (
              <img
                className={classes.singleImage}
                src={images[0]}
                alt="Attatchment #1"
              />
            )}
            <Typography className={classes.text}>{text}</Typography>
          </Box>
        )}
      </MessageWrap>
    </Box>
  );
};

export default SenderBubble;
