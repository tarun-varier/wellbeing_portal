import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import LoginPage from './Pages/Loginpage';
import Dashboard from './Pages/Studentdashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
