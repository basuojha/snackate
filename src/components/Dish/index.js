import { useDispatch, useSelector } from 'react-redux'
import {
  addItem,
  clearCart,
  removeItem,
  setCartRestaurant
} from '../../redux/slices/cart'
import Popup from '../Popup'
import { useState } from 'react'

const Dish = ({
  dish,
  isCartPage,
  restaurantData,
  setShowModal,
  setDishToAdd
}) => {
  const {
    id,
    itemName,
    itemPrice,
    calories,
    discountedPrice,
    discountPercent,
    itemPhoto,
    itemDescription,
    customizable,
    customizations
  } = dish

  const { id: restaurantId } = restaurantData || {}
  const { cartItems, selectedRestaurant } = useSelector(state => {
    const { cart: { cartItems, selectedRestaurant } = {} } = state
    return {
      cartItems,
      selectedRestaurant
    }
  })
  const dispatch = useDispatch()

  const getQuantity = ({ dish }) => {
    let quantity = 0
    if (
      (selectedRestaurant && selectedRestaurant.id) === restaurantId ||
      isCartPage
    ) {
      const item = cartItems.find(({ id }) => id === dish.id)
      quantity = item ? item.quantity : 0
    }
    return quantity
  }

  return (
    <div id='menu-item-container' className={`flex justify-between`}>
      <div
        id='item-name-container'
        className={`flex gap-4 ${isCartPage && 'w-[70%]'}`}
      >
        <img
          id='item-image-container'
          className={`h-36 w-64 object-cover rounded-xl ${
            isCartPage && 'w-1/2'
          }`}
          src={itemPhoto}
        ></img>
        <div
          id='item-details-container'
          className={`flex flex-col ${isCartPage && 'w-1/2'}`}
        >
          <h4
            id='item-heading'
            className='font-semibold text-lg text-[#7E4338]'
          >
            {itemName}
          </h4>
          <span id='item-text' className='truncate'>
            {itemDescription}
          </span>
          <span id='color-text-item' className='text-[#C5705D] font-semibold'>
            {calories} kcal
          </span>
        </div>
      </div>
      <div
        id='quantity-price-container'
        className={`flex flex-col ${isCartPage && 'w-[20%]'}`}
      >
        <div
          id='price-container'
          className='relative pb-6 flex gap-1 justify-end'
        >
          <span id='original-price' className='text-gray-500 line-through'>
            ₹{itemPrice}
          </span>
          <span id='discounted-price'>₹{discountedPrice}</span>
        </div>
        <div id='quantity-container' className='flex justify-end'>
          <button
            id='add-subtract-icon'
            className='rounded-md px-2 py-1 bg-[#C5705D] text-white items-center flex justify-center h-3/4 w-10'
            onClick={() => {
              dispatch(removeItem(dish))
            }}
            data-testid='sub-quantity'
          >
            -
          </button>
          <div
            id='quantity'
            className='rounded-md px-2 py-1 bg-white text-black items-center flex justify-center h-3/4 w-10'
          >
            {getQuantity({ dish })}
          </div>
          <button
            id='add-subtract-icon'
            data-testid='add-quantity'
            className='rounded-md px-2 py-1 bg-[#C5705D] text-white items-center flex justify-center h-3/4  w-10'
            onClick={() => {
              if (restaurantId && !selectedRestaurant) {
                dispatch(setCartRestaurant(restaurantData))
                dispatch(addItem(dish))
              } else if (
                restaurantId &&
                selectedRestaurant.id !== restaurantId
              ) {
                setDishToAdd(dish)
                setShowModal(true)
              } else {
                dispatch(addItem(dish))
              }
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dish
