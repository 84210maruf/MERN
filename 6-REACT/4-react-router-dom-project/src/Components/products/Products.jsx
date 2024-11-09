import React from 'react'
import { Link } from 'react-router-dom'

import { useStateValue, useProductValue } from '../../StateProvider'
import ProductItem from './ProductItem';




function Products() {

  const {user, createUser, state, dispatch} = useStateValue();  // Destructuring `basket` and `user` directly
  const { basket } = state;

  const { products, loading, error } = useProductValue();


  //demo product for add to basket
  const product = {
    id: 2,
    title: "rd shirt product 2",
    image: "image",
    price: 100,
    discount: 50,
    rating: 5,
    quantity: 1
  };


  const addToBasket = () => {
    // Push the item into the data Layer

    dispatch({
      type: "ADD_TO_BASKET",
      item: product
    });
  }

  // console.log(basket)



  const uniqueCategories = [...new Set(products.map(item => item.category))];
  // console.log(uniqueCategories);

  // // const [uniqueProducts, setUniqueProducts] = useState(['']);
  // console.log(uniqueCategories.map(category =>
  //   products.find(item => item.category === category)))



  return (

    <div className='bg-customBg bg-opacity-50'>

      <div className="py-2">
        <fieldset className="border-t-2 mx-2 border-gray-600 rounded-xl">
          <legend className="px-6 text-2xl text-center">Collections</legend>
        </fieldset>
      </div>

      <div>

        <h1 className='mx-4 text-md text-sky-600 font-semibold'>Men</h1>
        <article id="container" className="w-full py-6 px-6 md:px-4 flex justify-center">
          <section id="Projects"
            className="w-[]  grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 justify-items-center justify-center gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4 place-content-center">

            {products
              .filter(item => item.category === 'Men')
              .slice(0, 5) // Get only the first 5 products
              .map(item => (
                <ProductItem key={item._id} item={item} addToBasket={addToBasket} />
              ))}

          </section>
        </article>
       








        <h1 className='mx-2 text-md text-sky-600 font-semibold'>Women</h1>
        <article id="container" className="w-full py-2 md:py-4 lg:py-6 px-2 md:px-4 flex justify-center">
          <section id="Projects"
            className="w-full  grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 justify-items-center justify-center gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4 place-content-center">

            {products
              .filter(item => item.category === 'Women')
              .slice(0, 5) // Get only the first 5 products
              .map(item => (
                <ProductItem key={item._id} item={item} addToBasket={addToBasket} />
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
                <ProductItem key={item._id} item={item} addToBasket={addToBasket} />
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
                <ProductItem key={item._id} item={item} addToBasket={addToBasket} />
              ))}


          </section>
        </article>

      </div>


    </div>
  )
}

export default Products
