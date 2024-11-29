import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logojpeg.jpeg';
import { FaWhatsapp } from 'react-icons/fa';

const Nav = () => {
    // State to toggle modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to handle modal open/close
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div>
            {/* Navbar */}
            <div className="navbar bg-base-100 border-b-gray-100 shadow-lg px-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                           <Link to={'/'}><li><a>Home</a></li></Link>
                            <Link to={'/corporate'}><li><a>Corporate</a></li></Link>
                            <Link to={'/products'}><li><a>Products</a></li></Link>
                            <Link to={'/blogs'}><li><a>Blogs</a></li></Link>
                            <Link to={'/contact'}><li><a>Contact Us</a></li></Link>
                        </ul>
                    </div>
                    <div className='flex  items-center'>
                        <img className='md:w-12 md:h-12 w-8 h-8 rounded-full ' src={logo} alt="logo" />
                        <Link to={'/'}><a className="ml-[-10px] md:ml-0 btn btn-ghost font-protest md:text-3xl text-xl  text-orange-500 md:font-bold font-semibold">WaffleZone</a></Link>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <Link to={'/'}><li><a>Home</a></li></Link>
                            <Link to={'/corporate'}><li><a>Corporate</a></li></Link>
                            <Link to={'/products'}><li><a>Products</a></li></Link>
                            <Link to={'/blogs'}><li><a>Blogs</a></li></Link>
                            <Link to={'/contact'}><li><a>Contact Us</a></li></Link>
                        </ul>
                    </div>
                    <button onClick={toggleModal} className="btn btn-sm md:btn-lg h-[35px]  bg-orange-600 text-white">Order Online</button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white w-[90%] max-w-md p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Order Your Waffles</h3>
                        <p className="mb-6 text-2xl text-gray-600">Order Directly Via <span className='text-green-500 font-bold'>Whatsapp</span></p>
                        <button className='btn mx-auto flex gap-3 items-center' onClick={() => window.open('https://www.whatsapp.com', '_blank')}>
                            <FaWhatsapp></FaWhatsapp>
                            <span className='text-green-600'>Whatsapp</span>
                        </button>
                        <button
                            className="btn btn-md bg-orange-600 text-white hover:bg-orange-700"
                            onClick={toggleModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Nav;
