import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('/waffle.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='max-w-7xl mx-auto'>
            <Nav></Nav>
            <div className="my-5">
                <div className="flex items-center justify-center my-7 ">
                    <h2 className="md:text-4xl text-2xl text-center font-bold text-orange-600 font-protest"> Welcome to Waffle Zone - Where Delicious Meets Crispy</h2>
                </div>
                <div className="md:grid grid-cols-3 mx-auto gap-3 space-y-3">
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Products;