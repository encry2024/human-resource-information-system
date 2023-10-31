import React from 'react';
import Sidebar from "../../../../../../resources/tsx/Components/Sidebar";

const UserList: React.FC = () => {
    return (
        <div className={`flex`}>
            <Sidebar />
            <div className="bg-gray-100 p-8 w-full">
                <div className={`sticky top-0 z-50`}>
                    <div className="bg-indigo-500 mb-9 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4 p-2 text-white">User List</h2>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-h-full">

                </div>
            </div>
        </div>
    );
};

export default UserList;
