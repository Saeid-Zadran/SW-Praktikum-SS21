import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import AppApi from "../api/AppApi";
import ContextErrorMessage from "./dialogs/ContextErrorMessage";
import LoadingProgress from "./dialogs/LoadingProgress";
import ProfileDetails from "../components/ProfileDetails";

class AllProfileList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: [],
      loadingInProgress: false,
      loadingError: null,
    };
  }

  componentDidMount() {
    this.loadProfiles();
  }

  loadProfiles = () => {
    AppApi.getApi()
      .getProfiles()
      .then((profiles) =>
        this.setState({
          profiles: profiles,
          loadingInProgress: false,
          loadingError: null,
        })
      )
      .catch((e) =>
        this.setState({
          loadingInProgress: false,
          loadingError: e,
        })
      );

    // set loading to true
    this.setState({
      loadingInProgress: true,
      loadingError: null,
    });
  };

  /** Renders the component */
  render() {
    const { classes } = this.props;
    const { profiles, loadingInProgress, loadingError } = this.state;

    return (
      <div className={classes.root}>
        {profiles.map((profile) => (
          <ProfileDetails
            key={profile.getID()}
            profileID={profile.getName().toString()}
            profileID={profile.getID().toString()}
          />
        ))}
        <LoadingProgress show={loadingInProgress} />
        <ContextErrorMessage
          error={loadingError}
          contextErrorMsg={`The list of all profiles of the project management system could not be loaded.`}
          onReload={this.loadProfiles}
        />
      </div>
    );
  }
}

/** Component specific styles */
const styles = (theme) => ({
  root: {
    width: "100%",
  },
});

/** PropTypes */
AllProfileList.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AllProfileList);
