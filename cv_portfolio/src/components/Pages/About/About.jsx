import React from 'react'
import DataCard from './DataCard'
import { IoLibrary } from "react-icons/io5";
import { RiCodeSSlashFill } from "react-icons/ri";
import { GrCodeSandbox } from "react-icons/gr";
import { RiFlutterFill } from "react-icons/ri";
import Client from './Client';

const About = () => {
  const carddata = [
    {
        icon:<IoLibrary/>,
        title:"Ui/Ux Design",
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
    },
    {
      icon:<RiFlutterFill/>,
      title:"App Development",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
  },
  {
    icon:<GrCodeSandbox/>,
    title:"Software Development",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
},
{
  icon:<RiCodeSSlashFill/>,
  title:"Web Development",
  desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
}
  ]
  return (
    <div className='relative py-[50px] px-[60px]'>
      <h2 className="text-black dark:text-white  text-[36px] font-bold leading-[54px] my-0 mb-[15px] capitalize">
        About
    </h2>
    <p className='mb-[16px]'>
    I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
    </p>
    <p className='mb-[16px]'>
    My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
    </p>
    
    <div className=" w-[825px] h-[526px] text-gray-400 place-self-auto leading-[28px]" style={{ color: '#a6a6a6', }}>
    <h3 className="text-white  text-[24px] font-medium leading-[36px] capitalize">
      What I Do!
    </h3>
     <div className='flex flex-wrap gap-[25px]'>
     {carddata.map((item,index)=>(
        <DataCard key={index} data={item}/>
      ))}
     </div>
     </div>

     <Client/>
     
    </div>
  )
}

export default About