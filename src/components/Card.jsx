
import wafImgOne from '../assets/images (1).jpeg'
import wafImgTwo from '../assets/download (9).jpeg'
import wafImgThree from '../assets/images.jpeg'
import wafImgFour from '../assets/download.jpeg'
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <div className='flex justify-center items-center my-6'>
            <div className="my-7 mx-4 md:mx-0 carousel rounded-box w-[600px] relative">
                <div className="carousel-item w-full flex gap-3 items-center border py-2 md:py-0 ">
                    <div>
                        <img
                            src={wafImgOne}
                            className="w-full"
                            alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className='space-y-2'>
                        <h2 className='text-orange-600 font-bold md:text-3xl'>Golden Crisp, Endless Delight</h2>
                        <p className='font-semibold'>Discover the perfect crunch and softness in every bite of our waffles.</p>
                    </div>
                </div>
                <div className="carousel-item w-full flex gap-3 items-center border ">
                    <div>
                        <img
                            src={wafImgTwo}
                            className="w-full"
                            alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className='space-y-2'>
                        <h2 className='text-orange-600 font-bold md:text-3xl'>Waffles: A Sweet Start to Every Day</h2>
                        <p className='font-semibold'>Indulge in a variety of flavors crafted to brighten your mornings.</p>
                    </div>
                </div>
                <div className="carousel-item w-full flex gap-3 items-center border ">
                    <div>
                        <img
                            src={wafImgThree}
                            className="w-full"
                            alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className='space-y-2'>
                        <h2 className='text-orange-600 font-bold md:text-3xl'>Waffles Beyond Ordinary</h2>
                        <p className='font-semibold'>Savor gourmet creations that redefine your love for breakfast.</p>
                    </div>

                </div>
                <div className="carousel-item w-full flex gap-3 items-center border ">
                    <div>
                        <img
                            src={wafImgFour}
                            className="w-full"
                            alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className='space-y-2'>
                        <h2 className='text-orange-600 font-bold md:text-3xl'>Wholesome Waffles, Heartfelt Moments</h2>
                        <p className='font-semibold'>Share the joy of freshly made waffles, perfect for every occasion.</p>
                    </div>
                </div>

            </div>
           <Link to={'/products'}> <button className='bg-orange-600 rounded-lg shadow-lg p-3 absolute bottom-[-215px] right-[490px] text-white font-semibold'>Check Products</button>
           </Link>

        </div>
    );
};

export default Card;