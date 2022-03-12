import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    common: {
      black: "#28293E",
      white: "#EF6D58",
    },
    primary: {
      light: "#535364",
      main: "#28293E",
      dark: "#B550F8",
      contrastText: "#fff",
    },
    secondary: {
      light: "#f28a79",
      main: "#EF6D58",
      dark: "#a74c3d",
      contrastText: "#fff",
    },
    accent: {
      main: "#B550F8",
    },
    background: {
      default: "#28293E",
    },
    text: {
      primary: "#ffff",
      secondary: "#535364",
      disabled: "#ff3d00",
    },
  },
});

export default darkTheme;
