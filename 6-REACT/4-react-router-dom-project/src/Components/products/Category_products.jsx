import React from 'react'
import { Link } from 'react-router-dom'

function Category_products() {
  return (
    <div className='bg-sky-50'>

      <div class="py-6">
        <fieldset class="border-t-2 mx-2 border-gray-600 rounded-xl">
          <legend class="px-6 text-2xl text-center">Category Collections</legend>
        </fieldset>
      </div>

      <article id="container" class="w-full py-2 md:py-4 lg:py-6 px-2 md:px-4 flex justify-center">
        <section id="Projects"
          class="w-full  grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 justify-items-center justify-center gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4 place-content-center">

          <div
            class="w-full h-fit bg-gradient-to-tr from-sky-50 to-sky-600 shadow-md rounded md:rounded-lg duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-xl">
            <Link to={"/product"}>
              <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product" class="h-44 md:h-60  w-full object-fit rounded-t md:rounded-t-lg" />
              <div class="px-4 py-3 w-full">
                <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                <div class="flex items-center w-full">
                  <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                  <del>
                    <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                  </del>
                  <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg></div>

                </div>

                <div className=''>
                  <Link to="/product"
                    class="w-full animate-bounce focus:animate-none hover:animate-none inline-flex justify-center text-md font-medium bg-gradient-to-tr from-sky-100 to-sky-600  px-4 py-2 rounded-lg tracking-widest text-sky-50">
                    <span class="ml-2">Buy Now</span>
                  </Link>
                </div>

              </div>
            </Link>
          </div>
          <div
            class="w-full h-fit bg-gradient-to-tr from-sky-50 to-sky-600 shadow-md rounded md:rounded-lg duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-xl">
            <Link to={"/product"}>
              <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product" class="h-44 md:h-60  w-full object-fit rounded-t md:rounded-t-lg" />
              <div class="px-4 py-3 w-full">
                <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                <div class="flex items-center w-full">
                  <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                  <del>
                    <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                  </del>
                  <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg></div>

                </div>

                <div className=''>
                  <Link to="/product"
                    class="w-full animate-bounce focus:animate-none hover:animate-none inline-flex justify-center text-md font-medium bg-gradient-to-tr from-sky-100 to-sky-600  px-4 py-2 rounded-lg tracking-widest text-sky-50">
                    <span class="ml-2">Buy Now</span>
                  </Link>
                </div>

              </div>
            </Link>
          </div>


        </section>
      </article>

    </div>
  )
}

export default Category_products
