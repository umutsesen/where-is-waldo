import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerHeader: {
    display: 'flex',
    //alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

export default function Appbar(props) {
  const classes = useStyles();

  return (
        <React.Fragment>
          <AppBar position="fixed" className={classes.drawerHeader}>
            <Toolbar >{props.children}</Toolbar>
          </AppBar>
          <Toolbar />
        </React.Fragment>

  );
}