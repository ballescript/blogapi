import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/Header';

const routing = (
  <Router>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </React.StrictMode>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(routing);

// serviceWorker.unregister();