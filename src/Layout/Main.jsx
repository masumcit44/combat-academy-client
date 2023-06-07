import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className="max-w-screen-lg mx-auto">
            <Outlet></Outlet> 
            </div>
        </div>
    );
};

export default Main;