import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import AppApi from "../../api/AppApi";
import { TextField, Button, Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import LearnGroupBO from "../../api/LearnGroupBO";

class CreateLearnGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      participant: "",
      profile_id: "",
      learn_profile_id: "",
      learngroup: null, //für addLearnGroup
      loadingInProgress: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  /** Create LearnGroupProfile*/
  addLearnGroup(name, participant, profile_id, learn_profile_id) {

    var learngroup = new LearnGroupBO
    learngroup.setName(name)
    learngroup.setParticipant(participant)
    learngroup.setProfileId(profile_id)
    learngroup.setLearnProfileId(learn_profile_id)


    var api = AppApi.getApi();
    // console.log(api)
    api
      .addLearnGroup(learngroup)
      .then((learngroup) => {
        // console.log(person)
        this.setState({
          learngroup: learngroup,
        });
      });
    console.log(this.state.learngroup);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    // console.log({ [e.target.name]: e.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault(); //r: verhindert ein neuladen der seite bei unberechtigten aufruf der funktion
    this.addLearnGroup(
      this.state.name,
      this.state.participant,
      this.state.profile_id,
      this.state.learn_profile_id
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
                <h1>Lege deine Lerngruppe an:</h1>
              </div>
              <div>
                <form className={classes.root} onSubmit={this.handleSubmit}>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Wie soll die Lerngruppe heißen?"
                      variant="outlined"
                      name="name"
                      //required
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Wie viele Teilnehmer hat die Gruppe?"
                      variant="outlined"
                      name="participant"
                      type="number"
                      //required
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Profile ID"
                      variant="outlined"
                      type="number"
                      name="profile_id"
                      //required
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Lernprofil ID"
                      variant="outlined"
                      type="number"
                      name="learn_profile_id"
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
                    Bestätigen
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

export default withStyles(styles)(CreateLearnGroup);
