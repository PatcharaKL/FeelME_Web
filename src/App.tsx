import "./App.css";
import { useGetHealthCheckQuery } from "./services/feelme_api";

function App() {
  const { data, isLoading, isError, error, status, endpointName } =
    useGetHealthCheckQuery({});

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <p>Status: {!isLoading && !isError && data?.message}</p>
      <p>{isError && JSON.stringify(error)}</p>
      <p>{status}</p>
      <p>
        {import.meta.env.VITE_BASE_URL}/{endpointName}
      </p>
    </div>
  );
}

export default App;
