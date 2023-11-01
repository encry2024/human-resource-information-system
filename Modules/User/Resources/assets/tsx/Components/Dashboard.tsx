import React from 'react';
import Sidebar from "../../../../../../resources/tsx/Components/Sidebar";

const Dashboard: React.FC = () => {
    const auth = localStorage.getItem('auth') ?? "";
    const parsedUser = JSON.parse(auth);

    return (
        <div className={`class="relative z-0 flex h-full w-full overflow-hidden"`}>
            <div className={`relative z-0 flex h-full w-full overflow-hidden`}>
                {/*TODO: Sidebar should be reusable.*/}
                <Sidebar />

                <div className="relative flex h-full max-w-full flex-1 flex-col overflow-hidden">
                    <main className={`relative h-full w-full flex-1 overflow-auto transition-width`}>
                        <div role={`presentation`} className={`flex h-full flex-col`}>
                            <div className={`flex-1 overflow-hidden`}>
                                <div className={`flex flex-col text-sm gizmo:pb-9 bg-indigo-500 gizmo:dark:bg-transparent`}>
                                    <header className={`sticky top-0 z-10 w-full bg-white bg-indigo-500`}>
                                        <div className={`relative z-20 flex min-h-[60px] flex-wrap gap-3 border-b border-black/10 p-2 text-gray-500 dark:border-gray-900/50 dark:bg-gray-800 dark:text-gray-300 bg-indigo-500`}>
                                            <h2 className="text-2xl font-semibold text-white w-full px-4">Dashboard
                                                <span className={`float-right py-1`} style={{ fontSize: '1rem' }}>
                                                    <p>Welcome, {parsedUser.full_name}</p>
                                                </span>
                                            </h2>
                                        </div>
                                    </header>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
