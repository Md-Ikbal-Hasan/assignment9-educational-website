import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';


export const QuizeContext = createContext([]);

const Main = () => {
    const data = useLoaderData();
    const quizes = data.data;

    return (

        <QuizeContext.Provider value={quizes}>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </QuizeContext.Provider>

    );
};

export default Main;