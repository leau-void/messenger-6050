import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import { 
  AuthenticationPage,
  AuthenticationButton,
  AuthenticationForm,
  AuthenticationTopBar
} from "./components/AuthenticationPage";

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
      <Grid container justify="center">
          <AuthenticationTopBar item>
            <Typography>Need to register?</Typography>
            <AuthenticationButton onClick={() => history.push("/register")}>Register</AuthenticationButton>
          </AuthenticationTopBar>
          <AuthenticationForm onSubmit={handleLogin}>
            <Grid>
              <Typography component="h1">Welcome back!</Typography>
              <Grid>
                <FormControl margin="normal" required>
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                  />
                </FormControl>
              </Grid>
              <FormControl margin="normal" required>
                <TextField
                  label="Password"
                  aria-label="password"
                  type="password"
                  name="password"
                />
              </FormControl>
              <Grid>
                <AuthenticationButton main type="submit" variant="contained" size="large">
                  Login
                </AuthenticationButton>
              </Grid>
            </Grid>
          </AuthenticationForm>
      </Grid>
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
