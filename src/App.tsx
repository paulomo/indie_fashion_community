import React from 'react';
import { Router } from 'react-router';
import { createBrowserHistory, History } from 'history';
import { Routes } from './common/route';

export default function App() {
  const history: History = createBrowserHistory();
  return (
    <React.Fragment>
      <Router history={history}>
        <Routes />
      </Router>
    </React.Fragment>
  );
}
