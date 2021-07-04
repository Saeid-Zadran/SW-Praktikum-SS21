import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import SendIcon from '@material-ui/icons/Send';
import AppApi from '../../api/AppApi';
import { TextField, Button, Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ChatBO from '../../api/ChatBO';
import ChatBox from './Chat';

class SendMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      learngroup_id: '',
      is_accepted: '',
      sender: '',
      message: '',
      order: '',
      chat: null, //für addLearnGroup
      loadingInProgress: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  /** Create Chat*/
  addChat(learngroup_id, is_accepted, sender, message, order) {
    var chat = new ChatBO();
    chat.setLearnGroupId(learngroup_id);
    chat.setIsAccepted(is_accepted);
    chat.setSender(sender);
    chat.setMessage(message);
    chat.setOrder(order);

    

    var api = AppApi.getApi();
    // 
    api.addChat(chat).then((chat) => {
      // 
      this.setState({
        chat: chat,
      });
    });
    
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    // 
  }

  render() {
    const { classes } = this.props;
    

    return (
      
<section class="hero is-fullheight">
<ChatBox></ChatBox>
</section>
    );
  }
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

export default withStyles(styles)(SendMessage);
