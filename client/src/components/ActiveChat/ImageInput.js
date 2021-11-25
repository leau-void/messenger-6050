import React from "react";
import crypto from "crypto";
import { Grid, Box, IconButton } from "@material-ui/core";
import AddPhotoIcon from "@material-ui/icons/AddPhotoAlternate";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    grid: "1fr / 50px 1fr",
    gap: "10px",
    margin: "1rem 0",
    alignItems: "flex-end",
  },
  input: {
    opacity: 0,
    position: "fixed",
    left: "-100vw",
  },
  button: {
    margin: "0.5rem",
    marginBottom: 0,

    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  preview: {
    height: "fit-content",
    width: "fit-content",
    maxHeight: "150px",
    maxWidth: "100%",
    flexWrap: "nowrap",
    overflowX: "scroll",
    background: "#F4F6FA",
    padding: "1rem",
    margin: "0 0.5rem",
    gap: "1rem",
    borderRadius: 8,

    "&:empty": {
      display: "none",
    },
    "&::-webkit-scrollbar": {
      height: "15px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 16,
      border: "5px solid transparent",
      backgroundClip: "padding-box",
    },
  },
  imageWrap: {
    position: "relative",
  },
  image: {
    height: "100px",
    borderRadius: 8,
  },
  deleteButton: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 100,
    transform: "translate(50%, -50%)",
  },
}));

const ImageInput = (props) => {
  const classes = useStyles();
  const { images, setImages } = props;
  console.log(images);
  const addImage = (event) => {
    const input = event.currentTarget;
    const newImages = [...input.files].map((file) => ({
      file,
      url: URL.createObjectURL(file),
      id: crypto.randomBytes(16).toString("hex"),
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
    input.value = "";
  };

  const removeImage = (id) =>
    setImages((prevImages) => prevImages.filter((image) => image.id !== id));

  return (
    <Grid container className={classes.root}>
      <input
        onChange={addImage}
        id="image-input"
        type="file"
        accept="image/*"
        multiple
        className={classes.input}
      />
      <label htmlFor="image-input">
        <IconButton component="span" className={classes.button}>
          <AddPhotoIcon fontSize="20px" />
        </IconButton>
      </label>
      <Grid container className={classes.preview}>
        {images.map((image, index) => (
          <Box key={image.id} className={classes.imageWrap}>
            <img
              className={classes.image}
              alt="Preview thumbnail"
              src={image.url}
            />
            <IconButton
              onClick={() => removeImage(image.id)}
              size="small"
              className={classes.deleteButton}>
              <CancelRoundedIcon />
            </IconButton>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default ImageInput;
