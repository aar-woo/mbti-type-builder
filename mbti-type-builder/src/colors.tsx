import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    red: Palette["primary"];
    yellow: Palette["primary"];
    green: Palette["primary"];
    blue: Palette["primary"];
  }
  interface PaletteOptions {
    red?: PaletteOptions["primary"];
    yellow?: PaletteOptions["primary"];
    green?: PaletteOptions["primary"];
    blue?: PaletteOptions["primary"];
  }
}

const letterTheme = createTheme({
  palette: {
    red: {
      main: "#D94745",
      contrastText: "#fff",
    },
    yellow: {
      main: "#0099E0",
      contrastText: "#000",
    },
    green: {
      main: "#F9DD4D",
      contrastText: "#fff",
    },
    blue: {
      main: "#06B178",
      contrastText: "#fff",
    },
  },
});

export { letterTheme };
