import React, {useState} from 'react';
import axios from 'axios';
import {ILoginForm} from "../model/User/Login";
import {useNavigate} from "react-router-dom";
import {FormValidator} from "../Validation/FormValidation";
import ErrorElement from "./Alert/Error";

const Login: React.FC = () => {
    const navigate = useNavigate()
    const [errorMessages, setErrorMessages] = useState<string[]>([]);

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
        const validateLogin = new FormValidator();
        const validationErrors = validateLogin.validateLoginForm(formData) ?? [];

        try {
            if (validationErrors.length === 0) {
                const response = await axios.post('/login/authenticate', formData, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (response.status == 200) {
                    navigate('/user/dashboard');
                }
            } else {
                setErrorMessages(validationErrors);
            }
            // Send a POST request to your server's login endpoint with user input.
        } catch (error: any) {
            if (error.response) {
                if (error.response.status === 401) {
                    setErrorMessages([error.response.data.message]);
                } else {
                    // Handle network or other errors.
                    setErrorMessages([error]);
                }
            } else {
                setErrorMessages([`Network error: ${error.message}`]);
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
                <div className="bg-indigo-500 ml-[-2rem]">
                    <h2 className="text-2xl font-semibold mb-4 p-2 text-right text-white">HRIS :: Login</h2>
                </div>

                <ErrorElement errorMessages={errorMessages} />

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
