import React from 'react'
import { Link } from 'react-router-dom'

import demoImg from './../../assets/slide4.jpg'


function ProductItem({ addToBasket, item }) {

  if (!item) {
    return <div>Product not found.</div>;
  }

  const {
    title = 'No title available',
    image = [],
    price = 'Price not available',
    discount = 'discount not available',
    description = 'No description available'
  } = item;

  console.log(item);

  return (
    <div
      className="w-full h-fit shadow-md  duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-xl rounded">
      <Link to={"/product"}>
        <img src={image[0]}
          alt="Product" className="h-44 md:h-60  w-full object-fit rounded-t md:rounded-t-md" />
      </Link>
      <div className="px-4 pt-1 w-full bg-gradient-to-tr from-yellow-300 to-sky-300 rounded-b">
        <p className="text-sm text-black truncate block capitalize">{title}</p>
        <div className="flex items-center w-full mb-1">
          <p className="text-md font-semibold text-black cursor-auto">{(price - discount).toFixed(2)} Tk</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-4">Tk{price.toFixed()}</p>
          </del>
          <div className="ml-auto">
            <span className="text-white mr-1 uppercase text-sm cursor-auto">Brand</span>
          </div>

        </div>

        <div className='flex justify-between'>
          <Link to="/shoping-cart"
            onClick={addToBasket}
            className="w-4/5 animate-bounce focus:animate-none hover:animate-none inline-flex justify-center text-md font-medium bg-gradient-to-tr from-yellow-100 to-sky-400  px-4 py-2 rounded-lg tracking-widest text-sky-50">
            <span className="ml-2 text-sky-600 hover:text-sky-50">Buy Now</span>
          </Link>
          <div onClick={addToBasket} className='animate-pulse cursor-cell'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25"
              fill="white" class="bi bi-bag-plus" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path
                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ProductItem
