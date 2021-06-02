import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import AppApi from "../api/AppApi";
import { TextField, Button, Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

class CreatePerson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      study_status: "",
      frequency: "",
      prev_knowledge: "",
      extroversion: "",
      profile_id: "",
      learnprofile: "",
      loadingInProgress: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  /** Create LearnProfile*/
  addLearnProfile(
    study_status,
    frequency,
    prev_knowledge,
    extroversion,
    profile_id
  ) {
    var api = AppApi.getApi();
    // console.log(api)
    api
      .addLearnProfile(
        study_status,
        frequency,
        prev_knowledge,
        extroversion,
        profile_id
      )
      .then((learnprofile) => {
        // console.log(person)
        this.setState({
          learnprofile: learnprofile,
        });
      });
    console.log(this.state.learnprofile);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    // console.log({ [e.target.name]: e.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault(); //r: verhindert ein neuladen der seite bei unberechtigten aufruf der funktion
    this.addLearnProfile(
      this.state.study_status,
      this.state.frequency,
      this.state.prev_knowledge,
      this.state.extroversion,
      this.state.profile_id
    );
  };

  render() {
    const { classes } = this.props;
    console.log(this.state);

    return (
      <div className={classes.roott}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div>
                <h1>Lege dein Lernprofil an:</h1>
              </div>
              <div>
                <form className={classes.root} onSubmit={this.handleSubmit}>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Gebe deine Profile ID an"
                      variant="outlined"
                      name="profile_id"
                      //required
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Study Status"
                      variant="outlined"
                      name="study_status"
                      //required
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Wie oft möchtest lernen?"
                      variant="outlined"
                      name="frequency"
                      //required
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Wie vie Vorkenntnisse hast du?"
                      variant="outlined"
                      name="prev_knowledge"
                      //required
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Extrovertiert?"
                      variant="outlined"
                      name="extroversion"
                      //required
                      onChange={this.handleChange}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="contained"
                    color="default"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                  >
                    Lernprofil bestätigen
                  </Button>
                </form>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch",
    },
    roott: {
      flexGrow: 1,
    },
    button: {
      margin: theme.spacing(1),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  },
});

export default withStyles(styles)(CreatePerson);
