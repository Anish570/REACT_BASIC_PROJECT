import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-[10px] md-px-[0px]  text-center bg-gray-800 text-white">
            <h1 className="text-4xl font-bold mb-8">Welcome to Our Website</h1>
            <div className=''>
                <p className="text-lg  mb-8">Please sign up or log in to access the full features of our website.</p>
                <div className="flex space-x-4 justify-center">
                    <Link to="/login" className="text-indigo-600 font-medium hover:underline">Log in</Link>
                    <span >or</span>
                    <Link to="/register" className="text-indigo-600 font-medium hover:underline">Sign up</Link>
                </div>
            </div>

        </div>
    );
};

export default Home;
