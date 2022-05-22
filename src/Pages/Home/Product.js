import React from 'react';

const Product = ({ product }) => {
    const { name, Price, quantity, supplierName, image } = product
    return (
        <div class="card w-96 bg-base-100 mx-auto shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {name}
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <p>MOQ : {quantity}</p>
                <p>Available Quantity : {quantity}</p>
                <p>Price: {Price}/unit</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
                {/* <div class="card-actions justify-end">
                    <div class="badge badge-outline">Fashion</div>
                    <div class="badge badge-outline">Products</div>
                </div> */}
            </div>
        </div>
    );
};

export default Product;