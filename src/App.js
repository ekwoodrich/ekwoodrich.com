import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProjectsScreen from './screens/ProjectsScreen';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/projects" component={ProjectsScreen} />

        <Route path="/" component={HomeScreen} />
      </Switch>
    </Router>
  );
}

export default App;
