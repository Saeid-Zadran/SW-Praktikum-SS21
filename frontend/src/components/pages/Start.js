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
        <div>
          <center>
            <Typography>Erstellen Sie ein neues Profil: </Typography>
            <Link
              to={{
                pathname: "/ProfileList",
              }}
            >
              <Button variant="contained" color="primary">
                Profil erstellen
              </Button>
            </Link>
          </center>
        </div>
        <div>
          <center>
            <Typography>Erstellen Sie ein neues Lernprofil, </Typography>
            <Typography>um Studenten mit den selben Interessen zu finden: </Typography>
            <Link
              to={{
                pathname: "/CreateLearnProfile",
              }}
            >
              <Button variant="contained" color="primary">
                Lernprofil erstellen
              </Button>
            </Link>
          </center>
        </div>
        <div>
          <center>
            <Typography>Erstellen Sie eine neue Lerngruppe, </Typography>
            <Typography>um mit Studenten zu lernen: </Typography>
            <Link
              to={{
                pathname: "/CreateLearnGroup",
              }}
            >
              <Button variant="contained" color="primary">
                Lerngruppe erstellen
              </Button>
            </Link>
          </center>
        </div>
      </div>
      </CssBaseline>
    );
  }
}

export default Start;
