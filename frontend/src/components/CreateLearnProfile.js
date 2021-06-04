import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import AppApi from "../api/AppApi";
import { TextField, Button, Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import LearnProfileBO from '../api/LearnProfileBO';



class CreateLearnProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      study_status: "",
      frequency: "",
      prev_knowledge: "",
      group_size:"",
      extroversion: "",
      profile_id: "",
      learnprofile: null, //Für addLearnProfile
      loadingInProgress: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  /** Create LearnProfile*/
  addLearnProfile( study_status,frequency,prev_knowledge, group_size, extroversion,profile_id) {
    
    var learnprofile = new LearnProfileBO
    learnprofile.setStudyStatus(study_status)
    learnprofile.setFrequency(frequency)
    learnprofile.setPrevKnowledge(prev_knowledge)
    learnprofile.setGroupSize(group_size)
    learnprofile.setExtroversion(extroversion)
    learnprofile.setProfileId(profile_id)




    
    
    var api = AppApi.getApi();
    // console.log(api)
    api
      .addLearnProfile(learnprofile).then((learnprofile) => {
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
      this.state.group_size,
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
                <center><h1>Lege dein Lernprofil an:</h1></center>
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
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">
                        Wie möchtest du lernen?
                      </FormLabel>
                      <RadioGroup
                        aria-label="study_status"
                        name="study_status"
                        className={classes.group}
                        value={this.state.value}
                        onChange={this.handleChange}
                      >
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Online (Zoom, Discord, Skype, etc)"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Offline/Präsenz"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label="Egal"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>

                  <div>
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">
                        Wie viele Tage in der Woche möchtest du lernen?
                      </FormLabel>
                      <RadioGroup
                        aria-label="frequency"
                        name="frequency"
                        className={classes.group}
                        value={this.state.value}
                        onChange={this.handleChange}
                      >
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="1-2 Tage"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="3-5 Tage"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label="5-7 Tage"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>

                  <div>
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">
                        Hast du bereits Vorkenntnise?
                      </FormLabel>
                      <RadioGroup
                        aria-label="prev_knowledge"
                        name="prev_knowledge"
                        className={classes.group}
                        value={this.state.value}
                        onChange={this.handleChange}
                      >
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="JA"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="NEIN"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div>
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">
                        Wie groß sollte die Lerngruppe sein?
                      </FormLabel>
                      <RadioGroup
                        aria-label="Gruppengröße"
                        name="group_size"
                        className={classes.group}
                        value={this.state.value}
                        onChange={this.handleChange}
                      >
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="kleine Gruppe (2-3 Personen)"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="größere Gruppe (über 4 Personen)"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div>
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">
                        Bist du eher Extrovertiert oder Introvertiert?
                      </FormLabel>
                      <RadioGroup
                        aria-label="extrovertiert oder introvertiert"
                        name="extroversion"
                        className={classes.group}
                        value={this.state.value}
                        onChange={this.handleChange}
                      >
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="eher Extrovertiert"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="eher Introvertiert"
                        />
                      </RadioGroup>
                    </FormControl>
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
      margin: theme.spacing(3),
      width: "50ch",
    },
    roott: {
      flexGrow: 1,
    },
    button: {
      margin: theme.spacing(1),
    },
    // group: {
    //   margin: `${theme.spacing.unit}px 0`,
    // },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  },
});

export default withStyles(styles)(CreateLearnProfile);
