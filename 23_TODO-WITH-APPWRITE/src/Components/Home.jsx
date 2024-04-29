import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to Our Website</h1>
            <div>
                <p className="text-lg text-gray-700 mb-8">Please sign up or log in to access the full features of our website.</p>
                <div className="flex space-x-4">
                    <Link to="/login" className="text-indigo-600 font-medium hover:underline">Log in</Link>
                    <span className="text-gray-600">or</span>
                    <Link to="/register" className="text-indigo-600 font-medium hover:underline">Sign up</Link>
                </div>
            </div>

        </div>
    );
};

export default Home;
