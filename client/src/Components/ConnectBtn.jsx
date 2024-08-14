import React from "react";
import { useNavigate } from 'react-router-dom';


export default function ConnectBtn() {
    const navigate = useNavigate();
    const handleConnectClick = () => {
        navigate('/login');
    };
    return (
        <button
            onClick={handleConnectClick}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold"
        >
            Connect with Counsellor
        </button>
    );
}
