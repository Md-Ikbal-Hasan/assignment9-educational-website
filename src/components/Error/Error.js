import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
    return (

        <div className='h-100'>
            <img src="https://static.vecteezy.com/system/resources/previews/001/857/111/original/error-404-page-not-found-landing-page-concept-for-mobile-and-pc-free-vector.jpg" className='img-fluid m-0 p-0' alt="" />

            <button className='btn btn-primary text-white mb-5'>
                <Link to="/" className='text-white text-decoration-none'> Go to Home </Link>
            </button>
        </div>




    );
};

export default Error;