import React, { useEffect, useState } from 'react';
import { account } from '../Appwrite/Config';
import { useNavigate } from 'react-router-dom';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { MdOutlineLogout } from "react-icons/md";

const Dashboard = () => {
    const todos = useSelector((store) => store.todo.todos)
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
                <div className="min-h-screen bg-gray-100 flex flex-col ">
                    <header className="bg-white shadow flex justify-between py-2 px-2 md:py-4 items-center sm:px-6 lg:px-8">
                        <div className="max-w-7xl ">
                            <h1 className="text-[20px] font-medium md:text-3xl md:font-bold leading-tight text-gray-900">Dashboard</h1>

                        </div>
                        <div className=" flex items-center justify-end gap-3 sm:gap-12 w-[70%] max-w-7xl ">
                            <div className='text-[20px] font-medium  md:text-3xl md:font-semibold'>Hi, {userName}</div>
                            <button
                                onClick={handleSignOut}
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <MdOutlineLogout />
                            </button>
                        </div>
                    </header>

                    <div className="bg-[#172842] min-h-screen py-8">
                        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                            <div className="mb-4">
                                <TodoForm />
                            </div>
                            <div className="flex flex-wrap gap-y-3">
                                {/*Loop and Add TodoItem here */}
                                {todos.map((todo) => (
                                    <div key={todo.id}
                                        className='w-full'
                                    >
                                        <TodoItem todo={todo} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    <footer className="bg-white shadow">

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
