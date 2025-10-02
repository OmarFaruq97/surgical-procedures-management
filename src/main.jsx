import React from 'react';
import "./index.css";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Sidebar from './components/Layout/Sidebar';
import Dashboard from './pages/Dashboard';
import Procedures from './pages/Procedures';
import Reports from './pages/Reports';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);