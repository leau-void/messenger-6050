import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import AddPhotoIcon from "@material-ui/icons/AddPhotoAlternate";
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
    left: "-100vw"
  },
  button: {
    margin: "0.5rem",
    marginBottom: 0,

    "&:hover": {
      color: theme.palette.primary.main
    }
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
    '&::-webkit-scrollbar': {
      height: "15px"
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 16,
      border: "5px solid transparent",
      backgroundClip: "padding-box"
    }
  },
  image: {
    height: "100px",
    borderRadius: 8
  }
}));

const ImageInput = (props) => {
  const classes = useStyles();
  const { images, setImages } = props;
  console.log(images)

  return (
    <Grid container className={classes.root}>
      <input
        onChange={(e) => {
          const newImages = [...e.currentTarget.files].map((file) => ({file, url: URL.createObjectURL(file)}))
          setImages((prevImages) => [...prevImages, ...newImages])
        }
        }
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
        {images.map((image) => <img className={classes.image} alt="Preview thumbnail" src={image.url} />)}
      </Grid>
    </Grid>
  )
}

export default ImageInput