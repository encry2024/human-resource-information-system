import React, {useState} from 'react';
import axios from 'axios';
import '../../../public/css/app.css';
import Cookies from 'js-cookie';
import {ILoginForm} from "../model/User/Login";

const Login: React.FC = () => {
    const [formData, setFormData] = useState<ILoginForm>({
        username: '',
        password: '',
    });

    const inputEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const userLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Perform client-side validation (e.g., checking if fields are not empty).

            // Send a POST request to your server's login endpoint with user input.
            const response = await axios.post('/login/authenticate', formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200) {
                // Successful login, handle the response, e.g., storing a token and redirecting.
                const uToken = response.data.token;

                Cookies.set('_token', uToken, {
                    expires: 20,
                    secure: true,
                    sameSite: 'strict',
                });
            } else {
                // Handle login error, e.g., displaying an error message to the user.
                console.error('Login failed');
            }
        } catch (error) {
            // Handle network or other errors.
            console.error('Network error', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
                <div className="bg-indigo-500 ml-[-2rem] mb-9">
                    <h2 className="text-2xl font-semibold mb-4 p-2 text-right text-white">HRIS :: Login</h2>
                </div>

                <form onSubmit={userLogin}>
                    <div className="mb-7">
                        <label htmlFor="username" className="block text-gray-600">Username</label>
                        <input
                            type="username"
                            id="username"
                            name="username"
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
                            placeholder="Your username"
                            required
                            value={formData.username}
                            onChange={inputEvent}
                        />
                    </div>

                    <div className="mb-12">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
                            placeholder="Your password"
                            required
                            value={formData.password}
                            onChange={inputEvent}
                        />
                    </div>

                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white py-2 rounded-lg
                            hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
                        >
                            Login
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;
