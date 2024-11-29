import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import friends from '../assets/friends.png'
import Marquee from 'react-fast-marquee';
import brandOne from '../assets/royal-logo_1071-200.avif'
import brandTwo from '../assets/download (9).jpeg'
import brandThree from '../assets/logo-organic-restaurant_1071-147.avif'
import brandFour from '../assets/images.jpeg'
import brandFive from '../assets/butterfly-colorful-logo-template_361591-1587.avif'
import brandSix from '../assets/national-blueberry-pancake-day-banner_1308-128045.avif'


const Corporate = () => {
    return (
        <div className='max-w-7xl mx-auto font-montserrat'>
            <Nav></Nav>
            <div className='md:flex items-center justify-center'>
                <div className='md:flex items-center gap-12 my-4'>
                    <img className='md:w-[700px] w-[350px]' src={friends} alt="" />
                    <h2 className='md:text-5xl text-3xl text-center my-2 md:my-0'><span className='font-bold'>Give Your Friends a </span><br /><span className='text-orange-600 font-semibold'>#WaffleTreat</span></h2>

                </div>
            </div>

            <div className='md:flex flex-col space-y-3 w-[300px] mx-auto'>
               
                <button
                    className="btn mr-12 ml-9 md:ml-0 md:mr-0 btn-md sm:btn-sm md:btn-md lg:btn-lg bg-black hover:text-black text-white"
                    onClick={() => window.open('https://mail.google.com', '_blank')}
                >
                    Mail Us
                </button>
                
                <button className="btn btn-md sm:btn-sm md:btn-md lg:btn-lg">Join Us</button>
            </div>



            <div className='my-4 mx-3 border border-gray-200'>
                <Marquee >
                    <img className='md:w-[200px] md:h-[200px] w-[100px] h-[100px] mr-4' src={brandOne} alt="" />
                    <img className='md:w-[200px] md:h-[200px]  w-[100px] h-[100px] mr-4' src={brandTwo} alt="" />
                    <img className='md:w-[200px] md:h-[200px]  w-[100px] h-[100px] mr-4' src={brandThree} alt="" />
                    <img className='md:w-[200px] md:h-[200px]  w-[100px] h-[100px] mr-4' src={brandFour} alt="" />
                    <img className='md:w-[200px] md:h-[200px]  w-[100px] h-[100px] mr-4' src={brandFive} alt="" />
                    <img className='md:w-[200px] md:h-[200px]  w-[100px] h-[100px] mr-4' src={brandSix} alt="" />

                </Marquee>
            </div>


            <div className='mb-6 md:flex space-y-4 md:space-y-0 justify-around items-center p-4'>
                <div class="md:w-72 w-56  pb-6 mx-16 md:mx-0 md:h-[450px] rounded-lg bg-gradient-to-br from-orange-800  to-orange-400 text-white shadow-lg flex flex-col items-center text-center">
                    <div class="text-4xl font-bold mb-2"><img src={brandSix} alt="" /></div>
                    <h3 class="text-2xl font-semibold mb-2">National Blueberry Pancake</h3>
                    <p class="px-2 text-sm font-light">Golden Bliss Waffles specializes in, locally sourced ingredients. Each waffle is designed to nce of crispy and fluffy textures, ensuring a Delight.

                    </p>
                </div>
                <div class="md:w-72 w-56 mx-16  md:h-[450px]  pb-6 rounded-lg bg-gradient-to-br  from-orange-800 to-orange-400 text-white shadow-lg flex flex-col items-center text-center">
                    <div class="text-4xl font-bold mb-2"><img src={brandFive} alt="" /></div>
                    <h3 class="text-2xl font-semibold mb-2">Lorem Ipsum</h3>
                    <p class="px-1 text-sm font-light">At Maple Delight Co., we pride ourselves on crafting waffles that pair flawlessly with the finest maple syrup.waffles infused with a hint of sweetness, indulgent treat for the senses.</p>
                </div>

                <div class="md:w-72 w-56 mx-16 md:h-[450px] pb-6 rounded-lg bg-gradient-to-br  from-orange-800 to-orange-400 text-white shadow-lg flex flex-col items-center text-center">
                    <div class="text-4xl font-bold mb-2"><img src={brandThree} alt="" /></div>
                    <h3 class="text-2xl font-semibold mb-2">Food Style</h3>
                    <p class="px-2 text-sm font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et inventore est quia corrupti earum, error voluptatem doloremque expedita quas excepturi voluptatibus .</p>
                </div>

            </div>


            <Footer></Footer>
        </div>
    );
};

export default Corporate;