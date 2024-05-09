import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='grid grid-cols-12 gap-8 px-5 mt-20'>
      <SideBar/>
      <Outlet/>
    </div>
  );
}

export default Body;
