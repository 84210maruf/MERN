import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'; // Adjust the path as necessary
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStateValue } from '../../StateProvider';

function Login() {
    const [{ user }, dispatch] = useStateValue();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            // Dispatching full user data if needed
            dispatch({
                type: "SET_USER",
                user: {
                    email: user.email,
                    uid: user.uid,
                    // Add other user info as needed
                },
            });

            toast.success('Login successful!', {
                position: 'top-center',
            });

            setTimeout(() => {
                navigate('/shoping-cart');
            }, 3000);

        } catch (error) {
            let errorMessage = error.message;
            if (error.code === 'auth/user-not-found') {
                errorMessage = 'No account found with this email';
            } else if (error.code === 'auth/wrong-password') {
                errorMessage = 'Incorrect password';
            }
            toast.error(errorMessage, {
                position: 'bottom-center',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <section className="bg-sky-50">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 bg-sky-100">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login Now
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                                <div>
                                    <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Email</label>
                                    <input
                                        className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        type='email'
                                        placeholder='Enter your email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="• • • • • •"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-sky-800"
                                >
                                    {loading ? 'Logging in...' : 'Log In'}
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don't have an account? <Link to={"/register"} className="font-medium text-red-500 hover:underline dark:text-primary-500">Register here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
}

export default Login;
