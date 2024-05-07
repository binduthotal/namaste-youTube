import React from 'react';
import { Outlet } from 'react-router-dom';

const MainContainer = () => {
  return (
      
    <div className="col-span-11 mb-8">
      <Outlet/>
    </div>
  );
}

export default MainContainer;
