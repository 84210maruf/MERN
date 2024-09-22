import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'
import ProductItem from './ProductItem';



function Category_products() {

  const [{ basket }, dispatch] = useStateValue();

  const product = {
    id: 1,
    title: "rd shirt product 1",
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

    // console.log(basket)


  }




  return (
    <div className='bg-sky-50'>

      <div class="py-6">
        <fieldset class="border-t-2 mx-2 border-gray-600 rounded-xl">
          <legend class="px-6 text-2xl text-center">Category Collections</legend>
        </fieldset>
      </div>

      <ProductItem addToBasket={addToBasket} />



    </div>
  )
}

export default Category_products
