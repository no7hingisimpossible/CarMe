import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
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
    let error; 
    const purchaseHandler = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const number = e.target.number.value
        const address = e.target.address.value
        const product = e.target.product.value
        const quantity = parseInt(e.target.quantity.value)

        const data = {
            name : name, 
            email : email,
            number : number, 
            address : address, 
            product : product, 
            quantity : quantity 
        }
        

        if(quantity < product.MOQ){
            toast.error("You cannot order more than the available quantity", { id: "created" })  
            
            
        }
        if(quantity > product.quantity){
            toast.error("You cannot order more than the available quantity", { id : "uncreated"});
        }
        else{
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
                    toast.success("Order Placed", {id : "order-placed"})
                })
        }
        
        // console.log(name, email, number, address, product, quantity, product.quantity);
        



    }
    // Increase Order by 1 -----------------------------
    // -------------------------------------------------
    // const increaseQuantity = () => {
    //     let quantityOrdered;
    //     if (order < product.quantity) {
    //         quantityOrdered = order + 1
    //         setOrder(quantityOrdered)

    //     } else if (order === product.quantity) {
    //         alert('limit reached')
    //     }

    // }
    // Decrease Order by 1 ----------------------------
    // ------------------------------------------------
    // const decreaseQuantity = () => {
    //     let quantityOrdered;
    //     if (order > product.MOQ) {
    //         quantityOrdered = order - 1
    //         setOrder(quantityOrdered)
    //     }

    // }
    // let handleChange = (e) => {

    //     setOrder(e.target.value);
    // }

    return (
        <div className="px-16 mt-5">
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {/* Product Image Card */}
                <div class="card w-96">
                    <figure class="">
                        <img src={product.image} alt="Shoes" class="rounded-xl" />
                    </figure>
                </div>
                <div class="card w-96 pt-10 px-2">
                    <p class="text-3xl">{product.name}</p>
                    <p>Quantity Available: {product.quantity}</p>
                    <p>MOQ: {product.MOQ}</p>
                    <p>Price: {product.Price}</p>
                </div>
                <div class="card w-full max-w-sm shadow-2xl bg-base-100 p-3">
                    <form onSubmit={purchaseHandler}>
                        <div class="">
                            <div>
                                {/* <label class="block mb-2 text-sm font-medium text-gray-900">Name</label> */}
                                <input disabled defaultValue={user.displayName} type="text" name="name" class="input input-bordered w-full"/>
                            </div>

                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                                <input disabled defaultValue={user.email} type="email" id="email" name='email' class="input input-bordered w-full"/>
                            </div>
                            <div>
                                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                                <input type="text" placeholder="+880" name='number' class="input input-bordered w-full"/>
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
                                {error?.props?.children}
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