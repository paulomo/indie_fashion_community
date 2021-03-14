import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import { Theme } from "../../../../theme/light";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="left">
        
      </Typography>
      <Typography variant="body2" color="textSecondary" align="right">
        {'Built with '}
        {' by '}
        <Link color="primary" href="#">
          ClothME
        </Link>
      </Typography>
    </footer>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    display: 'flex',
    background: '#fff',
    padding: '0.5rem 1rem',
    justifyContent: 'space-between',
  },
}));

export { Footer };
