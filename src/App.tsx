import React from "react";
import { useGetHealthCheckQuery } from "./services/feelme_api";
import SideBar from "./components/side-bar/SideBar";

function App() {
  const { data, isLoading, isError, error, endpointName } =
    useGetHealthCheckQuery({});

  return (
    <React.Fragment>
      <SideBar />
    </React.Fragment>
  );
}

export default App;
