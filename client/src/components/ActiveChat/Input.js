import React, { useState } from "react";
import axios from "axios";
import { FormControl, FilledInput, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";
import { ImageInput } from ".";

const useStyles = makeStyles((theme) => ({
  root: {
    justifySelf: "flex-end",
    marginTop: theme.spacing(2),
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: theme.spacing(2.5),
  },
}));

const Input = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const { postMessage, otherUser, conversationId, user } = props;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // reset inputs at first to avoid sending multiple messages during async processing of images
    let curText = text;
    let curImages = images;
    setText("");
    setImages([]);

    let attachments;
    if (curImages.length) {
      const url = "https://api.cloudinary.com/v1_1/leau/image/upload";
      attachments = (await Promise.all(
        curImages.map(async (image) => {
          const formData = new FormData();
          formData.append("file", image.file);
          formData.append("upload_preset", process.env.CLOUDINARY_KEY);

          const response = axios.post(url, formData,
            { 
            transformRequest: (data, headers) => {
            delete headers["x-access-token"];
            return data;
            }
          });

          return response;
        })
      )).map((response) => {
        return response.data.secure_url
      })
    }

    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: curText,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments,
    };
    await postMessage(reqBody);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Box>
        <ImageInput images={images} setImages={setImages} />
      </Box>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
        />
      </FormControl>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
