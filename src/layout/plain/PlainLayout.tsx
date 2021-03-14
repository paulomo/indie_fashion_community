import React from 'react';
import { useStyles } from './styles/Styles';

interface OwnProps {
  Component: React.FC;
}

const PlainLayout: React.FC<OwnProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <main className={classes.content}>{props.children}</main>
    </div>
  );
};

export default PlainLayout as React.ComponentType<OwnProps>;
