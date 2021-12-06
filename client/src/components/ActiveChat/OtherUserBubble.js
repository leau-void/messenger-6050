import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";
import MessageWrap from "./MessageWrap";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  message: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: theme.spacing(2),
    borderRadius: "0 10px 10px 10px",
    width: "100%",
    justifyContent: "flex-start",
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: theme.spacing(1.5),
    marginTop: theme.spacing(0.75),
  },
  usernameDate: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: theme.spacing(0.5),
  },
  bubble: {
    backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    borderRadius: "inherit",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: -0.2,
    padding: theme.spacing(1),
  },
  singleImage: {
    width: "100%",
    maxWidth: "200px",
    borderRadius: "0 10px 0 0",
  },
}));

const OtherUserBubble = (props) => {
  const classes = useStyles();
  const { text, time, otherUser, images } = props;
  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar} />
      <Box className={classes.message}>
        <Typography className={classes.usernameDate}>
          {otherUser.username} {time}
        </Typography>
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
    </Box>
  );
};

export default OtherUserBubble;
