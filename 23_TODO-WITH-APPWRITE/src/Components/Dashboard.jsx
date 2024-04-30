import React, { useEffect, useState } from 'react';
import { account, database } from '../Appwrite/Config';
import { useNavigate } from 'react-router-dom';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { MdOutlineLogout } from "react-icons/md";
import { ID, Query } from 'appwrite';
import { client } from '../Appwrite/Config'

const dbId = import.meta.env.VITE_DATABASE_ID;
const collectionId = import.meta.env.VITE_COLLECTION_ID;

const Dashboard = () => {
    useEffect(() => {
        isLogin();

    }, []);


    const [todos, setTodos] = useState([]);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const allTodos = async (email) => {
        try {

            const x = await database.listDocuments(dbId, collectionId, [
                Query.equal('Email', email)
            ]);

            setTodos(x.documents);
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    const isLogin = async () => {
        try {
            const x = await account.get("current");
            setEmail(x.email);
            setUserName(x.name);
            allTodos(x.email);
            client.subscribe(`databases.${dbId}.collections.${collectionId}.documents`, response => {
                allTodos(x.email);
            });

        } catch (error) {
            navigate('/login');
            console.error(error);
        }
    };

    const addTodo = async (email, todo) => {

        try {
            // Assuming dbId and collectionId are properly defined
            setTodos((prev) => [...prev, { $id: ID.unique(), Email: email, Todo: todo }])
            const response = await database.createDocument(dbId, collectionId, "unique()", {
                Email: email,
                Todo: todo,
            });
            // setTodos((prev)=>[...prev,response])
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };

    const handleSignOut = async () => {
        try {
            await account.deleteSession("current");
            navigate('/login');
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
                                <TodoForm email={email} addTodo={addTodo} />
                            </div>
                            <div className="flex flex-wrap gap-y-3">
                                {/*Loop and Add TodoItem here */}
                                {todos.length > 0 && todos.map((todo) => (
                                    <div key={todo.$id} className='w-full'>
                                        <TodoItem todo={todo} email={email} setTodos={setTodos} />
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
