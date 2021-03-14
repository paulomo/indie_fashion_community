import React from 'react';
import clsx from 'clsx';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Theme } from '../../../../theme/light';
import IconMenu from '@material-ui/icons/Menu';
import { HeaderNotifications } from './HeaderNotifications';
import HeaderProfile from './HeaderProfile';

interface HeaderProps {
  onToggle?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Header = ({ onToggle }: HeaderProps) => {
  const classes = useStyles();

  return (
    <AppBar position="absolute" className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="Toggle sidebar"
          onClick={onToggle}
          className={clsx(classes.menuButton)}
        >
          <IconMenu style={{ color: '#232A55' }} />
        </IconButton>
        <div className={classes.actions}>
          <HeaderNotifications />
          <HeaderProfile />
        </div>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    background: '#fff',
    color: '#242A55',
    boxShadow: '20px 0px 20px grey',
  },
  toolbar: {},
  menuButton: {
    // marginLeft: theme.sidebar.width
  },
  actions: {
    marginLeft: 'auto',
    alignItems: 'center',
    display: 'flex',
  },
  notificationsButton: {
    marginRight: 23,
  },
  title: {
    flexGrow: 1,
  },
}));

export { Header };
