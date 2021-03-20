import { extend } from '../utils';
import base from '../base/Base';

export default extend(base, {
  backgroundPrimary: '#444444',
  backgroundSecondary: '#7b7b7b',
  textPrimary: '#fff',
}); 

// import { createMuiTheme, colors } from '@material-ui/core';
// import palette from "../palette";
// import overrides from "../overrides";

// const white = '#FFFFFF';
// const black = '#000000';

// export const darkTheme = createMuiTheme({
//   palette: {
//     type: 'light',
//     primary: {
//       contrastText: white,
//       dark: colors.indigo[900],
//       main: colors.indigo[500],
//       light: colors.indigo[100]
//     },
//     secondary: {
//       contrastText: white,
//       dark: colors.blue[900],
//       main: colors.blue['A400'],
//       light: colors.blue['A400']
//     },
//     success: {
//       contrastText: white,
//       dark: colors.green[900],
//       main: colors.green[600],
//       light: colors.green[400]
//     },
//     info: {
//       contrastText: white,
//       dark: colors.blue[900],
//       main: colors.blue[600],
//       light: colors.blue[400]
//     },
//     warning: {
//       contrastText: white,
//       dark: colors.orange[900],
//       main: colors.orange[600],
//       light: colors.orange[400]
//     },
//     error: {
//       contrastText: white,
//       dark: colors.red[900],
//       main: colors.red[600],
//       light: colors.red[400]
//     },
//     text: {
//       primary: colors.blueGrey[900],
//       secondary: colors.blueGrey[600],
//     },
//     background: {
//       default: '#F4F6F8',
//       paper: white
//     },
//     divider: colors.grey[200]
//   },
//   typography: {
//     h1:{
//       color: palette.text.primary,
//       fontWeight: 500,
//       fontSize: '35px',
//       letterSpacing: '-0.24px',
//       lineHeight: '40px'
//     },
//     h2: {
//       color: palette.text.primary,
//       fontWeight: 500,
//       fontSize: '29px',
//       letterSpacing: '-0.24px',
//       lineHeight: '32px'
//     },
//     h3: {
//       color: palette.text.primary,
//       fontWeight: 500,
//       fontSize: '24px',
//       letterSpacing: '-0.06px',
//       lineHeight: '28px'
//     },
//     h4: {
//       color: palette.text.primary,
//       fontWeight: 500,
//       fontSize: '20px',
//       letterSpacing: '-0.06px',
//       lineHeight: '24px'
//     },
//     h5: {
//       color: palette.text.primary,
//       fontWeight: 500,
//       fontSize: '16px',
//       letterSpacing: '-0.05px',
//       lineHeight: '20px'
//     },
//     h6: {
//       color: palette.text.primary,
//       fontWeight: 500,
//       fontSize: '14px',
//       letterSpacing: '-0.05px',
//       lineHeight: '20px'
//     },
//     subtitle1: {
//       color: palette.text.primary,
//       fontSize: '16px',
//       letterSpacing: '-0.05px',
//       lineHeight: '25px'
//     },
//     subtitle2: {
//       color: palette.text.secondary,
//       fontWeight: 400,
//       fontSize: '14px',
//       letterSpacing: '-0.05px',
//       lineHeight: '21px'
//     },
//     body1: {
//       color: palette.text.primary,
//       fontSize: '14px',
//       letterSpacing: '-0.05px',
//       lineHeight: '21px'
//     },
//     body2: {
//       color: palette.text.secondary,
//       fontSize: '12px',
//       letterSpacing: '-0.04px',
//       lineHeight: '18px'
//     },
//     button: {
//       color: palette.text.primary,
//       fontSize: '14px'
//     },
//     caption: {
//       color: palette.text.secondary,
//       fontSize: '11px',
//       letterSpacing: '0.33px',
//       lineHeight: '13px'
//     },
//     overline: {
//       color: palette.text.secondary,
//       fontSize: '11px',
//       fontWeight: 500,
//       letterSpacing: '0.33px',
//       lineHeight: '13px',
//       textTransform: 'uppercase'
//     }
//   },
//   overrides,
//   zIndex: {
//     appBar: 1200,
//     drawer: 1100
//   }
// });
