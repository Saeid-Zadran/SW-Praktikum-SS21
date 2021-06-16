import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import SendIcon from '@material-ui/icons/Send';
import AppApi from "../../api/AppApi";
import { TextField, Button, Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import ChatMessageBO from "../../api/ChatMessageBO";

class SendMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      person_id: "",
      chat_id: "",
      chatmessage: null, //für addLearnGroup
      loadingInProgress: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  /** Create ChatMessage*/
  addChatMessage(text, person_id, chat_id) {

    var chatmessage = new ChatMessageBO
    chatmessage.setText(text)
    chatmessage.setPersonId(person_id)
    chatmessage.setChatId(chat_id)


    


    var api = AppApi.getApi();
    // console.log(api)
    api
      .addChatMessage(chatmessage)
      .then((chatmessage) => {
        // console.log(person)
        this.setState({
          chatmessage: chatmessage,
        });
      });
    console.log(this.state.chatmessage);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    // console.log({ [e.target.name]: e.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault(); //r: verhindert ein neuladen der seite bei unberechtigten aufruf der funktion
    this.addChatMessage(
      this.state.text,
      this.state.person_id,
      this.state.chat_id,

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
                <form className={classes.root} onSubmit={this.handleSubmit}>
                  
                    <TextField
                      id="outlined-basic"
                      label="schreiben..."
                      variant="outlined"
                      name="text"
                      //required
                      onChange={this.handleChange}
                    />
                
                    <TextField
                      id="outlined-basic"
                      label="Chat ID"
                      variant="outlined"
                      name="chat_id"
                      type="number"
                      //required
                      onChange={this.handleChange}
                    />
              
                    <TextField
                      id="outlined-basic"
                      label="Person ID"
                      variant="outlined"
                      type="number"
                      name="person_id"
                      //required
                      onChange={this.handleChange}
                    />
                
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SendIcon />}
                  >
                    Senden
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

export default withStyles(styles)(SendMessage);