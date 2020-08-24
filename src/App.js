import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Login from './views/Login';

function App() {
  const state = useSelector((state) => state);

  return (
    <div className="App">
      <>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;
