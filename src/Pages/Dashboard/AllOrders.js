import React, { useEffect, useState } from 'react';
import OrderRows from './OrderRows';

const AllOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch("https://quiet-tor-30085.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h2>All orders: {orders?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <OrderRows
                                    order={order}
                                    index={index}
                                    key={order._id}
                                
                                ></OrderRows>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllOrders;