import { ImageList, ImageListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "fit-content",
  },
  image: {},
}));

const ImageDisplay = (props) => {
  const classes = useStyles();
  const { images } = props;

  return (
    <ImageList className={classes.root}>
      {images.map((image, index) => (
        <ImageListItem className={classes.image} key={index}>
          <img src={image} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImageDisplay;
