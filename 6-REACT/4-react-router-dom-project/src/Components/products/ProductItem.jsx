import React from 'react'
import { Link } from 'react-router-dom'

import demoImg from './../../assets/slide4.jpg'


function ProductItem({ addToBasket ,item}) {

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
        <div className="px-4 pt-1 w-full bg-gradient-to-tr from-yellow-300 to-sky-300 rounded-b">
          <p className="text-sm text-black truncate block capitalize">{title}</p>
          <div className="flex items-center w-full mb-1">
            <p className="text-md font-semibold text-black cursor-auto">{ (price - discount).toFixed(2) } Tk</p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-4">Tk{price.toFixed()}</p>
            </del>
            <div className="ml-auto">
              <span className="text-white mr-1 uppercase text-xs">Brand</span>
            </div>

          </div>

          <div className=''>
            <Link to="/shoping-cart"
              onClick={addToBasket}
              className="w-full animate-bounce focus:animate-none hover:animate-none inline-flex justify-center text-md font-medium bg-gradient-to-tr from-yellow-100 to-sky-400  px-4 py-2 rounded-lg tracking-widest text-sky-50">
              <span className="ml-2 text-sky-600 hover:text-sky-50">Buy Now</span>
            </Link>
          </div>

        </div>
      </Link>
    </div>
  )
}

export default ProductItem
