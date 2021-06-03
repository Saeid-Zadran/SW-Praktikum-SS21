import React, { Component } from "react";
import PropTypes from "prop-types";
import {Button,Container,CssBaseline,Grid,ThemeProvider,Typography,withStyles,} from "@material-ui/core";
import Theme from "../../Theme";
import {BrowserRouter as Router,Redirect,Link,Route} from "react-router-dom";

class Start extends Component {
  render() {
    return (
      <CssBaseline>
      
        <div>
          <center>
            <Typography>Willkommen auf der Lern Matching  </Typography>
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
        
         
      </CssBaseline>
    );
  }
}

export default Start;
