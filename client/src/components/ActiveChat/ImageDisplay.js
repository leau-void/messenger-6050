import { ImageList, ImageListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    justifyContent: "flex-end",
    borderRadius: "inherit",
    gap: theme.spacing(1),
    flexWrap: "wrap",
    paddingTop: theme.spacing(1),
  },
  imageItem: {
    borderRadius: "inherit",
    height: "auto !important",
    flex: "0 1 200px",
    minWidth: 100,
    maxHeight: 200,

    "& > .MuiImageListItem-item": {
      borderRadius: "inherit",
      width: "100%",
    },
  },
  image: {
    borderRadius: "inherit",
    width: "100%",
  },
}));

const ImageDisplay = (props) => {
  const classes = useStyles();
  const { images } = props;

  return (
    <>
      <ImageList col={3} className={classes.root}>
        {images.map((image, index) => (
          <ImageListItem className={classes.imageItem} key={index}>
            <img
              className={classes.image}
              src={image}
              alt={`Attachment #${index}`}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default ImageDisplay;
