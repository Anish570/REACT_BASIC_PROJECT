import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Client = () => {
 
    
const imgsdata = [
    {
       imgsrc:"https://cdn.pixabay.com/photo/2015/02/02/23/58/sign-621746_640.png",
    },
    {
        imgsrc:"https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_640.png",
    },
    {
        imgsrc:"https://cdn.pixabay.com/photo/2014/04/02/10/47/red-304573_640.png",
    },
    {
      imgsrc:"https://cdn.pixabay.com/photo/2016/09/24/20/11/dab-1692452_640.png",
    },
    {
       imgsrc:"https://cdn.pixabay.com/photo/2017/01/13/01/22/rocket-1976107_640.png",
    },
    {
        imgsrc:"https://cdn.pixabay.com/photo/2013/07/12/17/16/esperanto-151905_640.png",
    },
    {
       imgsrc:"https://cdn.pixabay.com/photo/2014/04/02/10/16/fire-303309_640.png",
    },
    {
        imgsrc:"https://cdn.pixabay.com/photo/2014/09/23/09/02/abstract-457345_640.png"
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
    <div className="text-black dark:text-white text-[24px] font-medium place-self-auto leading-[36px] text-center capitalize">
Client
</div>

<div className=" w-[705px] h-[95px] flex  gap-5 overflow-x-scroll scrollbar-hide scroll-smooth">

 {
    imgsdata.map((item,index)=>(
        <div key={index} className="img md:min-h-[95px] md:min-w-[95px]  px-[4px]  text-center overflow-hidden  object-contain" >
            <img src={item.imgsrc} alt="" className='min-w-[55px] min-h-[55px] md:min-h-[95px] md:min-w-[85px] '/>
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