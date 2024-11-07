// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// import { useStateValue } from '../../StateProvider';
// import {
//   getTotal,
//   getItemPriceTotal,
//   getItemDiscountTotal,
//   getBasketDiscountTotal,
//   getBasketPriceTotal,
//   getItemTotal
// } from '../../reducer';

// const Payment = () => {
//   const [{ basket, user }, dispatch] = useStateValue();
//   const navigate = useNavigate();
//   const shippingCost = 60;
//   // const address = {phone:'01321747121',house:'suza, ullapara'};

//   // Function to handle order confirmation
//   const confirmOrder = async () => {
//     try {
//       const orderData = {
//         user,
//         basket: basket,
//         shippingCost,
//         // address,
//         total: getTotal(basket) + shippingCost,
//       };

//       const response = await axios.post('/api/orders', orderData);

//       if (response.status === 201) {
//         dispatch({ type: 'EMPTY_BASKET' });
//         navigate('/thank-you');
//       } else {
//         console.error('Failed to save the order:', response.data);
//       }
//     } catch (error) {
//       console.error('Error confirming order:', error);
//     }
//   };

//   return (
//     <div>
//       <section className="bg-sky-50 py-8 antialiased dark:bg-gray-900 md:py-16">
//         <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
//           <h2 className="text-xl font-semibold text-center text-gray-900 dark:text-white sm:text-2xl">Complete Order</h2>

//           <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
//             <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
//               {basket.map(item => (
//                 <div key={item._id} className="rounded-lg border border-gray-200 bg-white p-2 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-4">
//                   <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
//                     <a href="#" className="shrink-0 md:order-1">
//                       <img className="h-20 w-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="product" />
//                     </a>
//                     <div className="flex items-center justify-between md:order-3 md:justify-end overflow-hidden">
//                       <div className="flex items-center">
//                         <button onClick={() => dispatch({ type: 'decrement', id: item._id })} type="button" className="h-5 w-5 rounded-md border bg-gray-100 hover:bg-gray-200 dark:bg-gray-700">
//                           <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 2">
//                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
//                           </svg>
//                         </button>
//                         <input type="text" className="w-10 text-center text-sm font-medium bg-transparent dark:text-white" value={item.quantity} readOnly />
//                         <button onClick={() => dispatch({ type: 'increment', id: item._id })} type="button" className="h-5 w-5 rounded-md border bg-gray-100 hover:bg-gray-200 dark:bg-gray-700">
//                           <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
//                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                           </svg>
//                         </button>
//                       </div>
//                       <div className="text-end md:order-4 md:w-32">
//                         <p className="text-sm text-gray-600 dark:text-white">Price: {getItemPriceTotal(basket, item._id)} Tk</p>
//                         <p className="text-sm text-orange-500">Discount: {getItemDiscountTotal(basket, item._id)} Tk</p>
//                         <p className="text-sm font-bold text-gray-900">SubTotal: {getItemTotal(basket, item._id)} Tk</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="text-center border-t pt-1">
//                     <h1 className="text-sm font-semibold">{item.title}</h1>
//                     <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
//               <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
//                 <p className="text-xl font-semibold text-gray-900 dark:text-white">Order Summary <span className="text-red-600">{basket.length}</span> items</p>
//                 <OrderSummaryRow label="Original price:" value={`${getBasketPriceTotal(basket)} Tk`} />
//                 <OrderSummaryRow label="Total Discount:" value={`${getBasketDiscountTotal(basket)} Tk`} isDiscount />
//                 <OrderSummaryRow label="SubTotal:" value={`${getTotal(basket)} Tk`} />
//                 <OrderSummaryRow label="Shipping Cost:" value={`${shippingCost} Tk`} />
//                 <OrderSummaryRow label="Tax:" value="Free" isDiscount />
//                 <OrderSummaryRow label="Total:" value={`${getTotal(basket) + shippingCost} Tk`} isTotal />
//                 <button onClick={confirmOrder} className="animate-bounce flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-md text-white bg-gradient-to-tr from-pink-600 to-sky-900">
//                   Order Confirmed
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// // Helper Component for Order Summary Rows
// const OrderSummaryRow = ({ label, value, isDiscount, isTotal }) => (
//   <dl className={`flex items-center justify-between gap-4 ${isTotal ? 'border-t pt-2' : ''}`}>
//     <dt className={`text-sm ${isDiscount ? 'text-orange-600' : 'text-gray-500'} dark:text-gray-400`}>{label}</dt>
//     <dd className={`text-sm ${isDiscount ? 'text-orange-500' : 'text-gray-900'} ${isTotal ? 'font-bold text-lg' : 'font-medium'} dark:text-white`}>{value}</dd>
//   </dl>
// );

// export default Payment;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useStateValue } from '../../StateProvider';
import {
  getTotal,
  getItemPriceTotal,
  getItemDiscountTotal,
  getBasketDiscountTotal,
  getBasketPriceTotal,
  getItemTotal
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
    postalCode: ''
  });

  // Handle address input change
  const handleAddressChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle order confirmation
  const confirmOrder = async () => {
    try {
      const orderData = {
        user,
        basket,
        shippingCost,
        address,  // Include address in order data
        total: getTotal(basket) + shippingCost,
      };

      const response = await axios.post('/api/orders', orderData);

      if (response.status === 201) {
        dispatch({ type: 'EMPTY_BASKET' });
        navigate('/thank-you');
      } else {
        console.error('Failed to save the order:', response.data);
      }
    } catch (error) {
      console.error('Error confirming order:', error);
    }
  };

  return (
    <div>
      <section className="bg-sky-50 py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-center text-gray-900 dark:text-white sm:text-2xl">Complete Order</h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              {/* Address Form */}
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Shipping Address</h3>
                <input type="text" name="phone" placeholder="Phone" value={address.phone} onChange={handleAddressChange} className="w-full p-2 mb-2 border rounded-md" />
                <input type="text" name="house" placeholder="House" value={address.house} onChange={handleAddressChange} className="w-full p-2 mb-2 border rounded-md" />
                <input type="text" name="street" placeholder="Street" value={address.street} onChange={handleAddressChange} className="w-full p-2 mb-2 border rounded-md" />
                <input type="text" name="city" placeholder="City" value={address.city} onChange={handleAddressChange} className="w-full p-2 mb-2 border rounded-md" />
                <input type="text" name="postalCode" placeholder="Postal Code" value={address.postalCode} onChange={handleAddressChange} className="w-full p-2 mb-2 border rounded-md" />
              </div>

              {/* Basket Items Display */}
              {basket.map(item => (
                <div key={item._id} className="rounded-lg border border-gray-200 bg-white p-2 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-4">
                  {/* Item details... */}
                </div>
              ))}
            </div>

            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              {/* Order Summary and Confirm Button */}
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Component for Order Summary Rows
const OrderSummaryRow = ({ label, value, isDiscount, isTotal }) => (
  <dl className={`flex items-center justify-between gap-4 ${isTotal ? 'border-t pt-2' : ''}`}>
    <dt className={`text-sm ${isDiscount ? 'text-orange-600' : 'text-gray-500'} dark:text-gray-400`}>{label}</dt>
    <dd className={`text-sm ${isDiscount ? 'text-orange-500' : 'text-gray-900'} ${isTotal ? 'font-bold text-lg' : 'font-medium'} dark:text-white`}>{value}</dd>
  </dl>
);

export default Payment;
