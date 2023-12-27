import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import {SpeedInsights} from "@vercel/speed-insights/next";

function App() {
  return (
    <div>
      <Main />
      <SpeedInsights />
    </div>
  );
}

export default App;
