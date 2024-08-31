import Rating from './Rating'
import DiscountImage from '../../../assets/images/discount.png'

const getTimeString = ({ timeInMinutes }) => {
  if (timeInMinutes < 60) {
    return `${timeInMinutes} minutes`
  } else {
    const hoursAndMin = (timeInMinutes / 60).toFixed(2).split('.')
    const hours = hoursAndMin[0]
    const minutes = hoursAndMin[1]
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} and ${minutes} ${
      minutes === 1 ? 'minute' : 'minutes'
    } `
  }
}

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
      <img className='restaurant-image' src={imgSrc}></img>
      <span className='name text-truncate'>{name}</span>
      <span className='address text-truncate'>{address}</span>
      <span className='cuisine text-truncate'>{cuisine.join(', ')}</span>
      <div className='details-container'>
        <Rating rating={rating} />
        <span className='dot-separator'></span>
        <span>{`₹${priceForTwo / 100} for two`}</span>
        <span className='dot-separator'></span>
        <span>{getTimeString({ timeInMinutes: timeForDelivery })}</span>
      </div>
      <hr className='hr-break'></hr>
      <div className='discount'>
        <img src={DiscountImage} className='discount-image'></img>
        <span>Flat {discount}% OFF</span>
      </div>
    </div>
  )
}

const RestaurantCardsContainer = props => {
  const { restaurantList } = props
  return (
    <div className='restaurant-card-container'>
      <div className='restaurant-cards'>
        {restaurantList?.map(restaurant => {
          return <RestaurantCard restaurant={restaurant} />
        })}
      </div>
    </div>
  )
}

export default RestaurantCardsContainer
