import React from 'react'
import winterFashionImg from '../../../assets/nimble-made-N0ke5zChVBU-unsplash.jpg'
import '../../../App.css'

function Catagorys() {
    return (
        <div>

            <div className="py-4">
                <fieldset className="border-t-2 mx-2 border-gray-600 rounded-xl">
                    <legend className="px-6 text-2xl text-center">TOP CATEGORIES</legend>
                </fieldset>
            </div>

            <div className="w-full h-fit grid grid-cols-3 md:grid-cols-4 gap-1 mx-2 sm:mx-4">
                <a href="products" style={{
                    backgroundImage: `url(${winterFashionImg})`,
                    backgroundSize: `cover`,
                    backgroundRepeat: `no-repeat`,
                    backgroundPosition: `center`
                }} className='flex justify-center items-end h-44 md:h-60  w-full object-fit rounded'>
                    <h1 className='md:text-lg tracking-wide md:tracking-widest text-sky-50 font-semibold p-2'>Winter Fashion</h1>
                    {/* <img src={winterFashionImg}
                        alt="Product" class="h-44 md:h-60  w-full object-fit rounded" /> */}
                </a>
                <a href="products" style={{
                    backgroundImage: `url(${winterFashionImg})`,
                    backgroundSize: `cover`,
                    backgroundRepeat: `no-repeat`,
                    backgroundPosition: `center`
                }} className='flex justify-center items-end h-44 md:h-60  w-full object-fit rounded'>
                    <h1 className='md:text-lg tracking-wide md:tracking-widest text-sky-50 font-semibold p-2'>Winter Fashion</h1>
                    {/* <img src={winterFashionImg}
                        alt="Product" class="h-44 md:h-60  w-full object-fit rounded" /> */}
                </a>
                <a href="products" style={{
                    backgroundImage: `url(${winterFashionImg})`,
                    backgroundSize: `cover`,
                    backgroundRepeat: `no-repeat`,
                    backgroundPosition: `center`
                }} className='flex justify-center items-end h-44 md:h-60  w-full object-fit rounded'>
                    <h1 className='md:text-lg tracking-wide md:tracking-widest text-sky-50 font-semibold p-2'>Winter Fashion</h1>
                    {/* <img src={winterFashionImg}
                        alt="Product" class="h-44 md:h-60  w-full object-fit rounded" /> */}
                </a>
                <a href="products" style={{
                    backgroundImage: `url(${winterFashionImg})`,
                    backgroundSize: `cover`,
                    backgroundRepeat: `no-repeat`,
                    backgroundPosition: `center`
                }} className='flex justify-center items-end h-44 md:h-60  w-full object-fit rounded'>
                    <h1 className='md:text-lg tracking-wide md:tracking-widest text-sky-50 font-semibold p-2'>Winter Fashion</h1>
                    {/* <img src={winterFashionImg}
                        alt="Product" class="h-44 md:h-60  w-full object-fit rounded" /> */}
                </a>
                <a href="products" style={{
                    backgroundImage: `url(${winterFashionImg})`,
                    backgroundSize: `cover`,
                    backgroundRepeat: `no-repeat`,
                    backgroundPosition: `center`
                }} className='flex justify-center items-end h-44 md:h-60  w-full object-fit rounded'>
                    <h1 className='md:text-lg tracking-wide md:tracking-widest text-sky-50 font-semibold p-2'>Winter Fashion</h1>
                    {/* <img src={winterFashionImg}
                        alt="Product" class="h-44 md:h-60  w-full object-fit rounded" /> */}
                </a>
                <a href="products" style={{
                    backgroundImage: `url(${winterFashionImg})`,
                    backgroundSize: `cover`,
                    backgroundRepeat: `no-repeat`,
                    backgroundPosition: `center`
                }} className='flex justify-center items-end h-44 md:h-60  w-full object-fit rounded'>
                    <h1 className='md:text-lg tracking-wide md:tracking-widest text-sky-50 font-semibold p-2'>Winter Fashion</h1>
                    {/* <img src={winterFashionImg}
                        alt="Product" class="h-44 md:h-60  w-full object-fit rounded" /> */}
                </a>
                <a href="products" style={{
                    backgroundImage: `url(${winterFashionImg})`,
                    backgroundSize: `cover`,
                    backgroundRepeat: `no-repeat`,
                    backgroundPosition: `center`
                }} className='flex justify-center items-end h-44 md:h-60  w-full object-fit rounded'>
                    <h1 className='md:text-lg tracking-wide md:tracking-widest text-sky-50 font-semibold p-2'>Winter Fashion</h1>
                    {/* <img src={winterFashionImg}
                        alt="Product" class="h-44 md:h-60  w-full object-fit rounded" /> */}
                </a>
                <a href="products" style={{
                    backgroundImage: `url(${winterFashionImg})`,
                    backgroundSize: `cover`,
                    backgroundRepeat: `no-repeat`,
                    backgroundPosition: `center`
                }} className='flex justify-center items-end h-44 md:h-60  w-full object-fit rounded'>
                    <h1 className='md:text-lg tracking-wide md:tracking-widest text-sky-50 font-semibold p-2'>Winter Fashion</h1>
                    {/* <img src={winterFashionImg}
                        alt="Product" class="h-44 md:h-60  w-full object-fit rounded" /> */}
                </a>
                
            </div>

            <div className=" flex flex-col items-center border-y-[1px] my-4 py-2">
                <div className="w-2/3 text-center">
                    <h1 className="text-xl font-semibold pb-2">Do you know how JACKET-POINT got its name?</h1>
                    <p className="text-lg">
                        The brand took its name from Van Gogh’s iconic painting, 'Sunflower', symbolizing warmth, happiness,
                        loyalty, and long-lasting connections 🌻</p>
                </div>
            </div>

        </div>
    )
}

export default Catagorys
