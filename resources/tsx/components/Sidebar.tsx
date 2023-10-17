import React, {useState} from "react";
import UserMenu from "./Menu/User/UserMenu";
import RequestsMenu from "./Menu/Requests/Requests";

const Sidebar: React.FC = () => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <div className="min-h-screen bg-gray-800 text-white w-64 py-6">
            <div className="text-3xl font-bold text-center mb-6">H.R.I.S</div>

            <div className="border-t border-gray-500 my-4 w-3/4 mx-auto"></div>

            <ul className="mt-6">
                <li className="mb-2">
                    <a href="/user/dashboard" className="block text-sm py-2 px-6 hover:bg-gray-700">Dashboard</a>
                </li>
                <UserMenu title="Users "/>
                <li className="mb-2">
                    <a href="#" className="block text-sm py-2 px-6 hover:bg-gray-700">Company Library</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="block text-sm py-2 px-6 hover:bg-gray-700">Accounting</a>
                </li>
                <RequestsMenu title="Requests " />
                <li className="mb-2">
                    <a href="#" className="block text-sm py-2 px-6 hover:bg-gray-700">Calendar</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="block text-sm py-2 px-6 hover:bg-gray-700">Trainings</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="block text-sm py-2 px-6 hover:bg-gray-700">Performance</a>
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
