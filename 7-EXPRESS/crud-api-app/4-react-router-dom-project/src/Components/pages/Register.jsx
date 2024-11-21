import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        const { name, email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            toast.error("Passwords do not match!", {
                position: 'bottom-center',
            });
            return;
        }

        setLoading(true);
        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Update user profile with name
            await updateProfile(user, {
                displayName: name,
            });

            toast.success("Registration Success! Redirecting to login...", {
                position: 'bottom-center',
                style: {
                    backgroundColor: "#bae9f3",
                    color: "#1a202c"
                },
            });

            // Redirect to login page
            setTimeout(() => {
                navigate('/login');
            }, 3000);

        } catch (error) {
            console.error("Registration Error:", error);
            toast.error(error.message, {
                position: 'bottom-center',
                style: {
                    backgroundColor: "#f44336",
                    color: "#ffffff"
                },
            });
        } finally {
            setLoading(false);
        }
    };

    const { name, email, password, confirmPassword } = formData;

    return (
        <div className='bg-customBg-600 py-10'>
            <section className="py-10 min-h-screen flex justify-center items-center">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 sm:p-8 space-y-6">
                    <h1 className="text-xl font-bold text-center text-gray-900 sm:text-2xl">
                        Create an account
                    </h1>
                    <form onSubmit={handleRegister} className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={name}
                                onChange={handleChange}
                                required
                                className="w-[80%] lg:w-full focus:outline-none focus:ring-2 focus:ring-sky-400
                                             border border-[#e49b0f] text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-customBg-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleChange}
                                required
                                className="w-[80%] lg:w-full focus:outline-none focus:ring-2 focus:ring-sky-400
                                             border border-[#e49b0f] text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-customBg-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2">
                                Password <span className="text-xs text-orange-600">(minimum six characters)</span>
                            </label>
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
                        <div>
                            <label className="block text-sm font-semibold mb-2">Confirm Password</label>

                            <div className="relative">
                                <input
                                    name="confirmPassword"
                                    type={showPassword ? 'text' : 'password'} // Dynamically change type
                                    value={confirmPassword}
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
                        <div className="flex items-start">
                            <input
                                id="terms"
                                type="checkbox"
                                className="checkbox"
                                required
                            />
                            <label htmlFor="terms" className="ml-3 text-sm font-light">
                                I accept the <Link to="/terms-conditions" className="text-sky-600 hover:underline">Terms and Conditions</Link>
                            </label>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`btn w-full ${loading ? 'opacity-50' : 'btn mb-4 w-3/4 bg-[#e49b0f] text-white px-4 py-2 rounded-md hover:bg-customBg-900 transition-all" type="submit" value="Create an Account'}`}
                        >
                            {loading ? 'Creating account...' : 'Create an account'}
                        </button>
                        <p className="text-sm text-center">
                            Already have an account?{' '}
                            <Link to="/login" className="text-sky-600 hover:underline">Login here</Link>
                        </p>
                    </form>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
}

export default Register;
