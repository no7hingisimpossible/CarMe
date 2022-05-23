import React from 'react';


const Product = ({ product, navigateToPurchase }) => {
    const { name, Price, quantity, _id, image } = product
    
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
                    <button onClick={()=>{navigateToPurchase(_id)}} class="btn btn-primary">Buy Now</button>
                </div>
                
            </div>
        </div>
    );
};

export default Product;