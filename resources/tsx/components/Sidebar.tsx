import React from "react";
import {Authentication} from "../Model/User/Authentication";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";


const Sidebar: React.FC = () => {
    const auth = localStorage.getItem('auth') ?? "";
    const parsedUser = JSON.parse(auth);
    const authentication = new Authentication();
    const navigate = useNavigate();
    const userDashboard = '/admin/dashboard';
    const userList = '/admin/users';
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
        <div className="flex-shrink-0 overflow-x-hidden dark bg-gray-900 gizmo:bg-black text-white">
            <div className={`h-full w-[230px]`}>
                <div className={`flex h-full min-h-0 flex-col`}>
                    <div className={`scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20 py-4`}>
                        <div className="text-3xl font-bold text-center mb-6">H.R.I.S</div>

                        <div className="border-t border-gray-500 my-4 w-3/4 mx-auto"></div>

                        <ul className="sidebar mt-6">
                            <li className="mb-2">
                                <a href="/admin/dashboard" className={`sidebar__link ${isDashboardActive ? "sidebar__link--active" : '' }`}>Dashboard</a>
                            </li>

                            <li className="mb-2">
                                <a href="/admin/users" className={`sidebar__link ${isUserListActive ? "sidebar__link--active" : '' }`}>Users</a>
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
                </div>
            </div>
        </div>
    );
}

export default Sidebar
