import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Typography,
  FormControl,
} from "@material-ui/core";
import { 
  AuthenticationPage,
  Button,
  Form,
  TopBar,
  TextField,
  Content
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
      <Content>
          <TopBar item>
            <Typography>Need to register?</Typography>
            <Button onClick={() => history.push("/register")}>Register</Button>
          </TopBar>
          <Form onSubmit={handleLogin}>
              <Typography component="h1">Welcome back!</Typography>
                <FormControl margin="normal" required>
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                  />
                </FormControl>
              <FormControl margin="normal" required>
                <TextField
                  label="Password"
                  aria-label="password"
                  type="password"
                  name="password"
                />
              </FormControl>
                <Button main type="submit" variant="contained" size="large">
                  Login
                </Button>
          </Form>
      </Content>
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
