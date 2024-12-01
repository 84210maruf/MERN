import React, { useState, useEffect } from 'react'
import winterFashionImg from '../../../assets/AboutPic.jpg'
import '../../../App.css'
import { Link } from 'react-router-dom'
import { useProductValue } from '../../../StateProvider'
import axios from 'axios'


function Catagorys() {

    // const { products, loading, error } = useProductValue();

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



    const uniqueCategories = [...new Set(products.map(item => item.category))];
    const uniqueSession = [...new Set(products.map(item => item.session))];
    const uniqueBrand = [...new Set(products.map(item => item.brand))];
    // console.log(uniqueCategories);

    // const [uniqueProducts, setUniqueProducts] = useState(['']);
    // console.log(uniqueCategories.map(category =>
    //     products.find(item => item.category === category)))


    return (

        <div className="bg-customBg bg-opacity-70">

            <div className=" py-6">
                <fieldset className="border-t-2 mx-2 border-gray-600 rounded-xl">
                    <legend className="px-6 text-3xl md:text-2xl lg:text-3xl font-semibold text-center">Categories</legend>
                </fieldset>
            </div>

            <div className=" w-[auto] h-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-2 lg:gap-5 mx-4 md:mx-8 lg:mx-16 relative ">

                {uniqueCategories.map((category, index) => {
                    // Find the first product for each category to get the image
                    const item = products.find(item => item.category === category);
                    return item ? (
                        <div key={index} className=" relative w-full overflow-hidden border-2 border-customBg-800 rounded-md">
                            <Link
                                to={`/category-products/${category}`} // Dynamic URL
                                className="block relative w-full "
                                style={{
                                    paddingBottom: '133.33%', // 3:4 aspect ratio (100% * 4/3)
                                    backgroundImage: `url(${item.image[2]})`, // Use item.image directly
                                    backgroundSize: `cover`,
                                    backgroundRepeat: `no-repeat`,
                                    backgroundPosition: `center`
                                }}
                            >
                                <div className="absolute bottom-0 w-full bg-opacity-50 flex justify-center items-center">
                                    <h1 className='btn btn-ghost md:text-lg tracking-wide md:tracking-widest text-sky-50 font-semibold p-2 animate-bounce tracking-widest '>
                                        {category}
                                    </h1>
                                </div>
                            </Link>
                        </div>
                    ) : null; // Return null if no item is found for the category
                })}

                {uniqueSession.map((session, index) => {
                    // Find the first product for each category to get the image
                    const item = products.find(item => item.session === session);
                    return item ? (
                        <div key={index} className=" relative w-full overflow-hidden border-2 border-customBg-800 rounded-md">
                            <Link
                                to={`/category-session/${session}`} // Dynamic URL
                                className="block relative w-full "
                                style={{
                                    paddingBottom: '133.33%', // 3:4 aspect ratio (100% * 4/3)
                                    backgroundImage: `url(${item.image[2]})`, // Use item.image directly
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
                    const item = products.find(item => item.brand === brand);
                    return item ? (
                        <div key={index} className=" relative w-full overflow-hidden border-2 border-customBg-800 rounded-md">
                            <Link
                                to={`/category-brand/${brand}`} // Dynamic URL
                                className="block relative w-full "
                                style={{
                                    paddingBottom: '133.33%', // 3:4 aspect ratio (100% * 4/3)
                                    backgroundImage: `url(${item.image[2]})`, // Use item.image directly
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

            <div className=" flex flex-col items-center border-y-[1px] py-3 ">
                <div className="w-2/3 text-center">
                    <h1 className="text-lg font-semibold pb-2 ">Do you know how JACKET-POINT got its name?</h1>
                    <p className="font-light">
                        The brand took its name from Van Gogh’s iconic painting, 'Sunflower', symbolizing warmth, happiness,
                        loyalty, and long-lasting connections 🌻</p>
                </div>
            </div>
        </div>

    )
}

export default Catagorys
