import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../public/css/app.css';
import Login from './Components/Login';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "../../Modules/User/Resources/assets/tsx/Components/Dashboard";
import {UserProvider} from "../../Modules/User/Resources/assets/tsx/Provider/User/UserProvider";
import UserList from "../../Modules/User/Resources/assets/tsx/Components/List";


const rootDom: HTMLElement | null = document.getElementById("root");

if (rootDom) {
    const root = ReactDOM.createRoot(rootDom);

    root.render(
        <React.StrictMode>
            <UserProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/admin/dashboard" element={<Dashboard />}/>
                        <Route path="/admin/users" element={<UserList />}/>
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </React.StrictMode>
    );
}
