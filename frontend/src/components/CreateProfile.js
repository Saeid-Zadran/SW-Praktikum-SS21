import React from "react";
/* import {
  withStyles,
  IconButton,
  Button,
  ListItem,
  Grid,
} from "@material-ui/core"; */
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
// import ProfileBO from "./api/ProfileBO";
import FormControl from "@material-ui/core/FormControl";

class CreateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
      age: 0,
      adress: "",
      semester: 0,
      degree_course: "",
      preferences: "",
    };
  }
  render() {
    const { classes } = this.props;
    const { age, adress, semester, degree_course, preferences } = this.state;

    return (
      <FormControl className={classes.FormControl} fullWidth margin="normal">
        <TextField
          id="outlined-basic"
          label="Age"
          variant="outlined"
          name="age"
          required
          value={age}
          onChange={this.handleChange}
        ></TextField>

        <TextField
          id="outlined-basic"
          label="Adress"
          variant="outlined"
          name="adress"
          required
          value={adress}
          onChange={this.handleChange}
        ></TextField>
      </FormControl>
    );
  }
}

export default CreateProfile;
