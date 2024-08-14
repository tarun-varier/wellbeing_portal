import { logo } from '../assets';
import React from 'react';
import ConnectBtn from './ConnectBtn';

const Header = () => {

    const handleConnectClick = () => {
        navigate('/login');
    };
    return (
        <header className="bg-white text-gray-800 p-4 flex justify-between items-center shadow-md sticky top-0 w-full z-10">
            <div className="flex items-center space-x-4">
                <img src={logo} alt="College Logo" className="h-12" />
                <h1 className="text-2xl font-bold">MindQuest Portal</h1>
            </div>
            <nav className="flex space-x-4 items-center">
                <a href="/" className="hover:underline button-a">Home</a>
                <a href="#about" className="hover:underline button-a">About</a>
                <a href="/articles" className="hover:underline button-a">Articles</a>
                <a href="#contact" className="hover:underline button-a">Contact</a>
        <ConnectBtn />
            </nav>
        </header>
    );
};

export default Header;
