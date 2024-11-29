import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";


const Product = ({ product }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to handle modal open/close
    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const { name, image, description, price } = product;
    return (
        <div className="max-w-7xl mx-auto">

            <div onClick={toggleModal} className="card bg-base-100 md:w-96 mx-6 md:mx-0 shadow-xl cursor-pointer hover:bg-orange-200">
                <div className="card-body">
                    <h2 className="card-title font-bokor text-red-600">{name}</h2>
                    <p className='text-gray-700'>{description}</p>
                    <p><span className="font-bold">Price:</span> {price}৳</p>
                </div>
                <figure>
                    <img className='h-[300px] w-full'
                        src={image}
                        alt="Shoes" />
                </figure>
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


        </div>
    );
};

export default Product;