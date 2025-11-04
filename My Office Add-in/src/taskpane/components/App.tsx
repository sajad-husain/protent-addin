import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#f50057" },
  },
});





const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      App
    </ThemeProvider>
  );
};

export default App;
