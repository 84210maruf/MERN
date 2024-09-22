import React from 'react'
import { Link } from 'react-router-dom'

import { useStateValue } from '../../StateProvider'
import ProductItem from './ProductItem';




function Products() {

  const [{ basket }, dispatch] = useStateValue();

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
  



  return (

    <div className='bg-sky-50'>

      <div className="py-6">
        <fieldset className="border-t-2 mx-2 border-gray-600 rounded-xl">
          <legend className="px-6 text-2xl text-center">Collections</legend>
        </fieldset>
      </div>

      <div>
        <h1 className='mx-2 text-md text-sky-600 font-semibold'>Category name</h1>

        <ProductItem addToBasket={addToBasket}/>

      </div>
      <div>
        <h1 className='mx-2 text-md text-sky-600 font-semibold'>Category name</h1>

        <ProductItem addToBasket={addToBasket}/>

      </div>


    </div>
  )
}

export default Products
