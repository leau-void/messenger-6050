import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "160px",
    height: "56px",
    alignSelf: "center",
  },
  main: {
    background: theme.palette.primary.main,
    color: "white",
    margin: theme.spacing(4, 2),
    "&:hover": {
      color: theme.palette.primary.main,
    },

    "@media (max-height: 600px)": {
      margin: theme.spacing(1)
    },
  },
  secondary: {
    color: theme.palette.primary.main,
    boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)"
  }
}));

const AuthenticationButton = (props) => {
  const classes = useStyles();
  const { children, main, ...restProps } = props
  
  // use of Object destructuring and rest syntax to assure flexibility
  return (
    <Button className={`${classes.root} ${main ? classes.main : classes.secondary}`} {...restProps}>
      {children}
    </Button>
  )
}

export default AuthenticationButton