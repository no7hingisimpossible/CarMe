import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from './Product';
import Loading from '../../Shared/Loading';
import { useQuery } from 'react-query';

const Products = () => {
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     const url = `https://quiet-tor-30085.herokuapp.com/products`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])
    const navigate = useNavigate()
    const navigateToPurchase = (id) => {
        navigate(`/purchase/${id}`)
    }
    const { data: product, isLoading } = useQuery("product", () => fetch('https://quiet-tor-30085.herokuapp.com/products').then((res) => res.json()))
    if (isLoading) {
        return <Loading />;
    }
    return (
        <div>
            <div className='text-center '>
                <p className='text-3xl font-bold'>Latest <span className='text-secondary'>Products</span> </p>
                
                <p className='text-info text-xl'>We have provide all new car accessories and auto parts for your car in our store.</p>
            </div>
         



            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-16 gap-5 my-16'>
                {
                    product.slice(0, 3).map(pd =>
                        <Product key={pd._id} pd={pd} navigateToPurchase={navigateToPurchase}>

                        </Product>)
                }

            </div>
        </div>
    );
};

export default Products;