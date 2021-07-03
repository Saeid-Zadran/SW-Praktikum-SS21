import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Link as RouterLink } from 'react-router-dom';

import ProfileDropDown from '../dialogs/ProfileDropDown.js';


class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const person = this.props;
    const classes = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
        
          <Toolbar >
            
            <IconButton component={RouterLink} to={`/SecondPage/SendMessage`} edge="start" className={classes.menuButton} aria-label="menu">
                <HomeIcon fontSize="large" />
            </IconButton>
            
            <Typography style={{flexGrow: 1}} variant="h5" className={classes.title}>
              <div>StudyMatch - Hochschule der Medien</div>
                       
            </Typography>
            
            <Button color="inherit"></Button>
            <ProfileDropDown person={person} />

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  menuButton: {
    marginRight: theme.spacing(25),
  },
  title: {
    flexGrow: 1,
  },
})


export default withStyles(styles)(Header);