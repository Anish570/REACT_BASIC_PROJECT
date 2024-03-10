import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data = useLoaderData();
  // const [data,setData] = useState([]);
  // useEffect(()=>{
  //     fetch("https://api.github.com/users/Anish570")
  //     .then((response) => response.json())
  //     .then(data => setData(data))
  // },[])
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-black text-[60px]'>
     <img className='flex justify-center items-center' src={data.avatar_url} width={150} alt="github img" />
      Github Followers: {data.followers}

      </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
   const response = await fetch("https://api.github.com/users/Anish570")
   return response.json();
}