import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import AppApi from '../../api/AppApi';
import ContextErrorMessage from './ContextErrorMessage';
import LoadingProgress from './LoadingProgress';

/**
 * Shows a modal delete/cancle dialog, which asks for deleting a customer. The CustomerBO to be deleted must be given in prop customer.
 * In dependency of the user interaction (delete/cancel) the respective backendcall is made. After that, the function of the onClose prop
 * is called with the deleted CustomerBO object as parameter. When the dialog is canceled, onClose is called with null.
 */
class ProfileDeleteDialog extends Component {

  constructor(props) {
    super(props);

    // Init the state
    this.state = {
      deletingInProgress: false,
      deletingError: null
    };
  }

  /** Delete the Profile */
  deleteProfile = () => {
    AppApi.getApi().deleteProfile(this.props.profile.getID()).then(profile => {
      this.setState({
        deletingInProgress: false,              // disable loading indicator
        deletingError: null                     // no error message
      });
      this.props.onClose(this.props.profile);  // call the parent with the deleted customer
    }).catch(e =>
      this.setState({
        deletingInProgress: false,              // disable loading indicator
        deletingError: e                        // show error message
      })
    );

    // set loading to true
    this.setState({
      deletingInProgress: true,                 // show loading indicator
      deletingError: null                       // disable error message
    });
  }

  /** Handles the close / cancel button click event */
  handleClose = () => {
    // 
    this.props.onClose(null);
  }

  /** Renders the component */
  render() {
    const { classes, profile, show } = this.props;
    const { deletingInProgress, deletingError } = this.state;

    return (
      show ?
        <Dialog open={show} onClose={this.handleClose}>
          <DialogTitle id='delete-dialog-title'>Delete profile
            <IconButton className={classes.closeButton} onClick={this.handleClose}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you Really want to delete  {profile.getName()} <br></br> ID: {profile.getPersonId()} ?
            </DialogContentText>
            <LoadingProgress show={deletingInProgress} />
            <ContextErrorMessage error={deletingError} contextErrorMsg={`The profile '${profile.getName()} ID:${profile.getPersonId()} '  could not be deleted.`}
              onReload={this.deleteProfile} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color='secondary'>
              Cancel
            </Button>
            <Button variant='contained' onClick={this.deleteProfile} color='primary'>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
        : null
    );
  }
}

/** Component specific styles */
const styles = theme => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  }
});

/** PropTypes */
ProfileDeleteDialog.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** The CustomerBO to be deleted */
  profile: PropTypes.object.isRequired,
  /** If true, the dialog is rendered */
  show: PropTypes.bool.isRequired,
  /**
   * Handler function which is called, when the dialog is closed.
   * Sends the deleted CustomerBO as parameter or null, if cancel was pressed.
   *
   * Signature: onClose(CustomerBO customer);
   */
  onClose: PropTypes.func.isRequired,
}

export default withStyles(styles)(ProfileDeleteDialog);
