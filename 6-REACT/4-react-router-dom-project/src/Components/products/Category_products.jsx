import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useStateValue, useProductValue } from '../../StateProvider'
import ProductItem from './ProductItem';




function Category_products() {

  const { category } = useParams(); // Get category from URL
  console.log(category)

  const { products, loading, error } = useProductValue();
  console.log(products)

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
    })
  }


  return (
    <div className='bg-sky-50'>

      <div class="py-6">
        <fieldset class="border-t-2 mx-2 border-gray-600 rounded-xl">
          <legend class="px-6 text-2xl text-center">id:Category Collections</legend>
        </fieldset>
      </div>

      <article id="container" className="w-full py-2 md:py-4 lg:py-6 px-2 md:px-4 flex justify-center">
        <section id="Projects"
          className="w-full  grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 justify-items-center justify-center gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4 place-content-center">

          {products.map(item =>

            item.category === 'women' && <ProductItem key={item._id} item={item} addToBasket={addToBasket} />
          )}
          category_product page


        </section>
      </article>


    </div>
  )
}

export default Category_products
