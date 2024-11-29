import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto font-montserrat'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Home></Home>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;