import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Dropdown() {
    // Create a ref for the checkbox input
    const checkboxRef = useRef(null);

    // Function to uncheck the checkbox and close the dropdown
    const closeDropdown = () => {
        if (checkboxRef.current) {
            checkboxRef.current.checked = false; // Ensure the dropdown closes
        }
    };

    return (
        <div className="dropdown dropdown-start">
            <div tabIndex="0" className="">
                <label className="btn btn-ghost hover:bg-gray-100 hover:shadow-md swap swap-rotate">
                    {/* Hidden checkbox to control the state */}
                    <input ref={checkboxRef} type="checkbox" />

                    {/* Hamburger icon */}
                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>

                    {/* Close icon */}
                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                    </svg>
                </label>
            </div>
            <ul tabIndex="0" className="menu menu-md dropdown-content top-14 bg-gray-50 rounded-b z-[11] shadow-sm min-w-72">
                {/* Add closeDropdown function to onClick */}
                <Link to="/" className="text-lg font-semibold mx-auto py-2" onClick={closeDropdown}>Home</Link>

                <li className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                    <Link to="/products" className="mb-1 bg-gray-50 hover:bg-gray-100 p-6 rounded cursor-pointer shadow-sm hover:shadow-xl" onClick={closeDropdown}>
                        <div className="font-semibold">COLLECTIONS</div>
                    </Link>
                </li>
                <li className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                    <Link to="/winter" className="mb-1 bg-gray-50 hover:bg-gray-100 p-6 rounded cursor-pointer shadow-sm hover:shadow-xl" onClick={closeDropdown}>
                        <div className="font-semibold">WINTER</div>
                    </Link>
                </li>
                <li className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                    <Link to="/category-products/men" className="mb-1 bg-gray-50 hover:bg-gray-100 p-6 rounded cursor-pointer shadow-sm hover:shadow-xl" onClick={closeDropdown}>
                        <div className="font-semibold">MEN</div>
                    </Link>
                </li>
                <li className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                    <Link to="/category-products/women" className="mb-1 bg-gray-50 hover:bg-gray-100 p-6 rounded cursor-pointer shadow-sm hover:shadow-xl" onClick={closeDropdown}>
                        <div className="font-semibold">WOMEN</div>
                    </Link>
                </li>
                <li className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                    <Link to="/category-products/kids" className="mb-1 bg-gray-50 hover:bg-gray-100 p-6 rounded cursor-pointer shadow-sm hover:shadow-xl" onClick={closeDropdown}>
                        <div className="font-semibold">KID's</div>
                    </Link>
                </li>

                {/* Close button to manually close the dropdown */}
                <li className="mt-4">
                    <button onClick={closeDropdown} className="w-full text-center py-2 bg-red-500 text-white rounded hover:bg-red-600">
                        Close
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Dropdown;
