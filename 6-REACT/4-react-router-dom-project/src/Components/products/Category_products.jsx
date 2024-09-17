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

      <article id="container" className="w-full py-2 md:py-4 lg:py-6 px-2 md:px-4 flex justify-center">
        <section id="Projects"
          className="w-full  grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 justify-items-center justify-center gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4 place-content-center">

          <div
            className="w-full h-fit shadow-md  duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-xl rounded">
            <Link to={"/product"}>
              <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product" className="h-44 md:h-60  w-full object-fit rounded-t md:rounded-t-md" />
              <div className="px-4 pt-1 w-full bg-gradient-to-tr from-sky-50 to-sky-600 rounded-b">
                <p className="text-sm text-black truncate block capitalize">Product Name</p>
                <div className="flex items-center w-full mb-1">
                  <p className="text-lg font-semibold text-black cursor-auto">$149</p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                  </del>
                  <div className="ml-auto">
                    <span className="text-white mr-1 uppercase text-xs">Brand</span>
                  </div>

                </div>

                <div className=''>
                  <Link to="/product"
                    className="w-full animate-bounce focus:animate-none hover:animate-none inline-flex justify-center text-md font-medium bg-gradient-to-tr from-sky-100 to-sky-600  px-4 py-2 rounded-lg tracking-widest text-sky-50">
                    <span className="ml-2">Buy Now</span>
                  </Link>
                </div>

              </div>
            </Link>
          </div>
          <div
            className="w-full h-fit shadow-md  duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-xl rounded">
            <Link to={"/product"}>
              <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product" className="h-44 md:h-60  w-full object-fit rounded-t md:rounded-t-md" />
              <div className="px-4 pt-1 w-full bg-gradient-to-tr from-sky-50 to-sky-600 rounded-b">
                <p className="text-sm text-black truncate block capitalize">Product Name</p>
                <div className="flex items-center w-full mb-1">
                  <p className="text-lg font-semibold text-black cursor-auto">$149</p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                  </del>
                  <div className="ml-auto">
                    <span className="text-white mr-1 uppercase text-xs">Brand</span>
                  </div>

                </div>

                <div className=''>
                  <Link to="/product"
                    className="w-full animate-bounce focus:animate-none hover:animate-none inline-flex justify-center text-md font-medium bg-gradient-to-tr from-sky-100 to-sky-600  px-4 py-2 rounded-lg tracking-widest text-sky-50">
                    <span className="ml-2">Buy Now</span>
                  </Link>
                </div>

              </div>
            </Link>
          </div>
          <div
            className="w-full h-fit shadow-md  duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-xl rounded">
            <Link to={"/product"}>
              <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product" className="h-44 md:h-60  w-full object-fit rounded-t md:rounded-t-md" />
              <div className="px-4 pt-1 w-full bg-gradient-to-tr from-sky-50 to-sky-600 rounded-b">
                <p className="text-sm text-black truncate block capitalize">Product Name</p>
                <div className="flex items-center w-full mb-1">
                  <p className="text-lg font-semibold text-black cursor-auto">$149</p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                  </del>
                  <div className="ml-auto">
                    <span className="text-white mr-1 uppercase text-xs">Brand</span>
                  </div>

                </div>

                <div className=''>
                  <Link to="/product"
                    className="w-full animate-bounce focus:animate-none hover:animate-none inline-flex justify-center text-md font-medium bg-gradient-to-tr from-sky-100 to-sky-600  px-4 py-2 rounded-lg tracking-widest text-sky-50">
                    <span className="ml-2">Buy Now</span>
                  </Link>
                </div>

              </div>
            </Link>
          </div>
          <div
            className="w-full h-fit shadow-md  duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-xl rounded">
            <Link to={"/product"}>
              <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product" className="h-44 md:h-60  w-full object-fit rounded-t md:rounded-t-md" />
              <div className="px-4 pt-1 w-full bg-gradient-to-tr from-sky-50 to-sky-600 rounded-b">
                <p className="text-sm text-black truncate block capitalize">Product Name</p>
                <div className="flex items-center w-full mb-1">
                  <p className="text-lg font-semibold text-black cursor-auto">$149</p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                  </del>
                  <div className="ml-auto">
                    <span className="text-white mr-1 uppercase text-xs">Brand</span>
                  </div>

                </div>

                <div className=''>
                  <Link to="/product"
                    className="w-full animate-bounce focus:animate-none hover:animate-none inline-flex justify-center text-md font-medium bg-gradient-to-tr from-sky-100 to-sky-600  px-4 py-2 rounded-lg tracking-widest text-sky-50">
                    <span className="ml-2">Buy Now</span>
                  </Link>
                </div>

              </div>
            </Link>
          </div>
          <div
            className="w-full h-fit shadow-md  duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-xl rounded">
            <Link to={"/product"}>
              <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product" className="h-44 md:h-60  w-full object-fit rounded-t md:rounded-t-md" />
              <div className="px-4 pt-1 w-full bg-gradient-to-tr from-sky-50 to-sky-600 rounded-b">
                <p className="text-sm text-black truncate block capitalize">Product Name</p>
                <div className="flex items-center w-full mb-1">
                  <p className="text-lg font-semibold text-black cursor-auto">$149</p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                  </del>
                  <div className="ml-auto">
                    <span className="text-white mr-1 uppercase text-xs">Brand</span>
                  </div>

                </div>

                <div className=''>
                  <Link to="/product"
                    className="w-full animate-bounce focus:animate-none hover:animate-none inline-flex justify-center text-md font-medium bg-gradient-to-tr from-sky-100 to-sky-600  px-4 py-2 rounded-lg tracking-widest text-sky-50">
                    <span className="ml-2">Buy Now</span>
                  </Link>
                </div>

              </div>
            </Link>
          </div>
          <div
            className="w-full h-fit shadow-md  duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-xl rounded">
            <Link to={"/product"}>
              <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product" className="h-44 md:h-60  w-full object-fit rounded-t md:rounded-t-md" />
              <div className="px-4 pt-1 w-full bg-gradient-to-tr from-sky-50 to-sky-600 rounded-b">
                <p className="text-sm text-black truncate block capitalize">Product Name</p>
                <div className="flex items-center w-full mb-1">
                  <p className="text-lg font-semibold text-black cursor-auto">$149</p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                  </del>
                  <div className="ml-auto">
                    <span className="text-white mr-1 uppercase text-xs">Brand</span>
                  </div>

                </div>

                <div className=''>
                  <Link to="/product"
                    className="w-full animate-bounce focus:animate-none hover:animate-none inline-flex justify-center text-md font-medium bg-gradient-to-tr from-sky-100 to-sky-600  px-4 py-2 rounded-lg tracking-widest text-sky-50">
                    <span className="ml-2">Buy Now</span>
                  </Link>
                </div>

              </div>
            </Link>
          </div>
          <div
            className="w-full h-fit shadow-md  duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-xl rounded">
            <Link to={"/product"}>
              <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product" className="h-44 md:h-60  w-full object-fit rounded-t md:rounded-t-md" />
              <div className="px-4 pt-1 w-full bg-gradient-to-tr from-sky-50 to-sky-600 rounded-b">
                <p className="text-sm text-black truncate block capitalize">Product Name</p>
                <div className="flex items-center w-full mb-1">
                  <p className="text-lg font-semibold text-black cursor-auto">$149</p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                  </del>
                  <div className="ml-auto">
                    <span className="text-white mr-1 uppercase text-xs">Brand</span>
                  </div>

                </div>

                <div className=''>
                  <Link to="/product"
                    className="w-full animate-bounce focus:animate-none hover:animate-none inline-flex justify-center text-md font-medium bg-gradient-to-tr from-sky-100 to-sky-600  px-4 py-2 rounded-lg tracking-widest text-sky-50">
                    <span className="ml-2">Buy Now</span>
                  </Link>
                </div>

              </div>
            </Link>
          </div>
          <div
            className="w-full h-fit shadow-md  duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-xl rounded">
            <Link to={"/product"}>
              <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product" className="h-44 md:h-60  w-full object-fit rounded-t md:rounded-t-md" />
              <div className="px-4 pt-1 w-full bg-gradient-to-tr from-sky-50 to-sky-600 rounded-b">
                <p className="text-sm text-black truncate block capitalize">Product Name</p>
                <div className="flex items-center w-full mb-1">
                  <p className="text-lg font-semibold text-black cursor-auto">$149</p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                  </del>
                  <div className="ml-auto">
                    <span className="text-white mr-1 uppercase text-xs">Brand</span>
                  </div>

                </div>

                <div className=''>
                  <Link to="/product"
                    className="w-full animate-bounce focus:animate-none hover:animate-none inline-flex justify-center text-md font-medium bg-gradient-to-tr from-sky-100 to-sky-600  px-4 py-2 rounded-lg tracking-widest text-sky-50">
                    <span className="ml-2">Buy Now</span>
                  </Link>
                </div>

              </div>
            </Link>
          </div>
          <div
            className="w-full h-fit shadow-md  duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-xl rounded">
            <Link to={"/product"}>
              <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product" className="h-44 md:h-60  w-full object-fit rounded-t md:rounded-t-md" />
              <div className="px-4 pt-1 w-full bg-gradient-to-tr from-sky-50 to-sky-600 rounded-b">
                <p className="text-sm text-black truncate block capitalize">Product Name</p>
                <div className="flex items-center w-full mb-1">
                  <p className="text-lg font-semibold text-black cursor-auto">$149</p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                  </del>
                  <div className="ml-auto">
                    <span className="text-white mr-1 uppercase text-xs">Brand</span>
                  </div>

                </div>

                <div className=''>
                  <Link to="/product"
                    className="w-full animate-bounce focus:animate-none hover:animate-none inline-flex justify-center text-md font-medium bg-gradient-to-tr from-sky-100 to-sky-600  px-4 py-2 rounded-lg tracking-widest text-sky-50">
                    <span className="ml-2">Buy Now</span>
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
