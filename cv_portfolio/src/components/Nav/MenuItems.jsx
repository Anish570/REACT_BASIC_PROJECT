import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItems = ({data}) => {
  return (
    <>
       <ul>
        <li> 
            <NavLink 
              to={data.hrefto}
             className={({isActive})=>`${isActive ? "text-blue-500" : "" }`}
              
            > 
              <div className='flex items-center'>
              <div className='text-[20px] p-1'> {data.icon}</div>
              <h4 className='ml-1 font-semibold '>{data.title}</h4>
              </div>
            </NavLink>
        </li>
       </ul>
    </>
  );
}

export default MenuItems;
