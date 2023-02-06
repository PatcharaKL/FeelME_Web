import React from "react";
import "./App.css";
import { HealthCheck } from "./components/HealthCheck";
import { useGetHealthCheckQuery } from "./services/feelme_api";

function App() {
  const { data, isLoading, isError, error, endpointName } =
    useGetHealthCheckQuery({});

  return (
    <React.Fragment>
      <HealthCheck />
    </React.Fragment>
  );
}

export default App;
