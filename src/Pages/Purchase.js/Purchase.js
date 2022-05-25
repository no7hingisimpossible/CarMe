import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { auth } from '../../firebase.init';
import toast from "react-hot-toast";


const Purchase = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth)
    const [product, setProduct] = useState({});


    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    // Purchase Handler ---------------------------------------------
    // --------------------------------------------------------------
    
    const purchaseHandler = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const number = e.target.number.value
        const address = e.target.address.value
        const productName = e.target.product.value
        const quantity = parseInt(e.target.quantity.value)

        const data = {
            name: name,
            email: email,
            number: number,
            address: address,
            product: productName,
            quantity: quantity
        }

        console.log(quantity);
        console.log(product)
        if (quantity < product.MOQ) {
            toast.error("You cannot order more than the available quantity", { id: "created" })


        }
        if (quantity > product.quantity) {
            toast.error("You cannot order more than the available quantity", { id: "uncreated" });
        }
        else {
            fetch('http://localhost:5000/order', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    toast.success("Order Placed", { id: "order-placed" })
                })
        }

        




    }
    


    return (
        <div className="px-16 mt-5 bg-white">
            <p className='text-3xl text-center mb-4'>Place Your Orders and Proceed</p>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1'>
                {/* Product Image Card */}
                <div className='lg:flex-row flex-col items-center'>
                    <div class="card w-60">
                        <figure class="">
                            <img src={product.image} alt="Shoes" class="rounded-xl" />
                        </figure>
                    </div>
                    <div class="card w-96 pt-10 px-2 ">
                        <p class="text-3xl">{product.name}</p>
                        <p>Description : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus odit nemo, iste tempore fuga debitis laboriosam alias, velit repellendus similique sit? Accusantium tenetur facere corrupti nesciunt, maiores cupiditate velit quas.</p>
                        <p>Quantity Available: {product.quantity}</p>
                        <p>MOQ: {product.MOQ}</p>
                        <p>Price: {product.Price}</p>
                    </div>
                </div>
                
                <div class="card w-full max-w-sm shadow-2xl  p-3 mx-auto">
                    <form onSubmit={purchaseHandler}>
                        <div class="">
                            <div>
                                {/* <label class="block mb-2 text-sm font-medium text-gray-900">Name</label> */}
                                <input disabled defaultValue={user.displayName} type="text" name="name" class="input input-bordered w-full " />
                            </div>

                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                                <input disabled defaultValue={user.email} type="email" id="email" name='email' class="input input-bordered w-full " />
                            </div>
                            <div>
                                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                                <input type="text" placeholder="+880" name='number' class="input input-bordered w-full" />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
                                <input type="text" name='address' class="input input-bordered w-full" />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Name</label>
                                <input disabled defaultValue={product.name} type="text" name='product' class="input input-bordered w-full" />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quantity</label>
                                <input type="number" name='quantity' class="input input-bordered w-full" />
                                {/* {error?.props?.children} */}
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary w-full mt-6">Submit</button>

                    </form>
                </div>

            </div>
        </div>

    );
};


export default Purchase;