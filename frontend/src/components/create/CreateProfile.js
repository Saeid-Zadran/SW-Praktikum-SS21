import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import AppApi from "../../api/AppApi";
import { TextField, Button, Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import ProfileBO from "../../api/ProfileBO";
import history from '../../history'



class CreateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name:"",
      age: "",
      adress: "",
      semester: "",
      degree_course:"",
      person_id: null, 
      loadingInProgress: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  addProfile( name, age, adress,semester, degree_course,person_id) {
    
    var profile = new ProfileBO
    profile.setName(name)
    profile.setAge(age)
    profile.setAdress(adress)
    profile.setSemester(semester)
    profile.setDegreeCourse(degree_course)
    profile.setPersonId(person_id)
    
    console.log(this.state.profile);

    var api = AppApi.getApi();
    // console.log(api)
    api.addProfile(profile).then((profile) => {
        // console.log(person)
        this.setState({
          profile: profile,
        });

      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    // console.log({ [e.target.name]: e.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault(); //r: verhindert ein neuladen der seite bei unberechtigten aufruf der funktion
    this.addProfile(
      this.state.name,
      this.state.age,
      this.state.adress,
      this.state.semester,
      this.state.degree_course,
      this.state.person_id
    );


    history.push('/SecondPage/CreateLearnProfile');

  };
  async componentDidMount() {
    
    let uid = getCookie("uid")
    let app = new AppApi()
    let session_id = await app.getPersonByGoogleId(uid)
    session_id = session_id[0].id
    console.log(session_id)
    var learnProfile = await app.getProfileViaUrl(session_id)
    learnProfile = learnProfile[0]
    console.log(learnProfile.name)
    if(learnProfile.name)
    {
      this.setState({
        name: learnProfile.name.toString(),
        age: learnProfile.age.toString(),
        adress: learnProfile.adress.toString(),
        semester: learnProfile.semester.toString(),
        degree_course: learnProfile.degree_course.toString(),
        person_id: learnProfile.id.toString(),
        loadingInProgress: true, //Für addLearnProfile
      }
      )
    
    }
    else
    {
      this.setState({
        person_id: session_id
      })
    }
  

    //this.handleChange(target)
    this.forceUpdate()
    console.log(this.state)
}


  render() {
    const { classes } = this.props;
    console.log(this.state);

    return (
      <div className={classes.roott}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div>
                <h1>Lege dein Profil an:</h1>
              </div>
              <div>
                <form className={classes.root} onSubmit={this.handleSubmit}>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      name="name"
                      type="string"
                      value = {this.state.name}

                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Alter"
                      variant="outlined"
                      name="age"
                      type="number"
                      value = {this.state.age}

                      //required
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Adresse"
                      variant="outlined"
                      type="string"
                      name="adress"
                      value = {this.state.adress}

                      //required
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Semester"
                      variant="outlined"
                      type="number"
                      name="semester"
                      value = {this.state.semester}

                      //required
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Studiengang"
                      variant="outlined"
                      type="string"
                      name="degree_course"
                      //required
                      value = {this.state.degree_course}
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
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
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

export default withStyles(styles)(CreateProfile);
