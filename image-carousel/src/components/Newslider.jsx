import React from 'react'
import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const Newslider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
    const imglist= [
        {
            imgsrc : './src/assets/images/img1.jpg'
        },
        {
            imgsrc : './src/assets/images/img2.jpg'
        },
        {
            imgsrc : './src/assets/images/img3.jpg'
        },
        {
            imgsrc : './src/assets/images/img4.jpg'
        },
        {
            imgsrc : './src/assets/images/img1.jpg'
        },
        {
            imgsrc : './src/assets/images/img2.jpg'
        },
        {
            imgsrc : './src/assets/images/img3.jpg'
        },
        {
            imgsrc : './src/assets/images/img4.jpg'
        },
    ]
    console.log(imglist)
  return (
    <Slider {...settings}>
    <div className='w-full flex gap-8 '>
            {
                imglist.map((item,index)=>(
                <div>
                   
                        <img src={item.imgsrc} alt="images" srcset="" className='min-w-[200px] md:min-w-[300px]'/>
                </div>
                ))
            }
    </div>
     </Slider>
  )
}

export default Newslider