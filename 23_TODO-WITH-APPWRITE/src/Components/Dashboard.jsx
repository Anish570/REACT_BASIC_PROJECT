import React, { useEffect, useState } from 'react';
import { account } from '../Appwrite/Config';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        isLogin();
    }, []);

    const isLogin = async () => {
        try {
            let x = await account.get("current");
            console.log("Current Session: ", x);
            setEmail(x.email);
            setUserName(x.name);
        } catch (error) {
            navigate('/login');
            console.error(error);
        }
    };

    const handleSignOut = async () => {
        try {
            const x = await account.deleteSession("current")
            navigate('/login')
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div>
            {userName && email ? (
                <div className="min-h-screen bg-gray-100 flex flex-col">
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
                        </div>
                    </header>

                    <main className="flex-grow">
                        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow sm:rounded-lg">
                                <div className="px-4 py-5 sm:px-6">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">User Information</h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                                </div>
                                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                                    <dl className="sm:divide-y sm:divide-gray-200">
                                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                                            <dt className="text-sm font-medium text-gray-500">Name</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{userName}</dd>
                                        </div>
                                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                                            <dt className="text-sm font-medium text-gray-500">Email</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{email}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </main>

                    <footer className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            <button
                                onClick={handleSignOut}
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign out
                            </button>
                        </div>
                    </footer>
                </div>
            ) : (
                <div>
                    Loading...
                </div>
            )}
        </div>
    );
};

export default Dashboard;
