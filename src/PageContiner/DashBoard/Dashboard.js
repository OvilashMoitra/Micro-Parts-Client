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
    const [role] = useRole(user)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to={'myprofile'}>My Profile</Link></li>
                        <li><Link to={'myorder'}>My Order</Link></li>
                        <li><Link to={'addreview'}>Add Review</Link></li>
                        {
                            role === 'admin' ? <li><Link to={'makeadmin'}>Make Admin</Link></li> : null
                        }

                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;