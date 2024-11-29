

const CardTwo = () => {
    return (
        <div className="flex flex-col justify-center items-center relative my-14">
            <div className="flex items-center gap-4 my-4 rounded-lg  md:w-[1000px] md:p-12 ">
                <div>
                    <h2 className="transform rotate-[-90deg]"> 
                        <span className="md:text-4xl text-2xl font-bold text-orange-500 ">
                            Fresh
                        </span> <br /><span className="text-red-600 font-semibold text-4xl">Everyday</span></h2>
                </div>
                <div className="space-y-3">
                    <h2 className="font-semibold md:text-5xl">Discover The Best Waffles</h2>
                    <p className="text-gray-400">Freshly Produced, Hygienically Prepared, & Quickly Delivered</p>
                </div>

                

            </div>
            <hr className="border-2 border-gray-600 md:w-[600px] w-[200px] my-6 md:my-0  md:absolute top-[160px] left-[370px]"/>
            
        </div>
    );
};

export default CardTwo;