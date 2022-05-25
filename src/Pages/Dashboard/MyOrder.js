import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import Table from './Table';

const MyOrder = () => {
    const [user, loading] = useAuthState(auth)
    const email = user.email
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/order?email=${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h2>All orders: {orders.length}</h2>
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
                            <Table
                            order={order}
                            index ={index}
                            ></Table>)
                        }
                       
                        
                    </tbody>
                </table>
            </div>
        </div>
            );
};

            export default MyOrder;