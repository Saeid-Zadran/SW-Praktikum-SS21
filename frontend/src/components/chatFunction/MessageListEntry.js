import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@material-ui/core";
import { Button, ButtonGroup } from "@material-ui/core";

class MessageListEntry extends Component {
  constructor(props) {
    super(props);

    // Init the state
    this.state = {
      chatMessage: props.chatMessage,
    };
  }

  render() {
    const { classes } = this.props;
    const { chatMessage } = this.state;

    return (
      <div>
        <Grid container spacing={3} justify="flex-end" alignItems="felx-end">
          <Grid item xs={6} sm={3}>
            <Typography variant="body1" className={classes.heading}>
              {chatMessage.getPersonId()}
              <br></br>
              {chatMessage.getText()}
              <br></br>
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    width: "100%",
  },
});

MessageListEntry.propTypes = {
  classes: PropTypes.object.isRequired,
  chatMessage: PropTypes.object.isRequired,
};

export default withStyles(styles)(MessageListEntry);
