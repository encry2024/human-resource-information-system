import React from 'react';
import '../../../public/css/app.css';

const Login: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
                <div className="bg-indigo-500 ml-[-2rem] mb-9">
                    <h2 className="text-2xl font-semibold mb-4 p-2 text-right text-white">HRIS :: Login</h2>
                </div>

                <form>
                    <div className="mb-7">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
                            placeholder="Your email"
                            required
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
                        />
                    </div>
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
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
