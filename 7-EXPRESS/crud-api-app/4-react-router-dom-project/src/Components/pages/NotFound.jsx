import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Website_Logo.svg'

function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
            {/* Logo */}
            <img src={logo} alt="Millennial Clothing Logo" className="w-80 h-32 mb-6 animate-pulse" />

            {/* 404 Message */}
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-gray-600 tracking-widest">404</h1>
                <div className="bg-primary px-2 text-sm rounded transform rotate-12 absolute -mt-10">Page Not Found</div>
                <p className="text-gray-500 mt-6 text-lg">Oops! The page you’re looking for doesn’t exist.</p>

                <div className="mt-10">
                    <Link
                        to="/"
                        className="px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-200 ease-in-out"
                    >
                        Go Home
                    </Link>
                </div>
            </div>

            {/* Floating animations */}
            <div className="absolute bottom-10 animate-bounce text-gray-400">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
}

export default NotFound;
