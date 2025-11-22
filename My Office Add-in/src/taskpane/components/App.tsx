import * as React from "react";
import Oauth from "./Oauth";
import { StartMenu } from "./StartMenu";
import InsertTags from "./InsertTags";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '../utils/theme/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App: React.FC = () => {

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline /> {/* applies the body gradient */}
          <StartMenu />
          <Routes>
            <Route path="/" element={<StartMenu />} />
            <Route path="/home" element={<InsertTags />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
      {/* <StartMenu /> */}
      {/* <Oauth /> */}
    </div>
  );
};

export default App;
