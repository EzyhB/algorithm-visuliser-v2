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
      dark: "#1c1c2b",
      contrastText: "#fff",
    },
    secondary: {
      light: "#f28a79",
      main: "#EF6D58",
      dark: "#a74c3d",
      contrastText: "#fff",
    },
    background: {
      default: "#28293E",
    },
    text: {
      primary: "#ffff",
      secondary: "#28293E",
      disabled: "#ff3d00",
    },
  },
});

export default darkTheme;
