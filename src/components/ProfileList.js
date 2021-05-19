import React, { Component } from "react";
import PropTypes from "prop-types";
import {withStyles,Button,TextField,InputAdornment,IconButton,Grid,Typography} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import { withRouter } from "react-router-dom";
import AppApi from "../api/AppApi";
import ContextErrorMessage from "./dialogs/ContextErrorMessage";
import LoadingProgress from "./dialogs/LoadingProgress";
import ProfileForm from "./dialogs/ProfileForm";
import ProfileListEntry from "./ProfileListEntry";

class ProfileList extends Component {
  constructor(props) {
    super(props);

    // Init an empty state
    this.state = {
      profile: [],
      error: null,
      loadingInProgress: false,
      showProfileForm: false,
    };
  }

  getProfile = () => {
    AppApi.getAPI()
      .getProfiles()
      .then((profileBOs) =>{ console.log(profileBOs)
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
    this.getProfile();
  }

  profileDeleted = (profile) => {
    const newProfileList = this.state.profile.filter(
      (profileFromState) => profileFromState.getID() !== profile.getID()
    );
    this.setState({
      profile: newProfileList,
      filteredProfiles: [...newProfileList],
      showProfileForm: false,
    });
  };

  addProfileButtonClicked = (event) => {
    event.stopPropagation();
    this.setState({
      showProfileForm: true,
    });
  };

  profileFormClosed = (profile) => {
    if (profile) {
      const newProfileList = [...this.state.profile, profile];
      this.setState({
        profile: newProfileList,
        filteredProfile: [...newProfileList],
        showProfileForm: false,
      });
    } else {
      this.setState({
        showProfileForm: false,
      });
    }
  };

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
    const { profile, loadingInProgress, error, showProfileForm } = this.state;

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
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={this.addProfileButtonClicked}
            >
              Add Profile
            </Button>
          </Grid>
        </Grid>
        {profile.map((profile) => (
          <ProfileListEntry
            key={profile.getID()}
            profile={profile}
            onProfileDeleted={this.profileDeleted}
          />
        ))}
        <LoadingProgress show={loadingInProgress} />
        <ContextErrorMessage
          error={error}
          contextErrorMsg={`The list of profile could not be loaded.`}
          onReload={this.getProfile}
        />
        <ProfileForm show={showProfileForm} onClose={this.profileFormClosed} />
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

export default withRouter(withStyles(styles)(ProfileList));
