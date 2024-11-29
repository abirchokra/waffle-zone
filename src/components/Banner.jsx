import bannerImg from '../assets/banner.jpg'
const Banner = () => {
    return (
        <div>
           <img className='h-[600px] w-full' src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;