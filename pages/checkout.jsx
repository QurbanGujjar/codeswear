import React from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Checkout = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  return (
    <div className='container mx-2 sm:m-auto'>
      <h1 className='font-bold my-8 text-center text-xl'>Checkout</h1>
      <h2 className="font-semibold text-xl">1. Delivery Details</h2>
      <div className='mx-auto flex'>
        <div className='px-2 w-1/2'>
          <div className='mx-auto mb-2'>
            <label htmlFor='email' className='leading-7 text-sm text-gray-600'>
              Name
            </label>
            <input
              type='name'
              name='name'
              id='name'
              className='w-full bg-white rounded border
        border-gray-300 focus:border-pink-500 focus:ring-2 test-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
        </div>

        <div className='px-2 w-1/2'>
          <div className='mx-auto mb-2'>
            <label htmlFor='email' className='leading-7 text-sm text-gray-600'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='w-full bg-white rounded border
        border-gray-300 focus:border-pink-500 focus:ring-2 test-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
        </div>
      </div>
      <div className='px-2 w-full'>
          <div className='mx-auto mb-2'>
            <label htmlFor='address' className='leading-7 text-sm text-gray-600'>
              Address
            </label>
            <textarea

              name='address'
              id='address'
              cols='30' rows="2"
              className='w-full bg-white rounded border
        border-gray-300 focus:border-pink-500 focus:ring-2 test-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            >
            </textarea>
          </div>
        </div>
        <div className='mx-auto flex'>
        <div className='px-2 w-1/2'>
          <div className='mx-auto mb-2'>
            <label htmlFor='phone' className='leading-7 text-sm text-gray-600'>
              Phone
            </label>
            <input
              type='text'
              name='phone'
              id='phone'
              className='w-full bg-white rounded border
        border-gray-300 focus:border-pink-500 focus:ring-2 test-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className='mx-auto mb-2'>
            <label htmlFor='city' className='leading-7 text-sm text-gray-600'>
            City
            </label>
            <input
              type='text'
              name='city'
              id='city'
              className='w-full bg-white rounded border
        border-gray-300 focus:border-pink-500 focus:ring-2 test-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
        </div>


      </div>
      <div className='mx-auto flex'>
      <div className='px-2 w-1/2'>
          <div className='mx-auto mb-2'>
            <label htmlFor='state' className='leading-7 text-sm text-gray-600'>
            State
            </label>
            <input
              type='text'
              name='state'
              id='state'
              className='w-full bg-white rounded border
        border-gray-300 focus:border-pink-500 focus:ring-2 test-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
        </div>

        <div className='px-2 w-1/2'>
          <div className='mx-auto mb-2'>
            <label htmlFor='email' className='leading-7 text-sm text-gray-600'>
              Pin
            </label>
            <input
              type='text'
              name='pin'
              id='pin'
              className='w-full bg-white rounded border
        border-gray-300 focus:border-pink-500 focus:ring-2 test-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
        </div>
      </div>
      <h2 className="font-semibold text-xl">2. Review Cart Items  </h2>
      <div className='sideCart h-[100v] bg-pink-100 p-10 '>
        <h2 className='font-bold text-xl'>Shopping Cart</h2>

        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length === 0 && (
            <div className='my-4 font-semibold'>Your Cart is Empty</div>
          )}
          {
            Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className='item flex my-5'>
                    <div className='w-2/3 font-semibold '>{cart[k].name}</div>
                    <div className='flex font-semibold items-center justify-center w-1/3 text-lg'>
                      <AiFillMinusCircle
                        className='cursor-pointer text-pink-500'
                        onClick={() => {
                          removeFromCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                      />
                      <span className='mx-2 text-lg'>{cart[k].qty}</span>
                      <AiFillPlusCircle
                        onClick={() => {
                          addToCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                        className='cursor-pointer text-pink-500'
                      />
                    </div>
                  </div>
                </li>
              );
            }) /* */
          }
        </ol>
<span className="font-bold">{subTotal}</span>
      </div>
      <div className='mx-4'>
          <button
            onClick={clearCart}
            className='flex mr-2  text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm '
          >
            Pay RS-{subTotal}
          </button>
        </div>
    </div>
  );
};

export default Checkout;
