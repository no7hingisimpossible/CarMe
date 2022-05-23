import React, { useEffect, useState } from 'react';

const Manage = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('fakedb.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            {products.length}
        </div>
    );
};

export default Manage;