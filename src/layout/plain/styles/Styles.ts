import { makeStyles } from '@material-ui/core';
import { width } from '@material-ui/system';

const useStyles = makeStyles(() => ({
    root: {
      paddingTop: 0,
      height: '100%'
    },
    content: {
      height: '100%',
      width: '100%'
    }
  }));

export { useStyles };