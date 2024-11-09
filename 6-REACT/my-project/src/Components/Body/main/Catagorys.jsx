import React, { useState } from 'react'
import '../../../App.css'
import { Link } from 'react-router-dom'
import { useProductValue } from '../../../StateProvider'


function Catagorys() {

    const { products, loading, error } = useProductValue();

    // Get unique categories from products

    const uniqueCategories = [...new Set(products.map(item => item.category))];
    //  console.log(uniqueCategories);

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
                                    backgroundImage: `url(${item.image[0]})`, // Use item.image directly
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
