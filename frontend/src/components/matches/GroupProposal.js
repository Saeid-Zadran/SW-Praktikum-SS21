import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import AppApi from '../../api/AppApi';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
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
  proposals: {
    margin: theme.spacing(1),
  },
});

class GroupProposal extends Component {
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

    return (
      <Card className={classes.proposals} m="2rem" pt={3}>
        <List >
          <ListItem selected={this.state.selected}>
            <ListItemAvatar small>
              <Avatar
                className={classes.sizeAvatar}
                alt=""
                src={`https://eu.ui-avatars.com/api/?background=random&color=fff&name=${title}`}
              />
            </ListItemAvatar>
            <ListItemText primary={title} />
          </ListItem>
          <ListItem>
            <Button variant="outlined">Gruppe beitreten</Button>
          </ListItem>
        </List>
      </Card>
    );
  }
}

export default withStyles(styles)(GroupProposal);
