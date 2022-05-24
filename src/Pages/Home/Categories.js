import React, { useEffect, useState } from 'react';
import ExploreCategory from './ExploreCategory';

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <p className='text-center text-3xl mb-4'>Our Catgories</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 '>
                {
                    categories.map((category) =>
                        <ExploreCategory key={category._id} category={category}>

                        </ExploreCategory>)
                }
            </div>
        </div>
    );
};

export default Categories;