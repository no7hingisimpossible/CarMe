import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { auth } from '../../firebase.init';

const Purchase = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth)
    const [product, setProduct] = useState({});
    const [order, setOrder] = useState(0)

    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])

    // Purchase Handler ---------------------------------------------
    // --------------------------------------------------------------

    const purchaseHandler = () => {
        // const quantityOrdered = order + 1
        // setOrder(quantityOrdered);

        const quantityAvailable = product.quantity - order
        // console.log(quantityAvailable);
        if (order < product.MOQ) {
            alert('You have to order beyond the MOQ')
        }
        else {
            //     fetch(`http://localhost:5000/products/${id}`, {
            //     method: 'PUT',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify({ quantity: quantityAvailable })
            // })
            //     .then(res => res.json())
            //     .then(data => console.log(data, 'updated'))
        }

    }
    // Increase Order by 1 -----------------------------
    // -------------------------------------------------
    const increaseQuantity = () => {
        let quantityOrdered;
        if (order < product.quantity) {
            quantityOrdered = order + 1
            setOrder(quantityOrdered)

        } else if (order === product.quantity) {
            alert('limit reached')
        }

    }
    // Decrease Order by 1 ----------------------------
    // ------------------------------------------------
    const decreaseQuantity = () => {
        let quantityOrdered;
        if (order > product.MOQ) {
            quantityOrdered = order - 1
            setOrder(quantityOrdered)
        }

    }
    let handleChange = (e) => {

        setOrder(e.target.value);
    }



    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row">
                <img src={product.image} alt="" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">{product.name}</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <p>MOQ: {product.MOQ}</p>
                    <p>Available Qunatity: {product.quantity}</p>
                    <p>Quantity Ordered : {order}</p>
                    {/* <p>user email : {user.email}</p>
                    <p>user name : {user.displayName}</p> */}
                    <button class="btn btn-primary mb-5" onClick={purchaseHandler}>Proceed</button>

                    <div className="col-xl-1">
                        <div class="input-group">
                            <div>
                                <button class="btn btn-primary" onClick={decreaseQuantity}>-</button>
                            </div>
                            <input type="text" class="" value={order} onChange={handleChange} />

                            <div>
                                <button class="btn btn-primary" onClick={increaseQuantity}>+</button>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div >
    );
};

export default Purchase;