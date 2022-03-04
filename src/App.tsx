import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import { DashboardRoute } from './pages/Dashboard/DashboardRoute';

import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route 
          path="dashboard" 
          element={
            <DashboardRoute component={<Dashboard />} />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
