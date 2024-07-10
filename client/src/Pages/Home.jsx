import React from 'react';
import { useNavigate } from 'react-router-dom';
import Articles from '../Components/Articles';
import Carousel from '../Components/Carousel';
import {logo} from '../assets';

const HomePage = () => {
  const navigate = useNavigate();

  const handleConnectClick = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-white-400 flex flex-col">
      {/* Header Section */}
      <header className="bg-white text-gray-800 p-4 flex justify-between items-center shadow-md fixed w-full z-10">
        <div className="flex items-center space-x-4">
          <img src= {logo} alt="College Logo" className="h-12" />
          <h1 className="text-2xl font-bold">IIIT Kottayam Well-Being Portal</h1>
        </div>
        <nav className="flex space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#articles" className="hover:underline">Articles</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <button
          onClick={handleConnectClick}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold"
        >
          Connect with Counsellor
        </button>
      </header>

      {/* Carousel Section */}
      {/* <Carousel /> */}
      

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center p-8">
        <h2 className="text-4xl font-bold mb-4">Welcome to the Well-Being Portal</h2>
        <p className="text-lg mb-8 text-center max-w-2xl">
          Explore a wide range of articles and resources on mental health and well-being. Our mission is to support students' mental health by providing valuable information and connecting them with professional counselors.
        </p>
        <Articles />
      </main>

      {/* Footer Section */}
      {/* <footer className="bg-white text-gray-800 p-4 text-center shadow-t-md">
        &copy; {new Date().getFullYear()} IIIT Kottayam. All rights reserved.
      </footer> */}
    </div>
  );
};

export default HomePage;