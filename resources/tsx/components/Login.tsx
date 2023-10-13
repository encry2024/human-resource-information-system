import React, {useState} from 'react';
import axios from 'axios';
import '../../../public/css/app.css';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const userLogin = async(event: React.FormEvent) => {
        try {
            event.preventDefault();

            const response = await axios.post('/login/authenticate', {
                username,
                password
            });

            console.log(response);
        } catch (error) {
            setError('Username or password is incorrect.');
        }
    }

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
                            onChange={(e) => setUsername((e.target.value))}
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
                            onChange={(e) => setPassword((e.target.value))}
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
