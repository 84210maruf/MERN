import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Logo from "./../../../assets/Website Logo.png"
import { useStateValue } from "../../../StateProvider";

// import { auth } from "../../../firebase";
// import { doc, getDoc } from 'firebase/firestore'

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    // const [userDetails, setUserDetails] = useState(null);
    // const navigate = useNavigate();

    // const fetchUserData = async () => {
    //   auth.onAuthStateChanged(async (user) => {
    //     console.log(user)
    //     const docRef = doc(db, 'Users', user.uid)
    //     const docSnap = await getDoc(docRef)
    //     if (docSnap.exists()) {
    //       setUserDetails(docSnap.data());
    //       console.log(userDetails)
    //     }
    //   })
    // }

    // useEffect(() => {
    //   fetchUserData();
    // }, [])


    // async function handleLogout() {
    //   try {
    //     await auth.signOut();
    //     navigate('/login');
    //   } catch (error) {
    //     console.error('error in logout:', error.message)
    //   }
    // }

    return (
        <nav className="bg-sky-50">

            <div className="navbar md:flex justify-between p-0 sm:p-2">

                <div className="navbar-start sm:hidden">
                    <div className="dropdown dropdown-start">
                        <div tabindex="0" className="">
                            <label className="btn btn-ghost hover:bg-gray-100 hover:shadow-md swap swap-rotate">
                                {/* <!-- this hidden checkbox controls the state --> */}
                                <input type="checkbox" />

                                {/* <!-- hamburger icon --> */}
                                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                    viewBox="0 0 512 512">
                                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                                </svg>

                                {/* <!-- close icon --> */}
                                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                    viewBox="0 0 512 512">
                                    <polygon
                                        points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                                </svg>
                            </label>
                        </div>
                        <ul tabindex="0"
                            className="menu menu-md dropdown-content top-14 bg-gray-50 rounded-b z-[11] shadow-sm min-w-72">

                            <Link to={"/"} className="text-lg font-semibold mx-auto py-2">Home</Link>

                            {/* <!-- nested drop-down  --> */}
                            <li className=" transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105
                         duration-300">
                                <Link to={"/products"}
                                    className="mb-1 bg-gray-50 hover:bg-gray-100 p-6 rounded cursor-pointer shadow-sm hover:shadow-xl">
                                    <div className="font-semibold" >Collections</div>
                                </Link>
                            </li>
                            {/* <!-- nested drop-down  --> */}
                            <li className=" transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105
                         duration-300">
                                <Link to={"/winter"}
                                    className="mb-1 bg-gray-50 hover:bg-gray-100 p-6 rounded cursor-pointer shadow-sm hover:shadow-xl">
                                    <div className="font-semibold" >Winter</div>
                                </Link>
                            </li>
                            {/* <!-- nested drop-down  --> */}
                            <li className=" transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105
                         duration-300">
                                <details className="mb-1">
                                    <summary
                                        className="bg-gray-50 hover:bg-gray-100 p-6 rounded cursor-pointer shadow-sm hover:shadow-xl">
                                        <Link to={"/products"} className="font-semibold" >Men</Link>
                                    </summary>
                                    <ul className="">
                                        <li className="bg-sky-50 hover:bg-sky-100 p-2 my-2 rounded cursor-pointer shadow-sm"><a
                                            href="#">Winter Collections</a></li>
                                    </ul>
                                </details>
                            </li>
                            {/* <!-- nested drop-down  --> */}
                            <li className=" transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105
                         duration-300">
                                <details className="mb-1">
                                    <summary
                                        className="bg-gray-50 hover:bg-gray-100 p-6 rounded cursor-pointer shadow-sm hover:shadow-xl">
                                        <Link to={"/products"} className="font-semibold" >Women</Link>
                                    </summary>
                                    <ul className="">
                                        <li className="bg-sky-50 hover:bg-sky-100 p-2 my-2 rounded cursor-pointer shadow-sm"><a
                                            href="#">Winter Collections</a></li>
                                    </ul>
                                </details>
                            </li>
                            {/* <!-- nested drop-down  --> */}
                            <li className=" transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105
                         duration-300">
                                <details className="mb-1">
                                    <summary
                                        className="bg-gray-50 hover:bg-gray-100 p-6 rounded cursor-pointer shadow-sm hover:shadow-xl">
                                        <Link to={"/products"} className="font-semibold" >Kid's</Link>
                                    </summary>
                                    <ul className="">
                                        <li className="bg-sky-50 hover:bg-sky-100 p-2 my-2 rounded cursor-pointer shadow-sm"><a
                                            href="#">Winter Collections</a></li>
                                    </ul>
                                </details>
                            </li>
                            {/* <!-- nested drop-down  --> */}
                            <li className=" transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105
                         duration-300">

                                <Link to={"/minaz-dream"}
                                    className="mb-1 bg-gray-50 hover:bg-gray-100 p-6 rounded cursor-pointer shadow-sm hover:shadow-xl">
                                    <div className="font-semibold" >Minaz-Dream(Brand)</div>
                                </Link>
                            </li>


                        </ul>
                    </div>
                </div>



                <div className=" navbar-center">
                    <div className="avatar">

                        <Link to={"/"} style={{
                            backgroundImage: `url(${Logo})`,
                            backgroundSize: `cover`,
                            backgroundRepeat: `no-repeat`,
                            backgroundPosition: `center`
                        }}
                            className="h-10 sm:h-14 lg:h-20 w-44 sm:w-60 lg:w-80 cursor-pointer hover:bg-sky-50">
                        </Link>
                    </div>
                    {/* <Link to={"/"} className="btn btn-ghost text-xl cursor-pointer hover:bg-sky-200">JACKET-POINT</Link> */}
                </div>



                <div className="navbar-end sm:hidden mr-2">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>

                    <Link to={"/shoping-cart"} className="flex no-underline hover:text-black" href="#">
                        <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24">
                            <path
                                d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                            <circle cx="10.5" cy="18.5" r="1.5" />
                            <circle cx="17.5" cy="18.5" r="1.5" />
                        </svg>
                    </Link>

                    <Link to={"/login"} className="flex px-2 sm:hidden no-underline hover:text-black" href="#">
                        <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24">
                            <circle fill="none" cx="12" cy="7" r="3" />
                            <path
                                d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                        </svg>
                    </Link>

                </div>

                <form className="navbar-end hidden sm:flex">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>

                        </div>
                        <input type="search" id="default-search"
                            className=" w-full px-3 py-[10px] ps-10 text-sm text-gray-900 outline-none rounded-md bg-sky-50  ring-1 focus:ring-2 ring-sky-100 ring-offset-2 ring-offset-sky-50"
                            placeholder="Searching" required />

                        <div className="absolute end-[2px] top-0">
                            <a
                                className="group relative inline-block overflow-hidden border border-sky-200 bg-sky-200 px-6 py-[7px] focus:outline-none"
                                href="#"
                            >
                                <span
                                    className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-tr from-sky-300 to-yellow-600 transition-all group-hover:w-full group-active:bg-sky-500"
                                ></span>

                                <span
                                    className="relative text-sm tracking-wider font-medium text-sky-900 transition-colors group-hover:text-white"
                                >
                                    search
                                </span>
                            </a></div>
                    </div>
                </form>
            </div>


            <div className="hidden sm:flex items-center justify-end text-xs md:text-sm">

                <a className="flex no-underline hover:text-black" href="#">
                    <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24">
                        <path
                            d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                        <circle cx="10.5" cy="18.5" r="1.5" />
                        <circle cx="17.5" cy="18.5" r="1.5" />
                    </svg>
                    <Link to={"/shoping-cart"}>Shopping Cart</Link>
                </a>


                <a className="flex px-3 no-underline hover:text-gray-500 text-black" href="#">

                    <> {user ? (
                        <Link to="/" className="flex" onClick={() =>  dispatch({
                            type: "SET_USER",
                            user: null,
                        })}>
                            <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24">
                                <circle fill="none" cx="12" cy="7" r="3" />
                                <path
                                    d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                            </svg>
                            <div>Logout</div>
                        </Link>
                    ) : (
                        <Link to="/login" className="flex">
                            <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24">
                                <circle fill="none" cx="12" cy="7" r="3" />
                                <path
                                    d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                            </svg>
                            <div>Login</div>
                        </Link>
                    )}</>

                    {/* <Link to="/login" className="flex">
                        <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24">
                            <circle fill="none" cx="12" cy="7" r="3" />
                            <path
                                d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                        </svg>
                        <div>Login</div>
                    </Link> */}
                </a>
            </div>


            <div className="hidden sm:flex justify-center items-center cursor-pointer bg-sky-50">

                {/* <Link to={"/winter"} className="btn bg-sky-50 hover:bg-sky-200 border-0 rounded-sm py-4 mx-[1px] min-w-28">
                    Winter</Link> */}
                <div className="mr-[2px]">
                    <Link to={"/"}
                        className="group relative inline-block overflow-hidden px-4 lg:px-8 py-2"
                        href="#"
                    >
                        <span
                            className="absolute inset-x-0 top-0 h-0 bg-gradient-to-tr from-yellow-600 to-sky-300 transition-all group-hover:h-full group-active:bg-sky-500"
                        ></span>

                        <span
                            className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white"
                        >
                            Home
                        </span>
                    </Link></div>
                <div className="mr-[2px]">
                    <Link to={"/products"}
                        className="group relative inline-block overflow-hidden px-4 lg:px-8 py-2"
                        href="#"
                    >
                        <span
                            className="absolute inset-x-0 top-0 h-0 bg-gradient-to-tr from-sky-300 to-yellow-600 transition-all group-hover:h-full group-active:bg-sky-500"
                        ></span>

                        <span
                            className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white"
                        >
                            Collections
                        </span>
                    </Link></div>

                <div className="mr-[2px]">
                    <Link to={"/winter"}
                        className="group relative inline-block overflow-hidden px-4 lg:px-8 py-2"
                        href="#"
                    >
                        <span
                            className="absolute inset-x-0 top-0 h-0 bg-gradient-to-tr from-yellow-600 to-sky-300  transition-all group-hover:h-full group-active:bg-sky-500"
                        ></span>

                        <span
                            className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white"
                        >
                            Winter
                        </span>
                    </Link></div>

                <div className="mr-[2px]">
                    <Link to={"/men"}
                        className="group relative inline-block overflow-hidden px-4 lg:px-8 py-2"
                        href="#"
                    >
                        <span
                            className="absolute inset-x-0 top-0 h-0 bg-gradient-to-tr from-sky-300 to-yellow-600 transition-all group-hover:h-full group-active:bg-sky-500"
                        ></span>

                        <span
                            className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white"
                        >
                            Men
                        </span>
                    </Link></div>
                <div className="mr-[2px]">
                    <Link to={"/women"}
                        className="group relative inline-block overflow-hidden px-4 lg:px-8 py-2"
                        href="#"
                    >
                        <span
                            className="absolute inset-x-0 top-0 h-0 bg-gradient-to-tr from-yellow-600 to-sky-300 transition-all group-hover:h-full group-active:bg-sky-500"
                        ></span>

                        <span
                            className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white"
                        >
                            Women
                        </span>
                    </Link></div>
                <div className="mr-[2px]">
                    <Link to={"/kids"}
                        className="group relative inline-block overflow-hidden px-4 lg:px-8 py-2"
                        href="#"
                    >
                        <span
                            className="absolute inset-x-0 top-0 h-0 bg-gradient-to-tr from-sky-300 to-yellow-600 transition-all group-hover:h-full group-active:bg-sky-500"
                        ></span>

                        <span
                            className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white"
                        >
                            Kid's
                        </span>
                    </Link></div>
                <div className="mr-[2px]">
                    <Link
                        className="group relative inline-block overflow-hidden px-4 lg:px-8 py-2"
                        to={"/minaz-dream"}
                    >
                        <span
                            className="absolute inset-x-0 top-0 h-0 bg-gradient-to-tr from-yellow-600 to-sky-300 transition-all group-hover:h-full group-active:bg-sky-500"
                        ></span>

                        <span
                            className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white"
                        >
                            Minaz-Dream
                        </span>
                    </Link></div>


            </div>
        </nav>
    )
}
export default Header