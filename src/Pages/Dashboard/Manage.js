import React, { useEffect, useState } from 'react';
import ManageRow from './ManageRow';

const Manage = () => {
    const [products, setProducts] = useState([])
    useEffect(()=> {
        fetch('https://quiet-tor-30085.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[products])
    const deleteHandler = (id) => {
        fetch(`https://quiet-tor-30085.herokuapp.com/products/${id}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => 
                            <ManageRow
                            product={product}
                            index ={index}
                            key={product._id}
                            deleteHandler={deleteHandler}
                            ></ManageRow>)
                        }
                       
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Manage;