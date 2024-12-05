import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import { useStateValue } from '../../StateProvider';
import {
  getTotal,
  getItemPriceTotal,
  getItemDiscountTotal,
  getBasketDiscountTotal,
  getBasketPriceTotal,
  getItemTotal,
} from '../../reducer';

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const shippingCost = 60;

  // State for address input fields
  const [address, setAddress] = useState({
    phone: '',
    house: '',
    street: '',
    city: '',
    postalCode: '',
  });

  // State for error handling
  const [error, setError] = useState(null);

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const validateAddress = () => {
    const { phone, house, street, city, postalCode } = address;
    if (!phone || !house || !street || !city || !postalCode) {
      setError('All address fields are required.');
      return false;
    }
    setError(null);
    return true;
  };

  const confirmOrder = async () => {
    if (!validateAddress()) return;

    try {
      const orderData = {
        user,
        basket,
        shippingCost,
        address,
        total: getTotal(basket) + shippingCost,
      };

      const response = await axios.post('/api/orders', orderData);

      if (response.status === 201) {
        dispatch({ type: 'EMPTY_BASKET' });
        navigate('/thank-you');
      } else {
        setError('Failed to save the order. Please try again.');
      }
    } catch (error) {
      setError('Error confirming order. Please try again.');
    }
  };

  return (
    <div>
      <section className="bg-sky-50 py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-center text-gray-900 dark:text-white sm:text-2xl">Complete your orders</h2>
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <BasketItemsList basket={basket} dispatch={dispatch} />
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <AddressForm address={address} handleAddressChange={handleAddressChange} error={error} />
              <OrderSummary basket={basket} shippingCost={shippingCost} confirmOrder={confirmOrder} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Basket Items List Component
const BasketItemsList = ({ basket, dispatch }) => (
  <div className="space-y-6 p-4 bg-gray-100 dark:bg-gray-900">
    {basket.map((item) => (
      <div
        key={item._id}
        className="rounded-lg border border-gray-200 bg-white shadow-lg p-6 transition hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-center">

          {/* Item Image */}
          <Link to={`/product/${item._id}`} className="flex justify-center md:justify-start">
            <img
              className="h-32 w-32 rounded-md object-cover border border-gray-300 dark:border-gray-600"
              src={item.image[0]}
              alt={item.title}
            />
          </Link>

          {/* Item Info */}
          <div className="space-y-2 text-center md:text-left">
            <Link
              to={`/product/${item._id}`}
              className="text-lg font-semibold text-gray-900 hover:text-sky-500 dark:text-white"
            >
              {item.title}
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">Size: <span className="text-gray-900 dark:text-sky-400">{item.size}</span></p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Color: <span className="text-gray-900 dark:text-sky-400">{item.color}</span></p>
          </div>

          {/* Pricing and Actions */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <p className="text-base font-bold text-gray-900 dark:text-white">
              Price: <span className="text-sky-500">{getItemPriceTotal(basket, item._id)} Tk</span>
            </p>
            <p className="text-sm font-medium text-orange-500 dark:text-orange-300">
              Discount: {getItemDiscountTotal(basket, item._id)} Tk
            </p>

            <div className="flex items-center space-x-2">
              {/* Decrement Button */}
              <button
                onClick={() => dispatch({ type: 'decrement', id: item._id })}
                className="flex items-center justify-center h-8 w-8 rounded-md border border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              >
                -
              </button>

              {/* Quantity Display */}
              <span className="px-3 py-1 text-gray-900 bg-gray-100 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {item.quantity}
              </span>

              {/* Increment Button */}
              <button
                onClick={() => dispatch({ type: 'increment', id: item._id })}
                className="flex items-center justify-center h-8 w-8 rounded-md border border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              >
                +
              </button>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => dispatch({ type: 'REMOVE_FROM_BASKET', item })}
              className="mt-3 text-sm font-medium text-red-500 hover:underline dark:text-red-400"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Quantity Controls Component
const QuantityControls = ({ item, dispatch }) => (
  <div className="flex items-center">
    <button onClick={() => dispatch({ type: 'decrement', id: item._id })} type="button" className="h-5 w-5 rounded-md border bg-gray-100 hover:bg-gray-200 dark:bg-gray-700">
      <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 2">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
      </svg>
    </button>
    <input type="text" className="w-10 text-center text-sm font-medium bg-transparent dark:text-white" value={item.quantity} readOnly />
    <button onClick={() => dispatch({ type: 'increment', id: item._id })} type="button" className="h-5 w-5 rounded-md border bg-gray-100 hover:bg-gray-200 dark:bg-gray-700">
      <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
      </svg>
    </button>
  </div>
);

// Price Summary Component
const PriceSummary = ({ item, basket }) => (
  <div className="text-end md:order-4 md:w-32">
    <p className="text-sm text-gray-600 dark:text-white">Price: {getItemPriceTotal(basket, item._id)} Tk</p>
    <p className="text-sm text-orange-500">Discount: {getItemDiscountTotal(basket, item._id)} Tk</p>
    <p className="text-sm font-bold text-gray-900">SubTotal: {getItemTotal(basket, item._id)} Tk</p>
  </div>
);

// Address Form Component
const AddressForm = ({ address, handleAddressChange, error }) => (
  <div className="space-y-4 mb-5 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Shipping Address</h3>
    {error && <p className="text-red-500 text-sm">{error}</p>}
    <input type="text" name="phone" placeholder="Phone" value={address.phone} onChange={handleAddressChange} className="w-full p-2 mb-2 border rounded-md" />
    <input type="text" name="house" placeholder="House" value={address.house} onChange={handleAddressChange} className="w-full p-2 mb-2 border rounded-md" />
    <input type="text" name="street" placeholder="Street" value={address.street} onChange={handleAddressChange} className="w-full p-2 mb-2 border rounded-md" />
    <input type="text" name="city" placeholder="City" value={address.city} onChange={handleAddressChange} className="w-full p-2 mb-2 border rounded-md" />
    <input type="text" name="postalCode" placeholder="Postal Code" value={address.postalCode} onChange={handleAddressChange} className="w-full p-2 mb-2 border rounded-md" />
  </div>
);

// Order Summary Component
const OrderSummary = ({ basket, shippingCost, confirmOrder }) => (
  <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
    <p className="text-xl font-semibold text-gray-900 dark:text-white">Order Summary</p>
    <OrderSummaryRow label="Original price:" value={`${getBasketPriceTotal(basket)} Tk`} />
    <OrderSummaryRow label="Total Discount:" value={`${getBasketDiscountTotal(basket)} Tk`} isDiscount />
    <OrderSummaryRow label="SubTotal:" value={`${getTotal(basket)} Tk`} />
    <OrderSummaryRow label="Shipping Cost:" value={`${shippingCost} Tk`} />
    <OrderSummaryRow label="Tax:" value="Free" isDiscount />
    <OrderSummaryRow label="Total:" value={`${getTotal(basket) + shippingCost} Tk`} isTotal />
    <button onClick={confirmOrder} className="animate-bounce flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-md text-white bg-gradient-to-tr from-pink-600 to-sky-900">
      Confirm Order
    </button>
  </div>
);

const OrderSummaryRow = ({ label, value, isDiscount, isTotal }) => (
  <dl className={`flex items-center justify-between gap-4 ${isTotal ? 'border-t pt-2' : ''}`}>
    <dt className={`text-sm ${isDiscount ? 'text-orange-600' : 'text-gray-500'} dark:text-gray-400`}>{label}</dt>
    <dd className={`text-sm ${isDiscount ? 'text-orange-500' : 'text-gray-900'} ${isTotal ? 'font-bold text-lg' : 'font-medium'} dark:text-white`}>{value}</dd>
  </dl>
);

export default Payment;
