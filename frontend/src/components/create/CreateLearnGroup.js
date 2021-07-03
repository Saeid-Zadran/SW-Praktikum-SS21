import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import AppApi from '../../api/AppApi';
import { TextField, Button, Grid, CardContent, Form } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import LearnGroupBO from '../../api/LearnGroupBO';
import CardActions from '@material-ui/core/CardActions';

class CreateLearnGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      person_id: '',
      learnGroup: null, //für addLearnGroup
      loadingInProgress: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    let uid = getCookie('uid');
    let app = new AppApi();
    let session_id = await app.getPersonByGoogleId(uid);
    session_id = session_id[0].id;
    this.state.person_id = session_id;
  }

  /** Create LearnGroupProfile*/
  async addLearnGroup(name, person_id) {
    var learnGroup = new LearnGroupBO();
    learnGroup.setName(name);
    learnGroup.setPersonId(person_id);

    var api = AppApi.getApi();
    // 
    let learnGroups = await api.addLearnGroup(learnGroup);
    

    this.props.getNewChatWindow(learnGroups);
    
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    
  }

  handleClick = (event) => {
    if(this.state.name )
    {    event.preventDefault(); //r: verhindert ein neuladen der seite bei unberechtigten aufruf der funktion
      this.addLearnGroup(this.state.name, this.state.person_id);
      this.setState({
        name: '',
      });}
  };

  keyPress = (e) => {
    if(e.keyCode === 13){
      e.preventDefault();
       this.handleClick(e)
       // put the login here
    }
 }

  render() {
    const { classes } = this.props;
    

    return (
      <Card elevation={0}  className={classes.paper}>
        <CardContent>
          <div>
          </div>
          <form>
          <TextField
            label="Wie soll die Lerngruppe heißen?"
            variant="outlined"
            name="name"
            size="small"
            value={this.state.name}
            onChange={this.handleChange}
            onKeyDown={this.keyPress}
            fullWidth={true} // this may override your custom with
            //required
          />
          </form>
        </CardContent>

        <CardActions>
          <Button
            type="submit"
            variant="text"
            color="default"
            size="small"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={this.handleClick}
          >
            Bestätigen
          </Button>
        </CardActions>
      </Card>
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
    '& > *': {
      margin: theme.spacing(1),
      width: '30ch',
    },
    roott: {
      flexGrow: 1,
    },
    button: {
      margin: theme.spacing(1),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  },
});

export default withStyles(styles)(CreateLearnGroup);
