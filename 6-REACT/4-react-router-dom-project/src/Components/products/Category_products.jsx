import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'
import ProductItem from './ProductItem';



function Category_products() {

  const [{ basket }, dispatch] = useStateValue();


  const addToBasket = () => {
    // Push the item into the data Layer

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: 1,
        title: "name",
        image: "image",
        price: 100,
        discount: 50,
        rating: 5,
      },
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
