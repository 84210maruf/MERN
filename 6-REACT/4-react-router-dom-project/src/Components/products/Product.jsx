import React from 'react'
import { Link } from 'react-router-dom'
import winterFashionImg from './../../assets/nimble-made-N0ke5zChVBU-unsplash.jpg'
import DemoImg from './../../assets/AboutPic.jpg'
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

      <main class="py-10 bg-sky-50">
        <div class="container space-x-4  mx-auto px-4 flex flex-col md:flex-row">

          <div class="md:w-1/2">
            <div class="relative">

              <div style={{
                backgroundImage: `url(${DemoImg})`,
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

            <div className='p-2 bg-yellow-200 rounded-2xl'>
              <p className="text-md text-gray-700 font-semibold">Original Price : 99.99 Tk</p>

              <p className="text-sm text-gray-600 cursor-auto  font-semibold">Discount : 50 Tk</p>
            </div>

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


            <Link to={"/shoping-cart"} onClick={addToBasket} >
              <button class="w-full mt-10 animate-bounce  bg-gradient-to-tr from-sky-900 to-blue-500 text-white py-[10px] font-bold px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"><p className='animate-pulse tracking-widest'>Buy Now</p></button>
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
