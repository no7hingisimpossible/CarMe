import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from './Product';
import Loading from '../../Shared/Loading';
import { useQuery } from 'react-query';

const Products = () => {
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     const url = `http://localhost:5000/products`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])
    const navigate = useNavigate()
    const navigateToPurchase = (id) => {
        navigate(`/purchase/${id}`)
    }
    const {data : product, isLoading } = useQuery("product", () => fetch('http://localhost:5000/products').then((res) => res.json()))
    if(isLoading){
        return <Loading/>;
    }
    return (
        <div>
            <div className='text-center my-16'>
                <p className='text-3xl font-bold'>Latest Products</p>
                <p className='text-info text-xl'>We have provide all new car accessories and auto parts for your car in our store.</p>
            </div>
            <div className='grid grid-cols-3'>
                {
                    product.slice(0,3).map(pd => 
                    <Product key={pd._id} pd={pd} navigateToPurchase={navigateToPurchase}>

                    </Product> )
                }
               
            </div>
        </div>
    );
};

export default Products;