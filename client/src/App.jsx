import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import LoginPage from './Pages/Loginpage';
import Dashboard from './Pages/Studentdashboard';
import ArticlePage from './Pages/ArticlePage';
import ArticleListPage from './Pages/ArticleListPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/articles" element={<ArticleListPage />} />
      <Route path="/article" element={<ArticlePage />} />
    </Routes>
  );
};

export default App;
