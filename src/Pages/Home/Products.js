import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("fakedb.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className='text-center my-16'>
                <p className='text-3xl font-bold'>Latest Products</p>
                <p className='text-info text-xl'>We have provide all new car accessories and auto parts for your car in our store.</p>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {
                    products.slice(0,3).map(product => 
                    <Product key={product._id} product={product}>

                    </Product> )
                }
            </div>
        </div>
    );
};

export default Products;