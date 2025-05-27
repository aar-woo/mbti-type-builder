import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    energy: Palette["primary"];
    information: Palette["primary"];
    decision: Palette["primary"];
    orientation: Palette["primary"];
    darkGrey: Palette["primary"];
  }
  interface PaletteOptions {
    energy?: PaletteOptions["primary"];
    information?: PaletteOptions["primary"];
    decision?: PaletteOptions["primary"];
    orientation?: PaletteOptions["primary"];
    darkGrey?: PaletteOptions["primary"];
  }
}

const letterTheme = createTheme({
  palette: {
    energy: {
      main: "#D94745",
      light: "#EA9B99",
      contrastText: "#fff",
    },
    information: {
      main: "#F9DD4D",
      light: "#FCEFB0",

      contrastText: "#000",
    },
    decision: {
      main: "#06B178",
      light: "#4EF9C0",
      contrastText: "#fff",
    },
    orientation: {
      main: "#0099E0",
      light: "#70D2FF",
      contrastText: "#fff",
    },
    darkGrey: {
      main: "#5E5C6C",
      contrastText: "#fff",
    },
  },
});

export { letterTheme };
