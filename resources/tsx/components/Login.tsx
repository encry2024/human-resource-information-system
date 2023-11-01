import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import ErrorElement from "./Alert/Error";
import {IUserInput} from "../Interfaces/IUserInput";
import {Authentication} from "../Model/User/Authentication";

const Login: React.FC = () => {
    const navigate = useNavigate()
    const authentication = new Authentication();
    const [errorMessages, setErrorMessages] = useState<string[]>([]);

    const inputEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    };

    const [formData, setFormData] = useState<IUserInput['userLogin']>({
        username: '',
        password: '',
    });

    const handleAuthenticate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await authentication.Authenticate(formData);

        if (!Array.isArray(response)) {
            localStorage.setItem('auth', JSON.stringify(response?.data.auth));

            navigate('/admin/dashboard');
        } else {
            setErrorMessages(response);
        }
    }

    return (
        <div className={`container mx-auto`}>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
                    <div className="bg-indigo-500 ml-[-2rem]">
                        <h2 className="text-2xl font-semibold mb-4 p-2 text-right text-white">HRIS :: Login</h2>
                    </div>

                    <ErrorElement errorMessages={errorMessages} />

                    <form onSubmit={handleAuthenticate}>
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
        </div>
    );
};

export default Login;
