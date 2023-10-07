import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../public/css/app.css';
import Login from './components/Login';

const rootDom: HTMLElement | null = document.getElementById("root");

if (rootDom) {
    const root = ReactDOM.createRoot(rootDom);

    root.render(
        <React.StrictMode>
            <Login />
        </React.StrictMode>
    );
}
