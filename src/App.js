import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Dashboard from './views/Dashboard';
import Login from './views/Login';

function App() {
  const state = useSelector((state) => state);

  return (
    <div className="App">
      {state.isAuthenticated ? (
        <Dashboard user={state.user} dueAssignments={state.dueAssignments} />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
