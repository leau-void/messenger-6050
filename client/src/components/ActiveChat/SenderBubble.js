import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import MessageWrap from "./MessageWrap";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginBottom: 16,
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
    flexShrink: 1,
    maxWidth: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  singleImage: {
    width: "100%",
    maxWidth: "250px",
    textAlign: "center",
    borderRadius: "10px 10px 0 0",
  },
}));

const SenderBubble = (props) => {
  const classes = useStyles();
  const { time, text, images } = props;

  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      <MessageWrap>
        {text && (
          <Box images={images} className={classes.bubble}>
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
