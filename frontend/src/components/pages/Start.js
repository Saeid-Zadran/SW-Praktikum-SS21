import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
  withStyles,
} from "@material-ui/core";
import Theme from "../../Theme";
import {
  BrowserRouter as Router,
  Redirect,
  Link,
  Route,
} from "react-router-dom";

class Start extends Component {
  render() {
    return (
      <CssBaseline>
        <div>
          <center>
            <Typography>Willkommen auf der Lern Matching </Typography>
            <br></br>
            <Typography>Willkommen, {getCookie("name")}  </Typography>
            <Link to="/StartPage/CreateProfile">
              <Button variant="contained" color="primary">
                Create Profile
              </Button>
            </Link>
            <br></br>
            <br></br>
            <Typography>Angemeldet ? Ja </Typography>
            <Link to="/SecondPage">
              <Button variant="contained" color="primary">
                Further Use
              </Button>
            </Link>
            <br></br>
            <br></br>
          </center>
        </div>
      </CssBaseline>
    );
  }
}


function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

export default Start;
