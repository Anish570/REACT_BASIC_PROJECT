import React, { useState } from 'react'
import { account } from '../Appwrite/Config';
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
const Register = () => {
    const [isShow, setIsShow] = useState("password")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const classes = "appearance-none border-[1px] border-transparent bg-slate-600 block w-full px-3 py-2  rounded-md shadow-sm outline-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:border-[1px] sm:text-sm"
    const handleSubmmit = (e) => {
        e.preventDefault()
        register()
    }

    const register = async () => {
        try {
            let x = await account.create("unique()", email, password, name);
            console.log(x)
            console.log("Password is :", password)
            navigate('/login')
        } catch (error) {
            console.error(error)
        }
    }
    const handlelogin = () => {
        navigate('/login')
    }

    const handleIsShow = () => {
        setIsShow((prev) => prev === "password" ? "text" : "password")
    }
    return (
        <div className="min-h-screen bg-gray-800 text-white flex flex-col justify-center  px-[10px] md-px-[0px] py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold ">Register your Account</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-gray-700 text-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium ">
                                Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="name"
                                    name="name"
                                    type='text'
                                    autoComplete="name"
                                    required
                                    placeholder='Full Name'
                                    onChange={(e) => { setName(e.target.value) }}
                                    className={classes}
                                />

                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium ">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder='sample@gmail.com'
                                    required
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    className={classes}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium ">
                                Password
                            </label>
                            <div className="mt-1 flex items-center relative ">
                                <input
                                    id="password"
                                    name="password"
                                    type={isShow}
                                    autoComplete="new-password"
                                    required
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    placeholder='password'
                                    className={classes}
                                />
                                {
                                    isShow === "password" ? (
                                        <FaEye onClick={handleIsShow} className='text-[15px]  cursor-pointer z-[1] absolute right-5 ' />
                                    ) : (
                                        <FaEyeSlash onClick={handleIsShow} className='text-[15px]   cursor-pointer z-[1] absolute right-5 ' />

                                    )
                                }
                            </div>
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <button
                                onClick={handleSubmmit}
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Register
                            </button>
                            <div className='font-[425px] text-[13px] '>
                                Already have an account ? <span className='text-indigo-600 cursor-pointer font-medium' onClick={handlelogin}>Log in</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register