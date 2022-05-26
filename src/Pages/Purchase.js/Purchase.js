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
        const url = `https://quiet-tor-30085.herokuapp.com/products/${id}`
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
            fetch('https://quiet-tor-30085.herokuapp.com/order', {
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
        <div className="px-40 mt-5 bg-white">
            <p className='text-3xl text-center mb-4'>Place Your Orders and <span className='text-green-800'>Proceed</span></p>
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
                        <div class="flex items-center">
                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                </div>
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