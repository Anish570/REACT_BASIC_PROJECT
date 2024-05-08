import React from 'react'

const Form = () => {
  return (
   <>
      <div className='bg-black bg-opacity-70 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-[4] w-[35%] h-[80%] p-4
 rounded-lg shadow dark:border '>
 <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
   <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
   Sign Up   
</a>
<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
           Create and account
       </h1>
 <form className="space-y-4 md:space-y-6" action="#">
           <div>
               <label for="email" className="block mb-2 text-sm font-medium text-pink-900 dark:text-white">Your email</label>
               <input type="email"
                name="email"
                 id="email" 
                 className={`${inputcss}`}
                       
                placeholder="name@gmail.com"
                    required="" />
           </div>
           <div>
               <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
               <input type="password" name="password" id="password" placeholder="••••••••" 
               className={`${inputcss}`}
               required="" />
           </div>
           <div>
               <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
               <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className={`${inputcss}`} required=""/>
           </div>
           <div className="flex items-start">
               <div className="flex items-center h-5">
                 <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-800 rounded bg-gray-800 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
               </div>
               <div className="ml-3 text-sm">
                 <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
               </div>
           </div>
           <button  onClick={googleSingIn} className="w-full text-white bg-green-500 hover:bg-green-700  focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
           <p className="text-sm font-light text-white">
               Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
           </p>
       </form>
       <button className='text-white text-3xl font-semibold' onClick={googleSingIn}>Google Signin</button>
    </div>
 
   </>
  )
}

export default Form