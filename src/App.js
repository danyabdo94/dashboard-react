import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import RequireAuth from './components/RequireAuth';
import Home from './components/Home';

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#16A085',
    },
    secondary: {
      light: '#1ABC9C',
      main: '#34495E',
      contrastText: '#ffcc00',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

function App() {
  return (
    <div className="App">
      <>
        <ThemeProvider theme={customTheme}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" render={() => <RequireAuth ComposedComponent={Dashboard} />} />
            </Switch>
          </Router>
        </ThemeProvider>
      </>
    </div>
  );
}

export default App;
