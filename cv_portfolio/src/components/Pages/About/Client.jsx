import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Client = () => {
 
    
const imgsdata = [
    {
        imgsrc:"https://cdn.pixabay.com/photo/2023/07/04/07/25/self-consciousness-8105584_640.jpg",
    },
    {
        imgsrc:"https://cdn.pixabay.com/photo/2023/07/04/07/25/self-consciousness-8105584_640.jpg",
    },
    {
        imgsrc:"https://cdn.pixabay.com/photo/2023/07/04/07/25/self-consciousness-8105584_640.jpg",
    },
    {
        imgsrc:"https://cdn.pixabay.com/photo/2023/07/04/07/25/self-consciousness-8105584_640.jpg",
    },
    {
        imgsrc:"https://cdn.pixabay.com/photo/2023/07/04/07/25/self-consciousness-8105584_640.jpg",
    },
    {
        imgsrc:"https://cdn.pixabay.com/photo/2023/07/04/07/25/self-consciousness-8105584_640.jpg",
    },
    {
        imgsrc:"https://cdn.pixabay.com/photo/2023/07/04/07/25/self-consciousness-8105584_640.jpg",
    },
    {
        imgsrc:"https://cdn.pixabay.com/photo/2023/07/04/07/25/self-consciousness-8105584_640.jpg",
    },
    {
        imgsrc:"https://cdn.pixabay.com/photo/2023/07/04/07/25/self-consciousness-8105584_640.jpg",
    },
    {
        imgsrc:"https://cdn.pixabay.com/photo/2023/07/04/07/25/self-consciousness-8105584_640.jpg",
    }
]
  return (

    <div className='absolute left-0 '>
    <div className="w-[825px] h-[253px] bg-[#f8fbfb] text-[#44566c] dark:bg-[#0d0d0d] dark:text-gray-400 flex flex-col gap-4 items-center justify-center leading-[7px] py-[45px] px-[60px] pb-[60px]">
        <h3 className="text-white text-base font-medium grid-area-auto leading-[6px] capitalize">
 Client
</h3>
<div className="w-[705px] h-[75px] flex  gap-5 overflow-x-scroll scrollbar-hide scroll-smooth">

 {
    imgsdata.map((item,index)=>(
        <div key={index} className=" px-[4px]  text-center  object-cover" >
            <img src={item.imgsrc} alt="" className='min-w-[65px] md:min-w-[95px] '/>
        </div>
    ))
 }

</div> 

</div>
<div className='m-[20px] flex items-center justify-center bg-white dark:text-white dark:bg-black  text-black'>
      <span>
      © 2024 All Rights Reserved by Anishgtm.
      </span>
     </div>
     </div>
  )
}

export default Client