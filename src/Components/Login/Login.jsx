import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [rut, setRut] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await axios.post('http://rec-staging.recemed.cl/api/users/log_in', {
                user: {
                    rut: rut,
                    password: password,
                },
            });
            

            console.log('Login successful:', response.data);
            localStorage.setItem('token', response.data.token); 

            navigate('/receta');

        } catch (err) {
            setError('Error logging in');
            console.error('Login error:', err.response ? err.response.data : err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm">RUT</label>
                        <input
                            type="text"
                            value={rut}
                            onChange={(e) => setRut(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="Enter your RUT (e.g., 11111111-1)"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="Enter your password ex : 11223344"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-rm-blue-100 rounded-md hover:bg-rm-blue-200"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
