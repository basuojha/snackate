import React, { useEffect, useState } from 'react'
import Dish from '../Dish'
import { useDispatch, useSelector } from 'react-redux'
import { setCartRestaurant } from '../../redux/slices/cart'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cartItems, selectedRestaurant = {} } = useSelector(state => {
    const {
      cart: { selectedRestaurant, cartItems }
    } = state
    return {
      cartItems,
      selectedRestaurant
    }
  })
  console.log({ selectedRestaurant })
  const [selectedOption, setSelectedOption] = useState('card')
  const [cardDetails, setCardDetails] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
    if (cartItems.length === 0) {
      dispatch(setCartRestaurant(null))
    }
  }, [cartItems])
  const showTotal = () => {
    let discountedTotal = 0
    let fullPriceTotal = 0
    const deliveryPrice = 50
    cartItems.forEach(item => {
      discountedTotal += item.quantity * item.discountedPrice
      fullPriceTotal += item.quantity * item.itemPrice
    })
    return (
      <div className='flex gap-2 flex-col'>
        <div className='flex justify-between'>
          <span className='text-md font-normal'>Total:</span>
          <span className='text-md font-normal'>₹{fullPriceTotal}</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-md font-normal'>Discount:</span>
          <span className='text-md font-normal'>
            ₹{fullPriceTotal - discountedTotal}
          </span>
        </div>
        <div className='flex justify-between'>
          <span className='text-md font-normal'>Delivery Charges:</span>
          <span className='text-md font-normal'>₹{deliveryPrice}</span>
        </div>
        <div className='flex justify-between'>
          <span>Total to Pay:</span>
          <span>₹{discountedTotal + deliveryPrice}</span>
        </div>
      </div>
    )
  }

  const handleOptionChange = event => {
    if (event.target.value === 'cod') {
      setCardDetails({})
    }
    setSelectedOption(event.target.value)
  }
  return (
    <div id='cart-container' className='px-[15%] py-16 flex-1'>
      <div className='text-justify p-2'>
        <h1
          id='heading-title'
          className='font-bold text-3xl pb-4 text-[#7E4338]'
        >
          Cart
        </h1>
        {cartItems && cartItems.length > 0 ? (
          <div className='flex flex-col'>
            <span className='font-semibold text-2xl text-[#7E4338]'>
              {selectedRestaurant.name}
            </span>
            <span className='font-semibold text-lg text-[#C5705D]'>
              {selectedRestaurant.address}
            </span>
            <div className='flex justify-between gap-16 pt-8'>
              <div className='flex flex-col gap-2 w-full'>
                {cartItems.map((dish, index) => (
                  <Dish key={index} dish={dish} isCartPage={true} />
                ))}
              </div>
              <div className='w-2/4 bg-[#C5705D] rounded-lg p-8 sticky top-4 self-start'>
                <textarea
                  className='mb-4 max-h-40 rounded-lg p-2 text-sm w-full min-h-[56px]'
                  placeholder='Any notes/customizations or allergies we should know about?'
                ></textarea>
                <span className='text-lg font-bold text-white'>
                  {showTotal()}
                </span>
              </div>
            </div>
            <div className='pt-8'>
              <span className='text-[#7E4338] font-bold text-xl py-6'>
                Choose your mode of payment
              </span>
              <div className='flex flex-col gap-4 mt-4'>
                <div className='flex flex-col'>
                  <div>
                    <input
                      type='radio'
                      id='card'
                      name='card'
                      value='card'
                      checked={selectedOption === 'card'}
                      onChange={handleOptionChange}
                      className='bg-[#7E4338]'
                    />
                    <label
                      htmlFor='card'
                      className='pl-2 font-semibold text-lg text-[#C5705D]'
                    >
                      Credit/Debit Card
                    </label>
                  </div>
                  {selectedOption === 'card' && (
                    <div>
                      <div>
                        <input
                          type='text'
                          value={cardDetails.cardNumber}
                          name='cardNumber'
                          onChange={e => {
                            setCardDetails({
                              ...cardDetails,
                              cardNumber: e.target.value
                            })
                          }}
                          placeholder='Enter your card number'
                          className='border-2 border-[#7E4338] w-56 py-1 px-2 mt-2 rounded-md'
                        ></input>
                        <input
                          type='text'
                          value={cardDetails.cvv}
                          name='cvv'
                          onChange={e => {
                            setCardDetails({
                              ...cardDetails,
                              cvv: e.target.value
                            })
                          }}
                          placeholder='CVV'
                          className='border-2 border-[#7E4338] w-16 ml-2 py-1 px-2 mt-2 rounded-md'
                        ></input>
                      </div>
                      <div className='flex items-center'>
                        <input
                          type='text'
                          value={cardDetails.expiry}
                          name='expiry'
                          onChange={e => {
                            setCardDetails({
                              ...cardDetails,
                              expiry: e.target.value
                            })
                          }}
                          placeholder='Expiry'
                          className='border-2 border-[#7E4338] w-20 py-1 px-2 mt-2 rounded-md'
                        ></input>
                        <span className='relative top-1 px-2'>{`(in MM/YY)`}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className=''>
                  <input
                    type='radio'
                    id='cod'
                    name='cod'
                    value='cod'
                    checked={selectedOption === 'cod'}
                    onChange={handleOptionChange}
                  />
                  <label
                    htmlFor='cod'
                    className='pl-2 font-semibold text-lg text-[#C5705D]  '
                  >
                    Cash On Delivery
                  </label>
                </div>
                <button
                  className='rounded-md p-4 text-white bg-[#7E4338] font-semibold'
                  onClick={() => {
                    alert(JSON.stringify(cardDetails))
                  }}
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <h2 className='text-[#7E4338] font-bold text-xl py-6'>
            Your cart is empty!{' '}
            <Link to={'/'} className='underline'>
              Let's get you something to eat!
            </Link>
          </h2>
        )}
      </div>
    </div>
  )
}

export default Cart
