import React from "react";
import "./App.css";
import Dashboard from "./views/Dashboard";
import { useSelector } from "react-redux";
import Login from "./views/Login";

function App() {
  const state = useSelector((state) => state);

  return (
    <div className="App">
      {state.isAuthenticated ? (
        <Dashboard user={state.user} dueAssignemnts={state.dueAssignemnts}></Dashboard>
      ) : (
        <Login></Login>
      )}
    </div>
  );
}

export default App;
