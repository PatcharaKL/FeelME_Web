import React from "react";
import { useGetHealthCheckQuery } from "./services/feelme_api";
import SideBar from "./components/side-bar/SideBar";
import FeelMe from "./pages/FeelMe";

function App() {
  return (
    <React.Fragment>
      <FeelMe />
    </React.Fragment>
  );
}

export default App;
