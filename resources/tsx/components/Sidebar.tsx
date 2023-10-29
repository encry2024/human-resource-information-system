import React from "react";
import { useUser } from "../../../Modules/User/Resources/assets/tsx/Provider/User/UserProvider";


const Sidebar: React.FC = () => {
    const { user } = useUser();

    return (
        <div className="min-h-screen bg-gray-800 text-white w-64 py-6">
            <div className="text-3xl font-bold text-center mb-6">H.R.I.S</div>

            <div className="border-t border-gray-500 my-4 w-3/4 mx-auto"></div>

            <div className="text-lg font-bold text-center mb-6">{user && <p>Welcome, {user.username}!</p>}</div>

            <div className="border-t border-gray-500 my-4 w-3/4 mx-auto"></div>

            <ul className="mt-6">
                <li className="mb-2">
                    <a href="/user/dashboard" className="sidebar--link">Dashboard</a>
                </li>

                <li className="mb-2">
                    <a href="#" className="sidebar--link">Users</a>
                </li>

                <li className="mb-2">
                    <a href="#" className="sidebar--link">Company Library</a>
                </li>

                <li className="mb-2">
                    <a href="#" className="sidebar--link">Accounting</a>
                </li>

                <li className="mb-2">
                    <a href="#" className="sidebar--link">Requests</a>
                </li>

                <li className="mb-2">
                    <a href="#" className="sidebar--link">Calendar</a>
                </li>

                <li className="mb-2">
                    <a href="#" className="sidebar--link">Trainings</a>
                </li>

                <li className="mb-2">
                    <a href="#" className="sidebar--link">Performance</a>
                </li>

                <div className="border-t border-gray-500 my-4 w-3/4 mx-auto"></div>

                <li className="mb-2">
                    <a href="/logout" className="block text-sm py-2 px-6 hover:bg-gray-700">Logout</a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar
