import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useProductValue } from '../../StateProvider'
import ProductItem from './ProductItem';
import axios from 'axios';




function Products() {


  // const { products, loading, error } = useProductValue();
  // console.log('Existing data:',products)

  // const uniqueCategories = [...new Set(products.map(item => item.category))];
  // // console.log(uniqueCategories);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchP = async () => {
    try {
      const response = await axios.get('/api/products');
      console.log("Fetched Data:", response.data);
      setProducts(response.data)
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  console.log("Hello from products");
  console.log('products: ', products);

  useEffect(() => {
    fetchP();
  }, []);

  //   const uniqueCategories = [...new Set(products.map(item => item.category))];
  // // console.log(uniqueCategories);


  return (

    <div className='bg-customBg'>

      <div className="py-2">
        <fieldset className="border-t-2 mx-2 border-gray-600 rounded-xl">
          <legend className="px-6 text-2xl text-center">Our Collections</legend>
        </fieldset>
      </div>

      <div>

        <h1 className=' mx-4 text-md text-sky-600 font-semibold'>Men</h1>
        <article id="container" className="w-full py-6 px-2 md:px-4 flex justify-center">
          <section id="Projects"
            className="w-full  grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 justify-items-center justify-center gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4 place-content-center">

            {products
              .filter(item => item.category === 'men')
              .slice(0, 5) // Get only the first 5 products
              .map(item => (

                <ProductItem key={item.productId} item={item} />
              ))}

          </section>
        </article>
        <h1 className='mx-2 text-md text-sky-600 font-semibold'>Women</h1>
        <article id="container" className="w-full py-2 md:py-4 lg:py-6 px-2 md:px-4 flex justify-center">
          <section id="Projects"
            className="w-full  grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 justify-items-center justify-center gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4 place-content-center">

            {products
              .filter(item => item.category === 'women')
              .slice(0, 5) // Get only the first 5 products
              .map(item => (
                <ProductItem key={item._id} item={item} />
              ))}

          </section>
        </article>

        <h1 className='mx-2 text-md text-sky-600 font-semibold'>Kids</h1>
        <article id="container" className="w-full py-2 md:py-4 lg:py-6 px-2 md:px-4 flex justify-center">
          <section id="Projects"
            className="w-full  grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 justify-items-center justify-center gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4 place-content-center">

            {products
              .filter(item => item.category === 'kids')
              .slice(0, 5) // Get only the first 5 products
              .map(item => (
                <ProductItem key={item._id} item={item} />
              ))}

          </section>
        </article>



        <div className='mx-2 text-md text-sky-600 font-semibold'>Mina's Dream</div>
        <article id="container" className="w-full py-2 md:py-4 lg:py-6 px-2 md:px-4 flex justify-center">
          <section id="Projects"
            className="w-full  grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 justify-items-center justify-center gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4 place-content-center">

            {products
              .filter(item => item.brand === 'minasDream')
              .slice(0, 5) // Get only the first 5 products
              .map(item => (
                <ProductItem key={item._id} item={item} />
              ))}


          </section>
        </article>

      </div>
     
      <div className='mx-2 text-md text-sky-600 font-semibold'>minasdream</div>
      <article id="container" className="w-full py-2 md:py-4 lg:py-6 px-2 md:px-4 flex justify-center">
        <section id="Projects"
          className="w-full  grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 justify-items-center justify-center gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4 place-content-center">

          {products
            .filter(item => item.brand === 'minasdream')
            .slice(0, 5) // Get only the first 5 products
            .map(item => (
              <ProductItem key={item._id} item={item} />
            ))}


        </section>
      </article>

      <div className='mx-2 text-md text-sky-600 font-semibold'>Winter Session</div>
      <article id="container" className="w-full py-2 md:py-4 lg:py-6 px-2 md:px-4 flex justify-center">
        <section id="Projects"
          className="w-full  grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 justify-items-center justify-center gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4 place-content-center">

          {products
            .filter(item => item.session === 'winter')
            .slice(0, 5) // Get only the first 5 products
            .map(item => (
              <ProductItem key={item._id} item={item} />
            ))}


        </section>
      </article>

 


    </div >
  )
}

export default Products
