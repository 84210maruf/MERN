import React from 'react'

function ProductItem({product}) {

  
  return (
   <>
   <h1>id: {product._id}</h1>
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
    <p>Ratings: {product.ratings}</p>
    <p>Brand: {product.brand}</p>
    <img src={product.image[0]} alt={product.title} />
    </>
  )
}

export default ProductItem
