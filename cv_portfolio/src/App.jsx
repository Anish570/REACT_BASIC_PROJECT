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
      hrefto: "about"
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
    <div className='w-full flex justify-center'>
      <div className=' w-[80%] h-[100vh] bg-gray-300  text-black  dark:bg-slate-800 dark:text-white'>
        <div>
          <Navbar className=" mt-[13%]" />
          <div className='bg-gray-300 text-black pl-16 py-5 hidden dark:bg-black dark:text-white'>
            {
              menuItems.map((item, index) => (
                <MenuItems key={index} data={item} />
              ))
            }
          </div>
        </div>
        
        <div>
          <Sidebar/>
          <Outlet/>
        </div>

      </div>
    </div>


  )
}

export default App
