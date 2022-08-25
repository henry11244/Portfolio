import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route
        path="*"
        element={<App />}
        exact={false}
        strict={false}
      />
    </Routes>
  </Router>,
  document.getElementById('root')
);
