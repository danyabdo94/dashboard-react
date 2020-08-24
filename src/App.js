import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import RequireAuth from './components/RequireAuth';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" render={() => <RequireAuth ComposedComponent={Dashboard} />} />
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;
