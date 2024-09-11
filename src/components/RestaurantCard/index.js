import Rating from '../Rating'
import DiscountBanner from '../../assets/images/discountBanner.png'
import RestaurantImage from '../../assets/images/restaurant.png'
import getTimeString from '../../utils/getTimeString'
import { Link } from 'react-router-dom'

const RestaurantCard = props => {
  const {
    restaurant: {
      name,
      timeForDelivery,
      address,
      imgSrc,
      rating,
      priceForTwo,
      cuisine,
      discount,
      id
    } = {}
  } = props
  return (
    <Link to={`/restaurant/${id}`} className='restaurant-card'>
      <div className='card-item'>
        <img className='restaurant-image' src={imgSrc}></img>
        <img className='discount-banner' src={DiscountBanner}></img>
        <span className='discount'>FLAT {discount}% OFF</span>
        <div className='restaurant-details'>
          <span className='name text-truncate'>{name}</span>
          <span className='address text-truncate'>{address}</span>
          <span className='cuisine text-truncate'>{cuisine.join(', ')}</span>
        </div>
        <div className='details-container'>
          <span className='delivery-time'>
            {getTimeString({ timeInMinutes: timeForDelivery })}
          </span>
          <Rating rating={rating} />
        </div>
      </div>
    </Link>
  )
}

const RestaurantCards = props => {
  console.log({ props })
  const { restaurantList, handleResetFilter } = props
  console.log({ restaurantList })
  if (restaurantList && restaurantList.length > 0) {
    return (
      <div className='restaurant-card-container'>
        <div className='restaurant-cards'>
          {restaurantList?.map(restaurant => {
            return (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            )
          })}
        </div>
      </div>
    )
  } else {
    return (
      <div className='no-result-container'>
        <div className='no-result-banner'>
          <span className='no-result-text'>Shoot!</span>
          <span>{`No Restaurants Found :(`} </span>
          <button className='reset-filter' onClick={handleResetFilter}>
            Click here to reset all filters
          </button>
          <img src={RestaurantImage} className='no-restaurant-image'></img>
        </div>
      </div>
    )
  }
}

export default RestaurantCards
