import React, { useState, useEffect } from 'react'
import '../../../App.css'
import { Link } from 'react-router-dom'
import { useProductValue } from '../../../StateProvider'
import axios from 'axios';



const New_arrival = () => {


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const fetchP = async () => {
        try {
            const response = await axios.get('/api/products');
            console.log("Fetched Data:", response.data);
            setProducts(response.data)
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    console.log("Hello from products");
    console.log('products: ', products);

    useEffect(() => {
        fetchP();
    }, []);

    // Filter products to get those where subcategory is 'NewArrival'
    const newArrivalProducts = products.filter(item => item.subCategory === 'NewArrival');
    // Get unique categories from products

    const uniqueCategories = [...new Set(newArrivalProducts.map(item => item.category))];
    const uniqueSession = [...new Set(newArrivalProducts.map(item => item.session))];
    const uniqueBrand = [...new Set(newArrivalProducts.map(item => item.brand))];
    return (
        <div className="bg-customBg bg-opacity-70">

            <div className=" py-6">
                <fieldset className="border-t-2 mx-2 border-gray-600 rounded-xl">
                    <legend className="px-6 text-3xl md:text-2xl lg:text-3xl font-semibold text-center">New Arrival</legend>
                </fieldset>
            </div>
            <div className=" w-[auto] h-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-2 lg:gap-5 mx-4 md:mx-8 lg:mx-16 relative">
                {uniqueCategories.map((category, index) => {
                    // Find the first product for each category to get the image
                    const item = newArrivalProducts.find(item => item.category === category);
                    return item ? (
                        <div key={index} className="relative w-full border-2 border-customBg-800 rounded-md overflow-hidden">
                            <Link
                                to={`/category-products/${category}`} // Dynamic URL
                                className="block relative w-full"
                                style={{
                                    paddingBottom: '133.33%', // 3:4 aspect ratio (100% * 4/3)
                                    backgroundImage: `url(${item.image[0]})`, // Use item.image directly
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                                <div className="absolute bottom-0 w-full  flex justify-center items-center">
                                    <h1 className="btn btn-ghost md:text-lg tracking-wide md:tracking-widest text-sky-50 font-semibold p-2 animate-bounce">
                                        {category}
                                    </h1>
                                </div>
                            </Link>
                        </div>
                    ) : null; // Return null if no item is found for the category
                })}
                {uniqueSession.map((session, index) => {
                    // Find the first product for each category to get the image
                    const item = newArrivalProducts.find(item => item.session === session);
                    return item ? (
                        <div key={index} className=" relative w-full overflow-hidden border-2 border-customBg-800 rounded-md">
                            <Link
                                to={`/category-session/${session}`} // Dynamic URL
                                className="block relative w-full "
                                style={{
                                    paddingBottom: '133.33%', // 3:4 aspect ratio (100% * 4/3)
                                    backgroundImage: `url(${item.image[0]})`, // Use item.image directly
                                    backgroundSize: `cover`,
                                    backgroundRepeat: `no-repeat`,
                                    backgroundPosition: `center`
                                }}
                            >
                                <div className="absolute bottom-0 w-full bg-opacity-50 flex justify-center items-center">
                                    <h1 className='btn btn-ghost md:text-lg tracking-wide md:tracking-widest text-sky-50 font-semibold p-2 animate-bounce tracking-widest '>
                                        {session}
                                    </h1>
                                </div>
                            </Link>
                        </div>
                    ) : null; // Return null if no item is found for the category
                })}

                {uniqueBrand.map((brand, index) => {
                    // Find the first product for each category to get the image
                    const item = newArrivalProducts.find(item => item.brand === brand);
                    return item ? (
                        <div key={index} className=" relative w-full overflow-hidden border-2 border-customBg-800 rounded-md">
                            <Link
                                to={`/category-brand/${brand}`} // Dynamic URL
                                className="block relative w-full "
                                style={{
                                    paddingBottom: '133.33%', // 3:4 aspect ratio (100% * 4/3)
                                    backgroundImage: `url(${item.image[0]})`, // Use item.image directly
                                    backgroundSize: `cover`,
                                    backgroundRepeat: `no-repeat`,
                                    backgroundPosition: `center`
                                }}
                            >
                                <div className="absolute bottom-0 w-full bg-opacity-50 flex justify-center items-center">
                                    <h1 className='btn btn-ghost md:text-lg tracking-wide md:tracking-widest text-sky-50 font-semibold p-2 animate-bounce tracking-widest '>
                                        {brand}
                                    </h1>
                                </div>
                            </Link>
                        </div>
                    ) : null; // Return null if no item is found for the category
                })}
            </div>


        </div>
    )
}

export default New_arrival
