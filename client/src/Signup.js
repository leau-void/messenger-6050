import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import { 
  AuthenticationPage,
  AuthenticationButton,
  AuthenticationForm,
  AuthenticationTopBar,
  AuthenticationTextField,
  AuthenticationContent
} from "./components/AuthenticationPage";
import { register } from "./store/utils/thunkCreators";

const Login = (props) => {
  const history = useHistory();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <AuthenticationPage>
      <AuthenticationContent>
        <AuthenticationTopBar container item>
          <Typography>Need to log in?</Typography>
          <AuthenticationButton onClick={() => history.push("/login")}>Login</AuthenticationButton>
        </AuthenticationTopBar>
        <AuthenticationForm onSubmit={handleRegister}>
            <Typography component="h1">Create an account.</Typography>
              <FormControl>
                <AuthenticationTextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  required
                />
              </FormControl>
              <FormControl>
                <AuthenticationTextField
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                  required
                />
              </FormControl>
              <FormControl error={!!formErrorMessage.confirmPassword}>
                <AuthenticationTextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
              <FormControl error={!!formErrorMessage.confirmPassword}>
                <AuthenticationTextField
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="confirmPassword"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            <AuthenticationButton main type="submit" variant="contained" size="large">
              Create
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
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
