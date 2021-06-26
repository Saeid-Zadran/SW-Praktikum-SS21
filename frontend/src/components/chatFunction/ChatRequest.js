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
const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
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
    };
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
    const { title, subtitle } = this.props;
    const handleClick = async () => {
      let fetchedChatAdvanced = await AppApi.getApi().getChatsByLearnGroupId(
        this.props.id
      );
      this.props.getChatWindow(fetchedChatAdvanced, this.props.id);
    };

    const handleClose = () => {
      this.setState({
        anchorEl: null,
      });
    };

    return (
      <List className={classes.root}>
        <ListItem
          selected={this.state.selected}
          onClick={handleClick}
          alignItems="flex-start"
          onContextMenu={this.someEvenetHandler}
        >
          <ListItemAvatar size="small">
            <Avatar
              className={classes.sizeAvatar}
              alt=""
              src={`https://eu.ui-avatars.com/api/?name=${title}`}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={title}
            dense
            className={classes.insetListItemText}
            size="small"
            variant="outlined"
          />
          <ListItemSecondaryAction>
            <Button size="small" variant="outlined">
              Join
            </Button>
          </ListItemSecondaryAction>
        </ListItem>

        <Divider variant="inset" component="li" />
      </List>
    );
  }
}

export default withStyles(styles)(ChatRequest);
