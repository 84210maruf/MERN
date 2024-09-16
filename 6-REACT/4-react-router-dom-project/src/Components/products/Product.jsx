import React from 'react'
import { Link } from 'react-router-dom'
import winterFashionImg from './../../assets/nimble-made-N0ke5zChVBU-unsplash.jpg'

function Product() {
  return (
    <div>

      <main class="py-8 bg-sky-50">
        <div class="container mx-auto px-4 flex flex-col md:flex-row">

          <div class="md:w-1/2">
            <div class="relative">

              <div style={{
                backgroundImage: `url(${winterFashionImg})`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `center`
              }} className='w-full h-72 object-cover rounded-lg shadow-lg'>
              </div>

              <div className='flex justify-center space-x-5 mt-4'>
                <div style={{
                  backgroundImage: `url(${winterFashionImg})`,
                  backgroundSize: `cover`,
                  backgroundRepeat: `no-repeat`,
                  backgroundPosition: `center`
                }} className='w-28 h-20 object-cover rounded-md shadow-md'>
                </div>
                <div style={{
                  backgroundImage: `url(${winterFashionImg})`,
                  backgroundSize: `cover`,
                  backgroundRepeat: `no-repeat`,
                  backgroundPosition: `center`
                }} className='w-28 h-20 object-cover rounded-md shadow-md'>
                </div>
                <div style={{
                  backgroundImage: `url(${winterFashionImg})`,
                  backgroundSize: `cover`,
                  backgroundRepeat: `no-repeat`,
                  backgroundPosition: `center`
                }} className='w-28 h-20 object-cover rounded-md shadow-md'>
                </div>

              </div>

            </div>
          </div>


          <div class="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <h1 class="text-xl font-bold text-gray-900">Product Name</h1>
            <p class="text-lg text-gray-700 mt-2">$99.99</p>
            <p class="text-sm text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac turpis ut felis efficitur dictum.</p>


            <div class="mt-4 text-sm">
              <label for="size" class="block text-gray-700 font-semibold">Size</label>
              <select id="size" class="block w-full mt-2 p-2 border border-gray-300 rounded-lg">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>

            <div class="mt-4 text-sm">
              <label for="color" class="block text-gray-700 font-semibold">Color</label>
              <div class="flex space-x-4 mt-2">
                <button class="w-8 h-8 rounded-full border border-gray-300 bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600"></button>
                <button class="w-8 h-8 rounded-full border border-gray-300 bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600"></button>
                <button class="w-8 h-8 rounded-full border border-gray-300 bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600"></button>
              </div>
            </div>

            <div class="mt-4 text-sm">
              <label for="quantity" class="block text-gray-700 font-semibold">Quantity</label>
              <input id="quantity" type="number" min="1" value="1" class="block w-full mt-2 p-2 border border-gray-300 rounded-lg" />
            </div>

            <Link to={"/shoping-cart"} >
              <button class="w-full mt-4 bg-gradient-to-tr from-blue-600 to-sky-900 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">Add to Cart</button>
            </Link>

          </div>
        </div>


        <div class="container mx-auto px-4 mt-12 text-sm">
          <div class="bg-gradient-to-tr from-sky-50 to-sky-600 shadow-lg rounded-lg p-6">
            <h2 class="text-xl font-bold text-gray-900">Product Description</h2>
            <p class="text-gray-700 mt-4">Detailed description of the product goes here. Highlight features, materials, care instructions, etc.</p>

            <div class="mt-8">
              <h3 class="text-lg font-semibold text-gray-900">Customer Reviews</h3>
              <div class="mt-4">
                <div class="flex items-center space-x-2">
                  <span class="text-yellow-500">★★★★☆</span>
                  <p class="text-gray-700">"Great product! Really happy with my purchase."</p>
                </div>
                <div class="flex items-center space-x-2 mt-4">
                  <span class="text-yellow-500">★★★☆☆</span>
                  <p class="text-gray-700">"Good quality but a bit expensive."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>


    </div>
  )
}

export default Product
