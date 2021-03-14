import { createMuiTheme, colors } from '@material-ui/core';
import { Theme as MuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import palette from "../palette";
import overrides from "../overrides";

const white = '#FFFFFF';
const black = '#000000';

export interface Theme extends MuiTheme {
  sidebar: {
    width: number;
    widthCollapsed: number;
    background: string;
    color: string;
  };
  header: {
    background: string;
  };
}

const mainLightheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      contrastText: white,
      dark: colors.indigo[900],
      main: colors.indigo[500],
      light: colors.indigo[100]
    },
    secondary: {
      contrastText: white,
      dark: colors.blue[900],
      main: colors.blue['A400'],
      light: colors.blue['A400']
    },
    success: {
      contrastText: white,
      dark: colors.green[900],
      main: colors.green[600],
      light: colors.green[400]
    },
    info: {
      contrastText: white,
      dark: colors.blue[900],
      main: colors.blue[600],
      light: colors.blue[400]
    },
    warning: {
      contrastText: white,
      dark: colors.orange[900],
      main: colors.orange[600],
      light: colors.orange[400]
    },
    error: {
      contrastText: white,
      dark: colors.red[900],
      main: colors.red[600],
      light: colors.red[400]
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
    background: {
      default: '#F4F6F8',
      paper: white
    },
    divider: colors.grey[200]
  },
  typography: {
    h1:{
      color: palette.text.primary,
      fontWeight: 500,
      fontSize: '35px',
      letterSpacing: '-0.24px',
      lineHeight: '40px'
    },
    h2: {
      color: palette.text.primary,
      fontWeight: 500,
      fontSize: '29px',
      letterSpacing: '-0.24px',
      lineHeight: '32px'
    },
    h3: {
      color: palette.text.primary,
      fontWeight: 500,
      fontSize: '24px',
      letterSpacing: '-0.06px',
      lineHeight: '28px'
    },
    h4: {
      color: palette.text.primary,
      fontWeight: 500,
      fontSize: '20px',
      letterSpacing: '-0.06px',
      lineHeight: '24px'
    },
    h5: {
      color: palette.text.primary,
      fontWeight: 500,
      fontSize: '16px',
      letterSpacing: '-0.05px',
      lineHeight: '20px'
    },
    h6: {
      color: palette.text.primary,
      fontWeight: 500,
      fontSize: '14px',
      letterSpacing: '-0.05px',
      lineHeight: '20px'
    },
    subtitle1: {
      color: palette.text.primary,
      fontSize: '16px',
      letterSpacing: '-0.05px',
      lineHeight: '25px'
    },
    subtitle2: {
      color: palette.text.secondary,
      fontWeight: 400,
      fontSize: '14px',
      letterSpacing: '-0.05px',
      lineHeight: '21px'
    },
    body1: {
      color: palette.text.primary,
      fontSize: '14px',
      letterSpacing: '-0.05px',
      lineHeight: '21px'
    },
    body2: {
      color: palette.text.secondary,
      fontSize: '12px',
      letterSpacing: '-0.04px',
      lineHeight: '18px'
    },
    button: {
      color: palette.text.primary,
      fontSize: '14px'
    },
    caption: {
      color: palette.text.secondary,
      fontSize: '11px',
      letterSpacing: '0.33px',
      lineHeight: '13px'
    },
    overline: {
      color: palette.text.secondary,
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.33px',
      lineHeight: '13px',
      textTransform: 'uppercase'
    }
  },
  overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
});

const baseTheme = createMuiTheme({
  props: {
    MuiPaper: {
      elevation: 0,
    },
    MuiAppBar: {
      elevation: 1,
    },
    MuiButton: {
      // elevation: 0,
    },
    MuiMenu: {
      elevation: 1,
    },
    MuiCard: {
      elevation: 0,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        minWidth: 0,
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
        '&:focus': {
          boxShadow: 'none',
        },
      },
      containedSecondary: {
        color: '#fff',
        '&:hover': {
          backgroundColor: 'rgb(118, 195, 21)',
        },
      },
    },
    MuiButtonGroup: {
      root: {
        boxShadow: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
        '&:focus': {
          boxShadow: 'none',
        },
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 40,
      },
    },
  },
  palette: {
    secondary: {
      main: '#feca57', //indigo[600],
    },
    primary: {
      main: blue[600], //'#619f30',
    },
    info: {
      main: '#ff6b6b',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.8rem',
    },
    h3: {
      fontSize: '1.6rem',
    },
    h4: {
      fontSize: '1.4rem',
    },
    h5: {
      fontSize: '1.2rem',
    },
    h6: {
      fontSize: '1rem',
    },
  },
});

const adminTheme = {
  header: {
    background: '#fff',
  },
  sidebar: {
    width: 230,
    widthCollapsed: baseTheme.spacing(7.2),
    background: '#2e86de',
    color: '#fff',
  },
};

const lightTheme = {
  ...mainLightheme,
  ...baseTheme,
  ...adminTheme,
};

export { lightTheme };