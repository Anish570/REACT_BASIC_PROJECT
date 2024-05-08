// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';
import React, { useEffect, useRef, useState } from 'react'
import Globalapi from '../Services/Globalapi'
import { HiOutlineChevronLeft,HiOutlineChevronRight } from "react-icons/hi";
const imageBaseUrl = "https://image.tmdb.org/t/p/original/";


const Slidersec = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    //   const elementref = useRef()
      const [trendingMovieList,setTrendingMovieList] = useState([])
      useEffect(()=>{
          trendingMovies()
      },[])
  
      const trendingMovies = ()=>{
       Globalapi.getTrendingMovies.then(res=>{
          // console.log(res.data.results)
           setTrendingMovieList(res.data.results)
      })
      }
    //   const sliderLeft = (element)=>{
    //       element.scrollLeft -= screenWidth;
    //   }
    //   const sliderRight = (element)=>{
    //       element.scrollLeft += screenWidth;
    //   }
  return (
   <>
    {/* <Slider {...settings}> */}
    <div className='mt-[20px] mb-[10px]'>
        {/* <HiOutlineChevronLeft onClick={()=>sliderLeft(elementref.current)} className='hidden md:block text-white text-[30px] absolute ml-7 mt-[163px] cursor-pointer'/>
        <HiOutlineChevronRight onClick={()=>sliderRight(elementref.current)} className='hidden md:block text-white text-[30px] absolute right-0 mr-8 mt-[163px] cursor-pointer'/> */}
    <div className=' min-w-full md:h-[330px] flex gap-8  px-16 ' >   
     {/*overflow-x-auto scrollbar-hide scroll-smooth ref={elementref} */}
        {
            trendingMovieList.map((item,index)=>(
                <img src={imageBaseUrl+item.backdrop_path}  alt="movie img" 
                className='min-w-full md:h-[330px] object-cover object-center mb-5 rounded-md hover:border-[4px] hover:border-b-4 border-gray-300 transition-all duration-[0.5ms] ease-in-out   '/>
            ))
            
        }
    </div>
       
    </div>
    {/* </Slider> */}
   </>
  )
}

export default Slidersec