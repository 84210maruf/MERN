import React from 'react'
import { Link } from 'react-router-dom'
import winterFashionImg from './../../assets/nimble-made-N0ke5zChVBU-unsplash.jpg'
import { useStateValue } from '../../StateProvider';


function Product() {

  const [{ basket }, dispatch] = useStateValue();

  const product = {
    id: 1,
    title: "rd shirt",
    image: "image",
    price: 100,
    discount: 50,
    rating: 5,
    quantity: 1
  }


  const addToBasket = () => {
    // Push the item into the data Layer

    dispatch({
      type: "ADD_TO_BASKET",
      item: product
    });
  }



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
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>Xl</option>
                <option>XXL</option>
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

              <div className="flex items-center">
                <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                  <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                  </svg>
                </button>
                <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value={1} required />
                <button type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                  <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                  </svg>
                </button>
              </div>

            </div>

            <Link to={"/shoping-cart"} onClick={addToBasket} >
              <button class="w-full mt-4 bg-gradient-to-tr from-blue-600 to-sky-900 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">Buy Now</button>
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
