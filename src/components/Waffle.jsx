import React from 'react';

const Waffle = ({ waffle }) => {
    const { name, image, description } = waffle;
    return (
        <div className="card bg-base-100 md:w-96 w-72 mx-auto md:mx-0 shadow-xl ">
            <div className="card-body">
                <h2 className="card-title font-bokor text-red-600">{name}</h2>
                <p className='text-gray-700'>{description}</p>
            </div>
            <figure>
                <img className='h-[300px] w-full'
                    src={image}
                    alt="Shoes" />
            </figure>
        </div>
    );
};

export default Waffle;