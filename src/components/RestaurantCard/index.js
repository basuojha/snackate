import Rating from '../Rating'
import DiscountBanner from '../../assets/images/discountBanner.png'
import getTimeString from '../../utils/getTimeString'

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
      discount
    } = {}
  } = props
  return (
    <div className='restaurant-card'>
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
    </div>
  )
}

const RestaurantCards = props => {
  const { restaurantList } = props
  return (
    <div className='restaurant-card-container'>
      <div className='restaurant-cards'>
        {restaurantList?.map(restaurant => {
          return <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        })}
      </div>
    </div>
  )
}

export default RestaurantCards
