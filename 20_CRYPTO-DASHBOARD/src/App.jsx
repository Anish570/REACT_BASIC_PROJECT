import DashboardLayout from './Components/pages/Dashboard/DashboardLayout';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const [title, setTitle] = useState("Dashboard");

  useEffect(() => {
    // Define a function to update the title based on the pathname
    const updateTitle = () => {
      const pathname = location.pathname;
      switch (pathname) {
        case "/transactions":
          setTitle("Transactions");
          break;
        case "/support":
          setTitle("Support");
          break;
        default:
          setTitle("Dashboard");
      }
    };
    // Call the updateTitle function initially and whenever location changes
    updateTitle();
    // Clean up the effect to avoid memory leaks
    return () => { };
  }, [location]);


  return (
    <>
      <div className='bg-[#f3f3f7]  h-screen dark:bg-slate-900 dark:text-white '>
        <DashboardLayout title={title}>
          <Outlet />
        </DashboardLayout>

      </div>

    </>
  )
}

export default App
