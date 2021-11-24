import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  FormControl,
} from "@material-ui/core";
import { 
  AuthenticationPage,
  AuthenticationButton,
  AuthenticationForm,
  AuthenticationTopBar,
  AuthenticationTextField,
  AuthenticationContent
} from "./components/AuthenticationPage";
import { login } from "./store/utils/thunkCreators";

const Login = (props) => {
  const history = useHistory();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <AuthenticationPage>
      <AuthenticationContent>
          <AuthenticationTopBar item>
            <Typography>Need to register?</Typography>
            <AuthenticationButton onClick={() => history.push("/register")}>Register</AuthenticationButton>
          </AuthenticationTopBar>
          <AuthenticationForm onSubmit={handleLogin}>
              <Typography component="h1">Welcome back!</Typography>
                <FormControl margin="normal" required>
                  <AuthenticationTextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                  />
                </FormControl>
              <FormControl margin="normal" required>
                <AuthenticationTextField
                  label="Password"
                  aria-label="password"
                  type="password"
                  name="password"
                />
              </FormControl>
                <AuthenticationButton main type="submit" variant="contained" size="large">
                  Login
                </AuthenticationButton>
          </AuthenticationForm>
      </AuthenticationContent>
    </AuthenticationPage>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
