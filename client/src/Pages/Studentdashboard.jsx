import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session or token data here
    localStorage.removeItem('authToken'); // Example: clear token from localStorage
    navigate('/login'); // Navigate back to login page
  };

  return (
    <div className="min-h-screen bg-gray-100 ">
      <header className="text-4xl font-bold m-8">Student Dashboard</header>
      <p className="text-xl mb-8">Welcome to your dashboard.</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-bold"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
