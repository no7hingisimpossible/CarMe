import React from 'react';

const AddProducts = () => {
    const purchaseHandler = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const price = e.target.price.value
        const quantity = parseInt(e.target.quantity.value) 
        const moq = e.target.moq.value
        const image = e.target.image.value
        // const productName = e.target.product.value
        // const quantity = parseInt(e.target.quantity.value)

        const data = {
            name: name,
            Price: price,
            quantity: quantity,
            MOQ: moq,
            image: image
            
        }
        
        fetch('http://localhost:5000/products', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                   
                })
    }
    return (
        <div>
            <div class="card w-full max-w-sm shadow-2xl  p-3 mx-auto">
                    <form onSubmit={purchaseHandler}>
                        <div class="">
                            <div>
                                {/* <label class="block mb-2 text-sm font-medium text-gray-900">Name</label> */}
                                <input type="text" name="name" class="input input-bordered w-full " />
                            </div>

                            <div>
                                <label for="Price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                                <input type="number" name='price' class="input input-bordered w-full " />
                            </div>
                            <div>
                                <label for="Add Quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Add Quantity</label>
                                <input type="text" placeholder="add quantity" name='quantity' class="input input-bordered w-full" />
                            </div>
                            <div>
                                <label for="MOQ" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">MOQ</label>
                                <input type="text" name='moq' class="input input-bordered w-full" />
                            </div>
                            <div>
                                <label for="MOQ" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image</label>
                                <input type="text" disabled defaultValue={"https://smartdatawp.com/motodeal/motor-bikes/wp-content/uploads/sites/5/2020/03/best-bike-3.png"} name='image' class="input input-bordered w-full" />
                            </div>
                            
                            
                        </div>
                        <button type="submit" class="btn btn-primary w-full mt-6">Submit</button>

                    </form>
                </div>
        </div>
    );
};

export default AddProducts;