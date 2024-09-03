import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const MainLoyouts:React.FC = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLoyouts;
