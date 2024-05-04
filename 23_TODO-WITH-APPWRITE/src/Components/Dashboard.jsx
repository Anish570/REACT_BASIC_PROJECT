import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { IoChevronDownCircleOutline } from 'react-icons/io5'
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

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
    window.addEventListener('beforeunload', async function (event) {
        handleSignOut();
    });

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
                <div className="min-h-screen bg-gray-600 flex flex-col ">
                    <nav className="flex text-white w-[100%] justify-between py-[5px] px-[10px] md:px-[6%] ">
                        <div className='items-center justify-between gap-6 hidden md:block'>
                            <h1 className="text-[24px]  font-medium">Dashboard</h1>
                        </div>
                        <div className='w-full md:w-[30%] flex items-center justify-between md:justify-end md:gap-10'>
                            <div className='text-[24px] font-medium'>
                                Hi, {userName && userName.split(' ')[0].charAt(0).toUpperCase() + userName.split(' ')[0].slice(1)}
                            </div>

                            <div className='flex items-center'>
                                <Menu >
                                    <MenuButton >
                                        <CgProfile className="text-3xl " />

                                    </MenuButton>
                                    <MenuList bg="gray.500" marginTop="5px" >
                                        <MenuItem bg="gray.500" _hover={{ bg: "blue.900" }} onClick={() => { navigate('/') }}>Home</MenuItem>
                                        <MenuItem bg="gray.500" _hover={{ bg: "blue.900" }} onClick={() => { handleSignOut() }} >Logout</MenuItem>

                                    </MenuList>
                                </Menu>
                            </div>
                        </div>

                    </nav>

                    <div className="bg-[#172842] min-h-screen py-8">
                        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                            <div className="mb-4">
                                <TodoForm email={email} addTodo={addTodo} />
                            </div>
                            <div className="flex flex-wrap gap-y-3">

                                {todos.length > 0 && todos.map((todo) => (
                                    <div key={todo.$id} className='w-full'>
                                        <TodoItem todo={todo} email={email} setTodos={setTodos} />
                                    </div>
                                ))}
                            </div>
                        </div >
                    </div >

                    <footer className="bg-white shadow">
                    </footer>
                </div >
            ) : (
                <div className='bg-gray-600 text-white text-[25px] h-screen flex flex-col gap-3  items-center justify-center font-medium'>
                    <img src="/loading.gif" width={50} alt="" />
                    Loading...
                </div>
            )
            }

        </div >
    );
};

export default Dashboard;
