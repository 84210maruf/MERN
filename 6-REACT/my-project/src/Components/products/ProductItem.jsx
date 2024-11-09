import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

const ProductItem = ({ item }) => {
  const { category } = useParams();
  const { user, createUser, state, dispatch } = useStateValue();  // Destructuring `basket` and `user` directly
  const { basket } = state;  // Access `basket` from `state`
  // const {
  //   _id = '',
  //   title = 'No title available',
  //   image = ['demoImg'],
  //   price = 0,
  //   discount = 0,
  //   description = 'No description available'
  // } = item;

  // Load basket from local storage on initial mount
  // useEffect(() => {
  //   const savedBasket = JSON.parse(localStorage.getItem('basket')) || [];
  //   if (savedBasket.length > 0) {
  //     dispatch({
  //       type: 'SET_BASKET',
  //       basket: savedBasket,
  //     });
  //   }
  // }, [dispatch]);

  // const addToBasket = () => {
  //   // Retrieve the current basket from local storage
  //   const savedBasket = JSON.parse(localStorage.getItem('basket')) || [];
  //   const updatedBasket = [...savedBasket, { ...item, quantity: 1 }];

  //   // Dispatch to add to the basket state
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: { ...item, quantity: 1 }
  //   });

  //   // Save updated basket to local storage
  //   localStorage.setItem('basket', JSON.stringify(updatedBasket));
  // };
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
  // Sync local storage whenever the basket state changes
  // const addToBasket = () => {
  //   const newItem = { ...item, quantity: 1 };

  //   // Save updated basket to local storage
  //   const updatedBasket = [...basket, newItem];
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: newItem,
  //   });
  //   localStorage.setItem('basket', JSON.stringify(updatedBasket));
  // };
  // Sync local storage whenever the basket state changes
  // useEffect(() => {
  //   localStorage.setItem('basket', JSON.stringify(basket));
  // }, [basket]);

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
