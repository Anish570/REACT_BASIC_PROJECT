import MenuItems from './components/Nav/MenuItems';
import Navbar from './components/Nav/Navbar';
import { CgProfile } from "react-icons/cg";
import { FaRegFileAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { SiBlogger } from "react-icons/si";
import { RiContactsBookFill } from "react-icons/ri";
import Sidebar from './components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';


function App() {
  const menuItems = [
    {
      title: "About",
      icon: <CgProfile />,
      hrefto: ""
    },
    {
      title: "Resume",
      icon: <FaRegFileAlt />,
      hrefto: "resume"
    },
    {
      title: "Works",
      icon: <MdWork />,
      hrefto: "works"
    },
    {
      title: "Blogs",
      icon: <SiBlogger />,
      hrefto: "blogs"
    },
    {
      title: "Contact",
      icon: <RiContactsBookFill />,
      hrefto: "contact"
    }
  ]

  return (
    <div className="w-full flex justify-center ">
      <div className='relative w-[86%] py-[50px] pb-[60px] overflow-x-hidden h-[100vh] bg-gray-300  text-black  dark:bg-slate-800 dark:text-white'  style={{
            /* Hide the scrollbar */
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none', /* Internet Explorer 10+ */
        
            /* Hide the scrollbar for WebKit browsers */
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }}>
        <div>
          <Navbar className="" />

          <div className='hidden absolute z-[11] w-full mt-[20px] bg-gray-300 text-black pl-16 
          h-[230px]  rounded-[12px] shadow-[#ededed] 
            text-[28px] py-[20px]
           dark:bg-[#1d1d1d] dark:text-[#a6a6a6]'>
            {
              menuItems.map((item, index) => (
                <MenuItems key={index} data={item} />
              ))
            }
          </div>
        </div>
        
        <div className='flex items-center flex-wrap gap-8 justify-center mt-16'>
          <Sidebar/>
          <div className='bg-white text-black dark:bg-black dark:text-white overflow-x-hidden w-[70%] h-screen rounded-[15px]' 
           style={{
            /* Hide the scrollbar */
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none', /* Internet Explorer 10+ */
        
            /* Hide the scrollbar for WebKit browsers */
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }}>
            <Outlet/>
          </div>
        </div>

      </div>
    </div>


  )
}

export default App
