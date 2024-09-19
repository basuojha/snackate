import useFetchRestaurantData from '../../hooks/useFetchRestaurantData'
import React, { act, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import RestaurantLoader from '../RestaurantLoader'
import RestaurantImage from '../../assets/images/restaurant.png'
import DishCategories from '../DishCategories'
import Rating from '../Rating'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, clearCart, setCartRestaurant } from '../../redux/slices/cart'
import Popup from '../Popup'

const Restaurant = () => {
  const { id: restaurantId } = useParams()
  const [showModal, setShowModal] = useState(false)
  const [dishToAdd, setDishToAdd] = useState(null)
  const {
    restaurantData,
    loaded,
    error: apiError
  } = useFetchRestaurantData(restaurantId)
  const cartItems = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()

  useEffect(() => {
    if (cartItems.length === 0) {
      dispatch(setCartRestaurant(null))
    }
  }, [cartItems])

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

  const onChangeRestaurant = () => {
    dispatch(clearCart())
    dispatch(setCartRestaurant(restaurantData))
    setShowModal(false)
    if (dishToAdd) {
      dispatch(addItem(dishToAdd))
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  if (apiError) {
    return (
      <div id='no-result-container'>
        <div
          id='no-result-banner'
          className='flex justify-center flex-col items-center p-16'
        >
          <span id='no-result-text' className='font-bold text-4xl pb-4'>
            Shoot!
          </span>
          <span className='pb-4 text-xl'>{`No Restaurant Found :(`} </span>
          <span>
            {' '}
            Let's take you back to{' '}
            <Link to={'/'} className='underline'>
              {' '}
              Snackate{' '}
            </Link>
          </span>
          <img src={RestaurantImage} className='h-72 pt-4'></img>
        </div>
      </div>
    )
  }

  return loaded && restaurantData && !apiError ? (
    <div id='restaurant-page-container' className='px-[15%] py-16'>
      <div className='text-justify p-2'>
        <img
          src={imgSrc}
          id='restaurant-image-cover'
          className='rounded-lg h-72 w-full object-cover'
        ></img>
        <div id='restaurant-details-container' className='flex flex-col'>
          <div className='flex justify-between'>
            <h1
              id='restaurant-heading-title'
              className='font-bold text-3xl pb-2 text-[#7E4338] pt-8'
            >
              {name}
            </h1>
            <Rating rating={rating} style={'mt-8 mb-2'}></Rating>
          </div>
          <span className='font-bold text-md pb-2 text-[#C5705D]'>
            {address}
          </span>
          <div className='flex justify-between items-center'>
            <span
              id='color-text-item'
              className='text-lg font-bold pb-4 text-[#7E4338] pt-2'
            >
              {cuisine && cuisine.join(', ')}
            </span>
            <span className='font-bold text-md text-[#7E4338]'>
              {priceForTwo && `₹${priceForTwo / 100} for two`}
            </span>
          </div>
        </div>
        <h2
          id='menu-heading'
          className='pt-4 text-2xl font-bold text-[#C5705D] '
        >
          Menu
        </h2>
        <div id='menu-container' className='pt-4 flex flex-col gap-4'>
          {menu.map(category => {
            return (
              <DishCategories
                key={category.categoryId}
                category={category}
                restaurantData={restaurantData}
                setShowModal={setShowModal}
                setDishToAdd={setDishToAdd}
              />
            )
          })}
        </div>
        {showModal && (
          <Popup
            message={
              'You have items from another restaurant, do you want to change the restaurant?'
            }
            onClose={onChangeRestaurant}
            onCloseFail={closeModal}
            failBtnText={'No'}
            btnText={'Yes'}
            failCaseButton={true}
          />
        )}
      </div>
    </div>
  ) : (
    <div>
      <RestaurantLoader />
    </div>
  )
}

export default Restaurant
