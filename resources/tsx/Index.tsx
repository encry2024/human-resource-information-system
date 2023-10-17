import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../public/css/app.css';
import Login from './components/Login';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "../../Modules/User/Resources/assets/tsx/components/Dashboard";

const rootDom: HTMLElement | null = document.getElementById("root");

if (rootDom) {
    const root = ReactDOM.createRoot(rootDom);

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/user/dashboard" element={<Dashboard />}/>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}
