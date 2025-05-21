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
      main: "#A92523",
      contrastText: "#fff",
    },
    yellow: {
      main: "#F0C808",
      contrastText: "#000",
    },
    green: {
      main: "#04724D",
      contrastText: "#fff",
    },
    blue: {
      main: "#006494",
      contrastText: "#fff",
    },
  },
});

export { letterTheme };
