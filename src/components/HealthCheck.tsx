import React from "react";
import { useGetHealthCheckQuery } from "../services/feelme_api";

export const HealthCheck = () => {
  const { data, isLoading, isError, error, endpointName } =
    useGetHealthCheckQuery({});
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <p>
        Status: {!isLoading && !isError ? data?.message : JSON.stringify(error)}
      </p>
      <p>
        {String(isError)}
        {isLoading}
      </p>
      <p>
        {import.meta.env.VITE_BASE_URL}/{endpointName}
      </p>
    </div>
  );
};