import React from 'react';
import imageOne from '../assets/dhaka-city-aerial-view-1-2.jpeg'
import imageTwo from '../assets/istockphoto-1436236504-612x612.jpg'
import imageThree from '../assets/28628968873d8799922dff8544dff989.jpg'

const Cities = () => {
    return (
        <div className='bg-[rgb(199,210,254)] w-full p-3 my-12'>
            <div className='text-center mb-4'>
            <h2 className='font-bold text-orange-600 text-3xl md:text-5xl'>Cities</h2>
            <p className='text-gray-700 md:text-2xl'>We Currently serve in</p>
            <hr className='border border-gray-600 md:w-[500px] mx-auto my-4 mb-6'/>
            </div>
            <div className='flex space-x-3 md:space-x-0 justify-around items-center'>
                <div className='text-center space-y-2'>
                    <img className='md:w-[300px] md:h-[200px]' src={imageOne} alt="" />
                    <p className='text-orange-700 md:font-semibold'>Dhaka</p>
                </div>
                <div className='text-center space-y-2'>
                    <img className='md:w-[300px] md:h-[200px]' src={imageTwo} alt="" />
                    <p className='text-orange-700 md:font-semibold'>Chittagong</p>
                </div>
                <div className='text-center space-y-2'>
                    <img className='md:w-[300px] md:h-[200px]' src={imageThree} alt="" />
                    <p className='text-orange-700 md:font-semibold'>Sylhet</p>
                </div>
            </div>

        </div>
    );
};

export default Cities;