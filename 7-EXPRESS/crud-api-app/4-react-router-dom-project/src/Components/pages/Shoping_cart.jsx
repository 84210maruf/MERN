import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useStateValue } from '../../StateProvider'
import { getTotal, getBasketDiscountTotal, getBasketPriceTotal, getItemTotal, getItemPriceTotal, getItemDiscountTotal } from '../../reducer';


function Shoping_cart() {

  const shipingCost = 60;

  const [{ basket, user }, dispatch] = useStateValue();


  return (
    <div>

      <section className="bg-sky-50 py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className='flex justify-around'>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

            <div className='text-sm text-sky-500'>
              {user ? (
                <>
                  <p>Hallow  <b>{user.email}</b></p>
                  {/* <p>gmail : <b>{user.email}</b></p> */}
                  {/* <button className='btn btn-ghost btn-sm w-full' onClick={handleLogout}>logout</button> */}
                </>
              ) : (<p></p>)}
            </div>
          </div>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">

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

              </div>

            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary <span className='text-red-600'>{basket?.length}</span> items</p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-sm font-normal text-gray-500 dark:text-gray-400">Original price : </dt>
                      <dd className="text-sm font-medium text-gray-900 dark:text-white">{getBasketPriceTotal(basket)} Tk</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-sm font-normal text-orange-500 dark:text-gray-400">Total Discount : </dt>
                      <dd className="text-sm font-medium text-orange-600">{getBasketDiscountTotal(basket)} Tk</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt className="text-[14px] font-semibold  text-gray-500 dark:text-white">SubTotal</dt>
                      <dd className="text-sm font-semibold text-gray-500 dark:text-white">{getTotal(basket)} Tk</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-sm font-normal text-gray-500 dark:text-gray-400">Shiping Cost : </dt>
                      <dd className="text-sm font-medium text-gray-900 dark:text-white">{shipingCost} Tk</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-sm font-normal text-gray-500 dark:text-gray-400">Tax :</dt>
                      <dd className="text-sm font-medium text-orange-500 dark:text-white">Free</dd>
                    </dl>
                  </div>



                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>

                    <dd className="text-base font-bold text-gray-900 dark:text-white">{
                      getTotal(basket) === 0 ? getTotal(basket) : getTotal(basket) + shipingCost
                    } Taka</dd>
                  </dl>
                </div>

                <Link
                  to={getTotal(basket) === 0 ? "#" : "/payment"}
                  className={`flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-md font-medium transition duration-200 
    ${getTotal(basket) === 0
                      ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                      : "bg-gradient-to-tr from-sky-500 to-sky-800 text-sky-50 hover:text-white hover:bg-sky-600 focus:ring-2 focus:ring-blue-600"
                    }`}
                  aria-label="Proceed to Checkout"
                  onClick={(e) => {
                    if (getTotal(basket) === 0) e.preventDefault();
                  }}
                >
                  Proceed to Checkout
                </Link>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>

                  <Link to={"/products"} className="inline-flex items-center gap-2 text-sm font-medium text-sky-800 underline hover:no-underline dark:text-primary-500">
                    Continue Shopping

                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                  </Link>

                </div>
              </div>


            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Shoping_cart
