import * as React from "react";
import Oauth from "./Oauth";
import { StartMenu } from "./Home";

const App: React.FC = () => {

  return (
    <div>
      <StartMenu />
      <Oauth />
    </div>
  );
};

export default App;
