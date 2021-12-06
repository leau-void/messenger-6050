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
    alignItems: "flex-end",
    marginBottom: theme.spacing(2),
    borderRadius: "10px 10px 0 10px",
    justifyContent: "flex-end",
    width: "100%",

    ".other-user &": {
      alignItems: "flex-start",
      borderRadius: "0 10px 10px 10px",
      justifyContent: "flex-start",
    }
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

    ".other-user &": {
      color: "#FFFFFF",
    }
  },
  bubble: {
    background: "#F4F6FA",
    flexShrink: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "inherit",

    ".other-user &": {
      background: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    }
  },
  singleImage: {
    width: "100%",
    maxWidth: "200px",
    borderRadius: "10px 10px 0 0",
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: theme.spacing(1.5),
    marginTop: theme.spacing(0.75),
  },
}));

const ChatBubble = (props) => {
  const classes = useStyles();
  const { text, time, otherUser, images } = props;
  
  return (
    <Box className={classes.root + (otherUser ? " other-user" : "")}>
      {otherUser && <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar} />}
      <Box className={classes.message}>
        <Typography className={classes.date}>
          {otherUser && otherUser.username} {time}
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

export default ChatBubble;
