import React, { useState } from 'react'
import { account } from '../Appwrite/Config'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const classes = "appearance-none border-[0px] bg-slate-600 block w-full px-3 py-2  rounded-md shadow-sm outline-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:border-[1px] sm:text-sm"
    const handleSubmit = (e) => {
        e.preventDefault()
        if (email === "" && password === "") {
            alert("fill the details properly")
        } else {
            login()
        }
    }
    // Anish@12345
    const login = async () => {
        try {
            const x = await account.createEmailPasswordSession(email, password)
            console.log(x)
            navigate('/dashboard')
        } catch (error) {
            navigate('/dashboard')
        }
    }
    const handlesignup = () => {
        navigate('/register')
    }
    return (
        <div className="min-h-screen  bg-gray-800 text-white  flex flex-col justify-center py-12  px-[10px]  sm:px-6  lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold ">Sign in to your account</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-gray-700 text-white  py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" >
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
                                    required
                                    placeholder='example@gmail.com'
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    className={`${classes}`}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium ">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    placeholder='********'
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    className={`${classes}`}
                                />
                            </div>
                        </div>
                        <div className="flex items-center flex-wrap gap-[5px] sm:gap-0 justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm ">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[5px]'>
                            <button
                                onClick={handleSubmit}
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign in
                            </button>
                            <div className='font-[425px] text-[13px] mt-[5px]'>
                                Don't have an account? Create one <span className='text-indigo-600 cursor-pointer font-medium' onClick={handlesignup}>Sign up</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login