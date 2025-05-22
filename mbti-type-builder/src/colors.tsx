import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    red: Palette["primary"];
    yellow: Palette["primary"];
    green: Palette["primary"];
    blue: Palette["primary"];
    darkGrey: Palette["primary"];
  }
  interface PaletteOptions {
    red?: PaletteOptions["primary"];
    yellow?: PaletteOptions["primary"];
    green?: PaletteOptions["primary"];
    blue?: PaletteOptions["primary"];
    darkGrey?: PaletteOptions["primary"];
  }
}

const letterTheme = createTheme({
  palette: {
    red: {
      main: "#D94745",
      light: "#EA9B99",
      contrastText: "#fff",
    },
    yellow: {
      main: "#F9DD4D",
      light: "#FCEFB0",

      contrastText: "#000",
    },
    green: {
      main: "#06B178",
      light: "#4EF9C0",
      contrastText: "#fff",
    },
    blue: {
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
