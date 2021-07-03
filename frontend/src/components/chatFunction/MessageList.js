import React, { Component } from "react";
import PropTypes from "prop-types";
import {withStyles,Button,TextField,InputAdornment,IconButton,Grid,Typography} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
//import ClearIcon from "@material-ui/icons/Clear";
import { withRouter } from "react-router-dom";
import AppApi from "../../api/AppApi";
import ContextErrorMessage from "../dialogs/ContextErrorMessage";
import LoadingProgress from "../dialogs/LoadingProgress";
import MessageListEntry from "./MessageListEntry";
class MessageList extends Component {
  constructor(props) {
    super(props); 

    let expandedID = null;

        if (this.props.location.expandChatMessage) {
          expandedID = this.props.location.expandChatMessage.getID();
        }

    // Init an empty state
    this.state = {
      chatMessage: [],
      filteredChatMessage: [],
      ChatMessageFilter: '',
      error: null,
      loadingInProgress: false,
      expandedProfileID: expandedID,
      showProfileForm: false,
    };
  }

  getChatMessages = () => {
    AppApi.getApi()
      .getChatMessages()
      .then((chatMessageBOs) =>{
        this.setState({
          chatMessage: chatMessageBOs,
          filteredChatMessage: [...chatMessageBOs],
          loadingInProgress: false,
          error: null,
        }) }

      )
      .catch((e) =>
        this.setState({
          chatMessage: [],
          loadingInProgress: false,
          error: e,
        })
      );

    this.setState({
      loadingInProgress: true,
      error: null,
    });
  };

  componentDidMount() {
    this.getChatMessages();
  }



  filterFieldValueChange = (event) => {
    const value = event.target.value.toLowerCase();
    this.setState({
      filteredgetChatMessage: this.state.chatMessage.filter((chatMessage) => {
        let TextContainsValue = chatMessage.getName().toLowerCase().includes(value);
        let PersonIDContainsValue = chatMessage.getPersonId().toLowerCase().includes(value);

        return (
          TextContainsValue ||
          PersonIDContainsValue
        );
      }),
      chatMessageFilter: value,
    });
  };

  clearFilterFieldButtonClicked = () => {
    this.setState({
      filteredChatMessage: [...this.state.chatMessage],
      chatMessageFilter: "",
    });
  };

  render() {
    const { classes } = this.props;
    const { chatMessage, loadingInProgress, error} = this.state;

    return (
      <div className={classes.root}>
        <Grid
          className={classes.chatMessageFilter}
          container
          spacing={1}
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs />
          <Grid item>
          </Grid>
        </Grid>
        {chatMessage.map((chatMessage) => (
          <MessageListEntry
            key={chatMessage.getID()} 
            chatMessage={chatMessage}
          />
        ))}
        <LoadingProgress show={loadingInProgress} />
        <ContextErrorMessage
          error={error}
          contextErrorMsg={`The list of ChatMessages could not be loaded.`}
          onReload={this.getChatMessage}
        />
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  ChatMessageFilter: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
});

MessageList.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(MessageList));