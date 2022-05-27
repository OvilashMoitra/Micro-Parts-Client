import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import auth from '../../firebase.init';
import useRole from '../../Hooks/useRole';
import MyOrder from './MyOrder';

const Dashboard = () => {
    const [user, isLoading] = useAuthState(auth)
    const [role, adminLoading] = useRole(user)
    if (isLoading || adminLoading) {
        return
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>
                    <label for="my-drawer-2" className="text-right inline-block drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rounded-full text-white ml-4 mt-4 bg-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg></label>
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {
                            role === 'buyer' ? <><li><Link to={'myprofile'}>My Profile</Link></li>
                                <li><Link to={'myorder'}>My Order</Link></li>
                                <li><Link to={'addreview'}>Add Review</Link></li></> : null
                        }
                        {
                            role === 'admin' ? <>
                                <li><Link to={'manageorders'}>Manage Order</Link></li>
                                <li><Link to={'makeadmin'}>Make Admin</Link></li>
                                <li><Link to={'manageproduct'}>Manage Product</Link></li>
                            </> : null
                        }

                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;