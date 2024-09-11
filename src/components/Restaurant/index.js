import useFetchRestaurantData from '../../hooks/useFetchRestaurantData'
import React, { act, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Restaurant = () => {
  const { id: restaurantId } = useParams()
  const [quantity, setQuantity] = useState({})
  const { restaurantData, loaded } = useFetchRestaurantData(restaurantId)

  const {
    address,
    cuisine,
    discount,
    id,
    imgSrc,
    menu,
    name,
    priceForTwo,
    rating,
    timeForDelivery
  } = restaurantData || {}

  const quantityHandler = ({ id, action }) => {
    const currentQuantity = quantity[id] || 0
    if (action === 'remove') {
      const newQuantity = { ...quantity }
      if (currentQuantity > 1) {
        newQuantity[id] = currentQuantity - 1
        setQuantity(newQuantity)
      } else if (currentQuantity === 1) {
        delete newQuantity[id]
        setQuantity(newQuantity)
      }
    }
    if (action === 'add') {
      const newQuantity = { ...quantity }
      newQuantity[id] = currentQuantity + 1
      setQuantity(newQuantity)
    }
  }

  const renderMenu = () =>
    menu.map((item, index) => {
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
      } = item
      return (
        <div key={index} className='menu-item-container'>
          <div className='item-name-container'>
            <img className='item-image-container' src={itemPhoto}></img>
            <div className='item-details-container'>
              <h4 className='item-heading'>{itemName}</h4>
              <span className='item-text .text-truncate'>
                {itemDescription}
              </span>
              <span className='color-text-item item-text'>{calories} kcal</span>
            </div>
          </div>
          <div className='quantity-price-container'>
            <div className='price-container'>
              <span className='original-price'>₹{itemPrice}</span>
              <span className='discounted-price'>₹{discountedPrice}</span>
            </div>
            <div className='quantity-container'>
              <button
                className='add-subtract-icon'
                onClick={() => quantityHandler({ id, action: 'remove' })}
              >
                -
              </button>
              <div className='quantity'>{quantity[id] || 0}</div>
              <button
                className='add-subtract-icon'
                onClick={() => quantityHandler({ id, action: 'add' })}
              >
                +
              </button>
            </div>
          </div>
        </div>
      )
    })

  console.log({ quantity })
  return loaded && restaurantData ? (
    <div className='restaurant-page-container'>
      <img src={imgSrc} className='restaurant-image-cover'></img>
      <div className='restaurant-details-container'>
        <h1 className='restaurant-heading-title'>{name}</h1>
        <span>{address}</span>
        <h4 className='color-text-item'>{cuisine.join(', ')}</h4>
      </div>
      <h2 className='menu-heading'>Menu</h2>
      <div className='menu-container'>{renderMenu(menu)}</div>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default Restaurant
