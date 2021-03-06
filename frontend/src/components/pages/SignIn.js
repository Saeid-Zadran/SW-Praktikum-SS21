import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Grid, Typography, withStyles } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

/**
 * Zeigt die SignIn Seite der ProChecked - App.
 * Der Nutzer kann sich mit einem Google Account anmelden.
 */

class SignIn extends Component {
  /**
   * Handles the click event of the sign in button an calls the prop onSignIn handler
   */
  handleSignInButtonClicked = () => {
    this.props.onSignIn();
  };

  /** Renders the sign in page, if user objext is null */
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.paper}>
        <Typography
          className={classes.root}
          align="center"
          style={{ color: "white" }}
          variant="h6"
        >
          Willkomen auf der Matchmaking Seite für Lerngruppen der HdM
        </Typography>
        <Typography
          className={classes.root}
          align="center"
          style={{ color: "white" }}
        >
          Bisher sind Sie nicht eingeloggt.
        </Typography>
        <Typography
          className={classes.root}
          align="center"
          style={{ color: "white" }}
        >
          Melden Sie sich bitte an um "StudyMatch" mit all seinen Funktionen
          nutzen zu können.{" "}
        </Typography>

        <div>
          <center>
            <br></br>
            <Button
              variant="contained"
              color="white"
              onClick={this.handleSignInButtonClicked}
            >
              Login via Google
            </Button>
            <br></br>
            <br></br>
            <Button
              variant="outlined"
              color="secondary"
              onClick={this.handleSignInButtonClicked}
            >
              Register via Google
            </Button>
            <br></br>
            <br></br>
          </center>
        </div>
      </div>
    );
  }
}

/** Component specific styles */
const styles = (theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  paper: {
    height: "89vh",
    backgroundColor: grey[900],
  },
});

/** PropTypes */
SignIn.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /**
   * Handler function, which is called if the user wants to sign in.
   */
  onSignIn: PropTypes.func.isRequired,
};

export default withStyles(styles)(SignIn);
