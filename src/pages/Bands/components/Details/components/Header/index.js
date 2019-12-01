import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { ArrowBackIos } from '@material-ui/icons';

const Header = ({ toggleDetails }) => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton color="inherit" onClick={toggleDetails} aria-label="close">
          <ArrowBackIos />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
