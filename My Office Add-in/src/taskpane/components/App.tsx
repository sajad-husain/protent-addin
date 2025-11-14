import * as React from "react";
import Oauth from "./Oauth";
import { StartMenu } from "./StartMenu";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '../utils/theme/theme';

const App: React.FC = () => {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* applies the body gradient */}
        <StartMenu />
      </ThemeProvider>
      {/* <StartMenu /> */}
      {/* <Oauth /> */}
    </div>
  );
};

export default App;
