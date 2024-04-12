import './ImageGenerator.css'
import default_img from '../../assets/default_image.svg'
import { useRef, useState } from 'react'
import React from 'react'
const api_key = import.meta.env.VITE_API_KEY ;
console.log("api key", api_key)
const ImageGenerator = () => {
    const [image_url, setImage_url] = useState("/")
    let inputRef = useRef(null)

    const imageGenerator = async()=>{
        if(inputRef.current.value === ""){
            return 0;
        }
        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
              method:"POST",
              headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${api_key}`,
                "User-Agent": "Chrome",
              },
              body:JSON.stringify({
                prompt:`${inputRef.current.value}`,
                n:1,
                size:"512x512",
              })
            } 
        )
        let data = await response.json();
        let data_arry = data.data;
        setImage_url(data_arry[0].url);
       
    }
    
  return (
   <>
    <div className='fixed top-0 w-full h-screen'>
        <div className='ai-image-generator flex flex-col items-center sm:mt-[0px] mt-[130px]  mx-auto '>
        <div className='header text-[30px] mb-[20px] sm:mb-[0px] sm:mt-[30px] sm:text-[50px] font-[300px] sm:font-[500px] '>Ai Image <span className='text-[#de1b89] font-bold '>Generator</span></div>
   
   <div className="img_loading flex flex-col ">
       <div className='my-[20px]'> 
           <img className='w-[200px] h-[200px] sm:w-[390px] sm:h-[390px]' src={image_url === "/" ? default_img: image_url} onError="image is here" alt="" />
       </div>
   </div>
   <div className="w-[80%] search-box mt-[20px] flex sm:w-[60%] sm:h-[70px] items-center justify-between rounded-[50px] bg-[#1f3540]">
       <input ref={inputRef} type="text" placeholder='Describe what you want to see'  className='text-[12px] sm:text-[18px] bg-transparent pl-[10px] sm:pl-[25px] mr-[15px] border-none outline-none h-[50px] w-[80%]'/>
       <button onClick={()=>{imageGenerator()}} className="generate-btn w-[80px] h-[30px] text-[15px] mr-[5px] sm:w-[200px] sm:h-[55px] rounded-[50px] sm:text-[20px] bg-[#de1b89] ">Generate</button>
   </div>
        </div>
    </div>
   </>
  )
}

export default ImageGenerator