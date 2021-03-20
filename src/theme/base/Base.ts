import { Theme } from "@material-ui/core";
import { lightTheme } from "../light";
// import { darkTheme } from "../dark";

export function themeCreator(theme: string): Theme {
  return themeMap[theme];
}

const themeMap: { [key: string]: Theme } = {
  lightTheme,
  // darkTheme
};

export default {
  primary: '#61DAFB',
  secondary: '#254E70',
  negative: '#e45b78',
  positive: '#A3D9B1',
  textPrimary: '#333',
  textWhite: '#fff',
  backgroundPrimary: '#4a4e69',
  backgroundSecondary: '#5c6078',
};