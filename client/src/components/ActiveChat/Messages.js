import React from "react";
import { Box } from "@material-ui/core";
import moment from "moment";
import ChatBubble from "./ChatBubble";

const Messages = (props) => {
  const { messages, otherUser, userId } = props;

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        return (
          <ChatBubble
            key={message.id}
            images={message.attachments || []}
            text={message.text}
            time={time}
            otherUser={message.senderId !== userId && otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
