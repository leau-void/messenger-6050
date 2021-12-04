import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ImageDisplay from "./ImageDisplay";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
}));

const MessageWrap = (props) => {
  const classes = useStyles();
  const { children, images } = props;

  return <Box className={classes.root}>{children}</Box>;
};

export default MessageWrap;
