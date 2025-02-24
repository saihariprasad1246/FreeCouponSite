

import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h1 className="text-6xl font-bold animate-pulse">404</h1>
            <p className="text-xl mt-4 opacity-80">Oops! Page not found.</p>
            <button
                onClick={() => navigate("/")}
                className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
                Go to Home
            </button>
        </div>
    );
}

export default PageNotFound;
