import React, { Component } from "react";
import PropTypes from "prop-types";
import {withStyles,Button,TextField,InputAdornment,IconButton,Grid,Typography} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
//import ClearIcon from "@material-ui/icons/Clear";
import { withRouter } from "react-router-dom";
import AppApi from "../api/AppApi";
import ContextErrorMessage from "./dialogs/ContextErrorMessage";
import LoadingProgress from "./dialogs/LoadingProgress";
import LearnGroupListEntry from "./LearnGroupListEntry";

class LearnGroupList extends Component {
  constructor(props) {
    super(props); 

    let expandedID = null;

        if (this.props.location.expandProfile) {
          expandedID = this.props.location.expandProfile.getID();
        }

    // Init an empty state
    this.state = {
      profile: [],
      filteredProfile: [],
      ProfileFilter: '',
      error: null,
      loadingInProgress: false,
      expandedProfileID: expandedID,
      showProfileForm: false,
    };
  }

  getProfiles = () => {
    AppApi.getApi()
      .getProfiles()
      .then((profileBOs) =>{
        this.setState({
          profile: profileBOs,
          filteredProfile: [...profileBOs],
          loadingInProgress: false,
          error: null,
        }) }

      )
      .catch((e) =>
        this.setState({
          profile: [],
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
    this.getProfiles();
  }



  filterFieldValueChange = (event) => {
    const value = event.target.value.toLowerCase();
    this.setState({
      filteredProfile: this.state.profile.filter((profile) => {
        let AgeContainsValue = profile.getAge().toLowerCase().includes(value);
        let AdressContainsValue = profile
          .getAdress()
          .toLowerCase()
          .includes(value);
        let SemesterContainsValue = profile
          .getSemester()
          .toLowerCase()
          .includes(value);
        let DegreeCourseContainsValue = profile
          .getDegreeCourse()
          .toLowerCase()
          .includes(value);
        let PreferencesContainsValue = profile
          .getPreferences()
          .toLowerCase()
          .includes(value);
        let PersonIdContainsValue = profile
          .getPersonId()
          .toLowerCase()
          .includes(value);

        return (
          AgeContainsValue ||
          AdressContainsValue ||
          SemesterContainsValue ||
          DegreeCourseContainsValue ||
          PreferencesContainsValue ||
          PersonIdContainsValue
        );
      }),
      profileFilter: value,
    });
  };

  clearFilterFieldButtonClicked = () => {
    this.setState({
      filterProfile: [...this.state.profile],
      profileFilter: "",
    });
  };

  render() {
    const { classes } = this.props;
    const { profile, loadingInProgress, error} = this.state;

    return (
      <div className={classes.root}>
        <Grid
          className={classes.profileFilter}
          container
          spacing={1}
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs />
          <Grid item>
          </Grid>
        </Grid>
        {profile.map((profile) => (
          <ProfileListEntry
            key={profile.getID()} 
            profile={profile}
          />
        ))}
        <LoadingProgress show={loadingInProgress} />
        <ContextErrorMessage
          error={error}
          contextErrorMsg={`The list of profile could not be loaded.`}
          onReload={this.getProfile}
        />
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  profileFilter: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
});

ProfileList.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(LearnGroupList));