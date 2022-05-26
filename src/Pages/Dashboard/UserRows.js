import React from 'react';
import toast from 'react-hot-toast';

const UserRows = ({user, index, refetch}) => {
    const {email, role} = user
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method : 'PUT',
        })
        .then(res => res.json())
        .then(data => {
            refetch()
            toast.success('Admin Created')
        })
    }
    return (
        
            <tr>
                <th>{index + 1}</th>
                <td>{email}</td>
                
                <td>{role !== "admin" && <button class="btn btn-sm" onClick={makeAdmin}>Make Admin</button>}</td>
                <td><button class="btn btn-sm">Remove User</button></td>
            </tr>
        
    );
};

export default UserRows;