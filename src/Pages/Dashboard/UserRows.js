import React from 'react';
import toast from 'react-hot-toast';

const UserRows = ({ user, index, refetch }) => {
    const { email, role } = user
    const makeAdmin = () => {
        fetch(`https://quiet-tor-30085.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('failed to make Admin', {id: 'anything'});
                }
            return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Admin Created', {id : 'sth'})
                }
                

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