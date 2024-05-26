import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleConnectClick = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-custom-blue flex flex-col justify-center items-center">
      <header className="text-4xl font-bold mb-8">Welcome to the Well-Being Portal</header>
      <p className="text-xl mb-8">Explore articles and resources on mental health and well-being.</p>
      <button
        onClick={handleConnectClick}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-bold"
      >
        Connect with Counsellor
      </button>
    </div>
  );
};

export default HomePage;
