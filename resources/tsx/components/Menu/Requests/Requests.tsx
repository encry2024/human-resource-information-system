import React, { useState } from "react";

interface RequestsMenuProps {
    title: string; // Define the type of the 'title' prop
}

const RequestsMenu: React.FC<RequestsMenuProps> = ({ title }) => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <div className={`mb-2`}>
            {/**/}
            {/*<div className="flex items-center">
                <a
                    href="#"
                    className="block text-sm py-2 px-6 hover:bg-gray-700 w-full"
                    onClick={toggleSubMenu}
                >
                    {title}
                    <button
                        className={`text-sm float-right mt-1 transform transition-transform ${
                            subMenuOpen ? "rotate-90" : ""
                        }`}
                        onClick={toggleSubMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </a>
            </div>*/}
            <ul
                className={`sub-menu pl-8 overflow-hidden ${
                    subMenuOpen ? "max-h-96 duration-500 ease-in-out" : "duration-500 ease-in-out max-h-0"
                }`}
            >
                <li className="mt-2 mb-2">
                    <a href="#" className="sidebar--links">Users</a>
                </li>
                <li className="mt-2 mb-2">
                    <a href="#" className="sidebar--links">Vacation Leave</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="sidebar--links">Sick Leave</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="sidebar--links">Bereavement Leave</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="sidebar--links">Maternity Leave</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="sidebar--links">Emergency Leave</a>
                </li>
            </ul>
        </div>
    );
};

export default RequestsMenu;
