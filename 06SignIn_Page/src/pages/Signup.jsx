import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {auth,googleProvider} from '../firebase/Setup'
import Background from '../components/Background'
const SignupForm = () => {
    const googleSingIn = async() =>{
        try{
         await signInWithPopup(auth,googleProvider)
        }catch(err){
         console.error(err)
        }
      }
    // const inputcss = (" bg-gray-50 border border-gray-800 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-800/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ");
  return (
    <>
    <Background />
    <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-[40%] h-[40%]'>
        <button onClick={googleSingIn} className='text-white font-semibold text-3xl'> Google Sign In</button>
    </div>
     
    </>
  )
}

export default SignupForm