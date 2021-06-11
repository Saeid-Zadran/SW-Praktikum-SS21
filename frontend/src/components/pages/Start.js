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
            <Typography>Angemeldet ? Nein </Typography>
            <Link to="/StartPage">
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

export default Start;
