import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../firebase.init';
import { signOut } from 'firebase/auth';
const Navbar = () => {
    const [user] = useAuthState(auth)
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }
    return (
        <div className="navbar bg-primary text-accent">
            <div className="navbar mx-auto">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-2xl">CARME</Link>
                <div className="navbar-end">
                    
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-base p-0">
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to='purchase'>Purchase</Link></li>
                    <li><Link to='portfolio'>Portfolio</Link></li>
                    <li><a>Blogs</a></li>
                    {
                        user && <>

                            <li><Link to="dashboard">Dashboard</Link></li>
                        </>
                    }
                    <li>{user ? <Link onClick={logout} to='login'>Signout</Link> : <Link to='login'>Login</Link>}</li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;