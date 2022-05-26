import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UserRows from './UserRows';

const AllUser = () => {
    const {data: users, isLoading, refetch} = useQuery('users', ()=> fetch('http://localhost:5000/user').then(res => res.json()))
    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <h2 className='text-2xl'>All users: {users.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Users</th>
                            <th>Product</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => 
                            <UserRows
                            user={user}
                            index ={index}
                            key={user._id}
                            refetch={refetch}
                            
                            ></UserRows>)
                        }
                       
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;