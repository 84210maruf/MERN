import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'; // Adjust the path as necessary
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStateValue } from '../../StateProvider'; // Ensure StateProvider is properly implemented

function Login() {
    const [{ user }, dispatch] = useStateValue();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { email, password } = formData;
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Dispatch user data
            dispatch({
                type: "SET_USER",
                user: {
                    email: user.email,
                    uid: user.uid,
                },
            });

            toast.success("Login successful!", {
                style: {
                    backgroundColor: "#bae9f3",
                    color: "#12323a",
                },
            });

            // Dismiss toast messages and navigate to another route
            setTimeout(() => {
                toast.dismiss(); // Clear all toast messages
                navigate('/shoping-cart');
            }, 2000);
        } catch (error) {
            let errorMessage = "An error occurred. Please try again.";

            if (error.code === 'auth/user-not-found') {
                errorMessage = 'No account found with this email.';
            } else if (error.code === 'auth/wrong-password') {
                errorMessage = 'Incorrect password.';
            }

            toast.error(errorMessage, {
                style: {
                    backgroundColor: "#f44336",
                    color: "#ffffff",
                },
            });
        } finally {
            setLoading(false);
        }
    };

    const { email, password } = formData;

    return (
        <div>
            <section className="bg-customBg-600 py-10">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="w-full max-w-md bg-customBg-400 rounded-lg shadow-lg p-6 sm:p-8">
                            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login now
                            </h1>
                            <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                        className="w-[80%] lg:w-full focus:outline-none focus:ring-2 focus:ring-sky-400
                                             border border-[#e49b0f] text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-customBg-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Password</label>
                                    <div className="relative">
                                        <input
                                            name="password"
                                            type={showPassword ? 'text' : 'password'} // Dynamically change type
                                            value={password}
                                            onChange={handleChange}
                                            placeholder="••••••"
                                            className="focus:outline-none focus:ring-2 focus:ring-sky-400
                                            border border-[#e49b0f] text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-customBg-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={toggleShowPassword}
                                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                                            aria-label="Toggle password visibility"
                                        >
                                            {showPassword ? 'Hide' : 'Show'}
                                        </button>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`btn w-full ${loading ? 'opacity-50 cursor-not-allowed' : 'bg-[#e49b0f] text-white px-4 py-2 rounded-md hover:bg-customBg-200 transition-all btn mb-4 w-3/4'}`}
                                >
                                    {loading ? 'Logging in...' : 'Log In'}
                                </button>
                                <p className="text-sm text-center">
                                    Don't have an account?{' '}
                                    <Link to="/register" className="text-orange-600 hover:underline">
                                        Register here
                                    </Link>
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
