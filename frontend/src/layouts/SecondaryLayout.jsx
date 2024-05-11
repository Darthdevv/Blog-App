import React from 'react'
import { Outlet } from 'react-router';

const SecondaryLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default SecondaryLayout