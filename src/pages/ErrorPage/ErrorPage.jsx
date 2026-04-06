import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6">
            <div className="text-center max-w-lg">
                
                {/* Error Code */}
                <h1 className="text-8xl font-extrabold text-indigo-500 drop-shadow-lg">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-3xl font-semibold mt-4">
                    Oops! Page not found
                </h2>

                {/* Description */}
                <p className="text-gray-400 mt-3">
                    The page you're looking for doesn’t exist or has been moved.
                </p>

                {/* Button */}
                <div className="mt-6">
                    <Link
                        to="/"
                        className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-md shadow-lg"
                    >
                        Go Home
                    </Link>
                </div>

                {/* Optional Illustration */}
                <div className="mt-10">
                    <img
                        src="https://i.ibb.co.com/wrQmyYPT/alert.png"
                        alt="Error illustration"
                        className="w-full max-w-xs mx-auto opacity-80"
                    />
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;