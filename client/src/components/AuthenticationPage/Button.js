import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "160px",
    height: "56px",
    fontSize: "16px",
    alignSelf: "center",
  },
  main: {
    background: "#3A8DFF",
    color: "white",
    margin: "2rem 1rem",
    "&:hover": {
      color: "#3A8DFF"
    },

    "@media (max-height: 600px)": {
      margin: "0.5rem"
    },
  },
  secondary: {
    color: "#3A8DFF",
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