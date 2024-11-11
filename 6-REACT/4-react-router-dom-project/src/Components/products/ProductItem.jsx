import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

const ProductItem = ({ item }) => {
  const { category } = useParams();
  const { user, createUser, state, dispatch } = useStateValue();  // Destructuring `basket` and `user` directly
  const { basket } = state;  // Access `basket` from `state`

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        _id: item._id,
        title: item.title,
        description: item.description,
        image: item.image,
        price: item.price,
        discount: item.discount,
        quantity: 1,
        size: item.size[0],
        color: item.color[0],
      },
    });
  };

  return (
    <div className="product-item border-2 border-customBg-800 rounded-md text-center">     

      <Link to={`/product/${item._id}`}>
        <img src={item.image[1]} alt={item.title} className="product-image" />
        <h2>{item.title}</h2>
        <p>{item.price} Tk</p>
      </Link>
      
      <button onClick={addToBasket}>Add to Basket !!</button>
    </div>
  );
};

export default ProductItem;
