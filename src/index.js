import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <div>
    <React.StrictMode>

      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path="*"
            element={<App />}
            exact={false}
            strict={false}
          />

        </Routes>
      </Router>
    </React.StrictMode>

  </div>
  ,
  document.getElementById('root')
);