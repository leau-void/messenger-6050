import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ImageDisplay from "./ImageDisplay";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    width: "100%",
    borderRadius: "inherit",
  },
}));

const MessageWrap = (props) => {
  const classes = useStyles();
  const { children, images } = props;

  // if there 1 image + text, the children will render the image (so inside the bubble), otherwise add images after
  return (
    <Box className={classes.root}>
      {children}
      {(!children || images.length > 1) && <ImageDisplay images={images} />}
    </Box>
  );
};

export default MessageWrap;
