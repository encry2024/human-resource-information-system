import React from "react";
import {Authentication} from "../Model/User/Authentication";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";


const Sidebar: React.FC = () => {
    const auth = localStorage.getItem('auth') ?? "";
    const parsedUser = JSON.parse(auth);
    const authentication = new Authentication();
    const navigate = useNavigate();
    const userDashboard = '/user/dashboard';
    const userList = '/user/users';
    /*const targetUrl = '/user/dashboard';*/

    const isDashboardActive = location.pathname === userDashboard;
    const isUserListActive = location.pathname === userList;

    const handleLogout = async (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const logoutResponse = await authentication.logout();

        if (logoutResponse) {
            localStorage.removeItem('auth');
            Cookies.remove('_token');

            navigate('/login');
        }
    }

    return (
        <div className="min-h-screen bg-gray-800 text-white w-64 py-6">
            <div className="text-3xl font-bold text-center mb-6">H.R.I.S</div>

            <div className="border-t border-gray-500 my-4 w-3/4 mx-auto"></div>

            <div className="font-bold text-center mb-6"><p>Logged in as <br/> {parsedUser.full_name}</p></div>

            <div className="border-t border-gray-500 my-4 w-3/4 mx-auto"></div>

            <ul className="sidebar mt-6">
                <li className="mb-2">
                    <a href="/user/dashboard" className={`sidebar__link ${isDashboardActive ? "sidebar__link--active" : '' }`}>Dashboard</a>
                </li>

                <li className="mb-2">
                    <a href="/user/users" className={`sidebar__link ${isUserListActive ? "sidebar__link--active" : '' }`}>Users</a>
                </li>

                <li className="mb-2">
                    <a href="#" className="sidebar__link">Company Library</a>
                </li>

                <li className="mb-2">
                    <a href="#" className="sidebar__link">Accounting</a>
                </li>

                <li className="mb-2">
                    <a href="#" className="sidebar__link">Requests</a>
                </li>

                <li className="mb-2">
                    <a href="#" className="sidebar__link">Calendar</a>
                </li>

                <li className="mb-2">
                    <a href="#" className="sidebar__link">Trainings</a>
                </li>

                <li className="mb-2">
                    <a href="#" className="sidebar__link">Performance</a>
                </li>

                <div className="border-t border-gray-500 my-4 w-3/4 mx-auto"></div>

                <li className="mb-2">
                    <a href="#" onClick={handleLogout} className="block text-sm py-2 px-6 hover:bg-gray-700">Logout</a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar
