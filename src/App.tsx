import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useGetHealthCheckQuery } from "./services/feelme_api";

function App() {
  const { data, isLoading, isError, error } = useGetHealthCheckQuery({});

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <p>Status: {!isLoading && !isError && data?.message}</p>
      <p>{isError && JSON.stringify(error)}</p>
    </div>
  );
}

export default App;
