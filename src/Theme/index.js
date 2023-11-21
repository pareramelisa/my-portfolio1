import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: { main: '#6C3785' },
    secondary: { main: '#E8C533' },
    error: { main: '#CE3434'},
    grey: {
      200: '#eee4f2',
      700: '#eee4f2',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});