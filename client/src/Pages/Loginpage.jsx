import React, { useState } from "react";
import { logo, google } from "../assets";
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        // Redirect to dashboard or handle successful login
        navigate('/dashboard');
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('Error connecting to the server');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-custom-blue flex flex-col">
      {/* Header Section */}
      <header className="flex justify-between items-center px-8 py-3">  
        <img src={logo} alt="Logo" className="h-20 " />
        <div className="flex-grow flex justify-center ml-[-10%]">
          <button className="text-2xl font-bold px-6 py-3 rounded-lg" onClick={()=>navigate('/')}>
            Home
          </button>
        </div>{" "}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center px-4">
        <div className="max-w-4xl w-full md:flex justify-between items-center mb-8">
          {/* Left Column */}
          <div className="md:w-1/2 md:pr-20 mb-4 md:mb-0">
            <h2 className="text-8xl font-bold text-center mb-4">Sign In</h2>
            <h2 className="text-xl  text-center mb-4">or</h2>
            <button className="text-lg font-bold font-palanquin text-gray-800 bg-gray-200 px-8 py-4 rounded-lg block mx-auto">
              Continue with Wi-fi   
              <i className="fas fa-wifi text-black mr-2 pl-3"></i>
            </button>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 bg-gradient-to-b from-custom-blue to-white rounded-2xl shadow-md p-8">
            {/* Form goes here */}
            <form onSubmit={handleLogin}>
              <h2 className="text-2xl text-center font-palanquin">
                Don't worry if you are not in the campus
              </h2>
              <div className="my-8">
                <div className="relative bg-gray-200 rounded-lg">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-transparent"
                    placeholder="user@iiitkottayam.ac.in"
                  />
                </div>
              </div>
              <div className="my-8">
                <div className="relative bg-gray-200 rounded-lg">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-transparent"
                    placeholder="********"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-lg font-bold text-white bg-gray-800 px-8 py-4 rounded-lg"
              >
                Sign In
              </button>
              <h2 className="text-2xl text-center font-palanquin pt-10">
                or continue with{" "}
              </h2>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center justify-center w-12 h-12  bg-gray-200 rounded-full mt-4"
                >
                  <img src={google} alt="Google" className="w-6 h-6 " />
                </button>
              </div>
            </form>
            {message && <p className="text-center mt-4">{message}</p>}
          </div>
        </div>
      </main>

      {/* Quote Section */}
      <blockquote className="text-center text- font-montserrat font-bold">
        “It's okay to not be okay. Asking for help is a sign of strength, not
        weakness.”
      </blockquote>

      {/* Footer Section */}
      <footer className="py-4 text-center text-gray-600">
        &copy; IIIT Kottayam 2024
      </footer>
    </div>
  );
}

export default LoginPage;
