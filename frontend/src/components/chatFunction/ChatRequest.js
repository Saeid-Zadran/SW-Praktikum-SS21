import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/styles';
import AppApi from '../../api/AppApi';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckIcon from '@material-ui/icons/Check';
import ClearOutlined from '@material-ui/icons/ClearOutlined';

import IconButton from '@material-ui/core/IconButton';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  sizeAvatar: {
    height: theme.spacing(4),
    width: theme.spacing(4),
  },
  removeButton: {
    height: theme.spacing(2),
    width: theme.spacing(2),
  },
  insetListItemText: {
    padding: theme.spacing(2),
  },
});

class ChatRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      learngroups: null,
      selected: false,
      anchorEl: '',
      open: false,
    };
  }

  async componentDidMount() {
    let learnGroup = await AppApi.getApi().getLearnGroupById(
      this.props.learngroup_id
    );
    let personProfile = await AppApi.getApi().getProfileViaUrl(
      this.props.person_id
    );
    console.log(personProfile);
    this.setState({
      groupName: learnGroup[0].name,
      profileName: 'Anfefragt durch: ' + personProfile[0].name,
    });
  }

  localStorageUpdated() {}
  someEventHandler = (e) => {
    console.log('right clicked');
    e.preventDefault();
    this.setState({
      anchorEl: e.currentTarget,
    });
  };
  render() {
    const { classes } = this.props;
    const { title, subtitle,  loadFreshPage} = this.props;
    const handleClick = async () => {
      this.setState({ open: !this.state.open });
    };
    const join = async () => {
      await AppApi.getApi().updateGroupRequest(1, this.props.id);
      this.props.loadFreshPage()

    };
    const reject = async () => {
      // TODO delete the groupRequest
      // TODO delete the LearnGroup
      console.log("delete")
      this.props.loadFreshPage()

    };

    return (
      <List className={classes.root}>
        <ListItem
          button
          selected={this.state.selected}
          onClick={handleClick}
          alignItems="flex-start"
          onContextMenu={this.someEvenetHandler}
        >
          {this.state.open ? <ExpandLess size="small" /> : <ExpandMore />}

          <ListItemText
            secondary={this.state.groupName}
            dense
            className={classes.insetListItemText}
            size="small"
          />
          <ListItemSecondaryAction>

            <IconButton     style={{
        color: "#21b6ae"}} onClick={join} color="green" variant="">
              <CheckIcon />
            </IconButton>

            <IconButton     style={{
        color: "#ef5350"}} onClick={reject} color="green" variant="">
              <ClearOutlined />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>

        <Divider variant="inset" component="li" />
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary={this.state.profileName} />
            </ListItem>
          </List>
        </Collapse>
      </List>
    );
  }
}

export default withStyles(styles)(ChatRequest);
