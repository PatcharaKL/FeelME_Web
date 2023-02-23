import React from "react";
import FeelMe from "./pages/FeelMe";
import { LoginPage } from "./pages/Login";
import { useAppSelector } from "./app/hooks";

function App() {
  const auth = useAppSelector((state) => state.auth.authenticated);
  const Display = () => {
    if (auth) {
      return <FeelMe />;
    } else {
      return <LoginPage />;
    }
  };
  return (
    <React.Fragment>
      <Display />
    </React.Fragment>
  );
}

export default App;
