import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import Table from './Table';
import Loading from '../../Shared/Loading';
import { useQuery } from 'react-query';

const MyOrder = () => {
    const [user, loading] = useAuthState(auth)
    const email = user?.email
    // const [orders, setOrders] = useState([])
    // useEffect(() => {
    //     fetch(`http://localhost:5000/order?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // }, [orders])
    const {data: orders, isLoading} = useQuery('orders', ()=> fetch(`http://localhost:5000/order?email=${email}`).then(res => res.json()))
    if(isLoading){
        return <Loading/>
    }
    
    if(loading){
        return <Loading/>
    }
    const deleteHandler = (id) => {
        fetch(`http://localhost:5000/order/${id}`, {
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data => console.log(data))
        // console.log(id);
    }

  
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
                            key={order._id}
                            deleteHandler={deleteHandler}
                            ></Table>)
                        }
                       
                        
                    </tbody>
                </table>
            </div>
        </div>
            );
};

            export default MyOrder;