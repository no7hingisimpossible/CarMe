import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import Table from './Table';
import Loading from '../../Shared/Loading';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const MyOrder = () => {
    const [user, loading] = useAuthState(auth)
    const email = user?.email
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://quiet-tor-30085.herokuapp.com/order?email=${email}`, {
            method : 'GET',
            headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log("res", res);
                if(res.status === 401 || res.status === 403){
                    navigate("/")
                }
                return res.json()
            })
            .then(data => {

                setOrders(data)
            })
    }, [])
    // const {data: orders, isLoading} = useQuery('orders', ()=> fetch(`https://quiet-tor-30085.herokuapp.com/order?email=${email}`).then(res => res.json()))
    // if(isLoading){
    //     return <Loading/>
    // }
    
    if(loading){
        return <Loading/>
    }
    const deleteHandler = (id) => {
        fetch(`https://quiet-tor-30085.herokuapp.com/order/${id}`, {
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data => console.log(data))
        // console.log(id);
    }

  
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