import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className='font-montserrat max-w-7xl mx-auto'>
            <Nav></Nav>
            <div className='bg-blue-200 flex flex-col space-y-2 justify-center items-center h-[200px]'>
                <h2 className='md:text-5xl text-3xl font-bold text-orange-600 '>Contact Us</h2>
                <p className='text-gray-500 text-center md:text-2xl font-semibold'>
                You may contact us using the information below</p>
            </div>
            <div className='space-y-3 my-6 ml-3 md:ml-0'>
                <h2><span className='font-bold text-lg'>Merchant Legal Entity Name:</span> Waffle Services Pvt Ltd</h2>
                <h2><span className='font-bold text-lg'>Registered Address:</span> 601 Senpara, Shibganj, Sylhet, Sylhet-3200</h2>
                <h2><span className='font-bold text-lg'>E-mail ID:</span> dipalokch@gmail.com</h2>
                <h2><span className='font-bold text-lg'>Owner Name:</span> Dipalok Chokraborty Abir</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;