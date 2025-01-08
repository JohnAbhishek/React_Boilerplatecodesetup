import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f6f7fb",
      contrastText: "#fff",
    },
    tertiary: {
      main: "#ecedf5",
      contrastText:"#f6f7fb",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
      contrastText: "#000",
    },
    secondary: {
      main: "#4A4A4A",
      contrastText: "#4A4A4A",
    },
    tertiary: {
      main: "#000",
      contrastText:"#000"
    },
  },
});

export { lightTheme, darkTheme };
