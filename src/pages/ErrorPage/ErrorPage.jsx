import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import './ErrorPage.css'
import { FaHome } from 'react-icons/fa';
const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='error-bg   font-bold'>
        <button className='text-2xl ms-3 mt-3 btn btn-sm btn-warning   '>
            <Link className="flex gap-2" to="/"> 
            <FaHome></FaHome>
             Home </Link>
        </button>
    </div>
    );
};

export default ErrorPage;