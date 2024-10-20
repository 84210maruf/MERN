import React, { useState } from 'react'
import winterFashionImg from '../../../assets/AboutPic.jpg'
import '../../../App.css'
import { Link } from 'react-router-dom'
import { useProductValue } from '../../../StateProvider'


function Catagorys() {

    const { products, loading, error } = useProductValue();



    const uniqueCategories = [...new Set(products.map(item => item.category))];
    console.log(uniqueCategories);

    // const [uniqueProducts, setUniqueProducts] = useState(['']);
    // console.log(uniqueCategories.map(category =>
    //     products.find(item => item.category === category)))


    return (
        <div>

            <div>
                <fieldset className="border-t-2 mx-2 border-gray-600 rounded-xl">
                    <legend className="px-6 text-lg font-semibold text-center">TOP CATEGORIES</legend>
                </fieldset>
            </div>

            <div className="w-full h-fit grid grid-cols-3 md:grid-cols-4 gap-1 mx-2 sm:mx-4">

                {uniqueCategories.map(category =>
                    products.find(item => item.category === category))
                    .map(item => (
                        <div key={item._id}>
                            <Link to={`/category-products/${item.category}`} style={{
                                backgroundImage: `url(${item.image[0]})`,
                                backgroundSize: `cover`,
                                backgroundRepeat: `no-repeat`,
                                backgroundPosition: `center`
                            }} className='flex justify-center items-end h-44 md:h-60  w-full object-fit rounded '>
                                <h1 className='btn btn-ghost md:text-lg tracking-wide md:tracking-widest text-sky-50 font-semibold p-2 animate-bounce tracking-widest shadow'>{item.category}</h1>
                            </Link>
                        </div>
                    ))
                }
                


            </div>

            <div className=" flex flex-col items-center border-y-[1px] my-1 py-3 bg-gradient-to-tr from-sky-50 to-orange-50">
                <div className="w-2/3 text-center">
                    <h1 className="text-lg font-semibold pb-2">Do you know how JACKET-POINT got its name?</h1>
                    <p className="">
                        The brand took its name from Van Gogh’s iconic painting, 'Sunflower', symbolizing warmth, happiness,
                        loyalty, and long-lasting connections 🌻</p>
                </div>
            </div>



        </div>

    )
}

export default Catagorys
