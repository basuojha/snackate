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
    <div id='card-item' className='min-w-8 bg-[#F8EDE3] relative rounded-xl'>
      <img
        id='restaurant-card-img'
        className='h-48 object-cover w-full rounded-xl'
        src={imgSrc}
      ></img>
      <img
        id='discount-banner'
        className='absolute -right-0.5 top-[130px] w-36 h-28'
        style={{ transform: 'rotateY(180deg)' }}
        src={DiscountBanner}
      ></img>
      <span
        id='discount-text'
        className='absolute -right-0.5 top-[162px] w-28 text-white font-medium text-sm'
      >
        FLAT {discount}% OFF
      </span>
      <div id='restaurant-details-container' className='flex flex-col'>
        <span
          id='restaurant-name'
          className='font-bold text-lg truncate pt-4 pl-3 pr-3 pb-0 text-[#7E4338]'
        >
          {name}
        </span>
        <span
          id='restaurant-address'
          className='pl-3 pr-3 pb-1 truncate text-[#C5705D] font-semibold'
        >
          {address}
        </span>
        <span
          id='restaurant-cuisine'
          className='text-[#7E4338] font-medium pl-3 pr-3 truncate'
        >
          {cuisine && cuisine.join(', ')}
        </span>
      </div>
      <div id='time-rating-container' className='flex justify-between p-3'>
        <span id='time-for-delivery' className='text-[#C5705D] font-semibold'>
          {getTimeString({ timeInMinutes: timeForDelivery })}
        </span>
        <Rating rating={rating} />
      </div>
    </div>
  )
}

const withPromotedLabel = RestaurantCard => {
  return props => {
    return (
      <>
        <div className='px-2 py-1 rounded-md absolute z-10 bg-[#C5705D] text-sm font-medium'>
          <label className='text-white'>Promoted</label>
        </div>
        <RestaurantCard {...props} />
      </>
    )
  }
}

const PromotedRestaurantCard = withPromotedLabel(RestaurantCard)

const RestaurantCards = props => {
  const { restaurantList, handleResetFilter } = props
  if (restaurantList && restaurantList.length > 0) {
    return (
      <div className='restaurant-card-container'>
        <div className='flex flex-wrap'>
          {restaurantList?.map(restaurant => {
            return (
              <Link
                id='restaurant-card-container'
                to={`/restaurant/${restaurant.id}`}
                className='w-[256px] lg:w-1/4 md:w-1/3 sm:w-1/2 xl:1/4 p-2'
              >
                {restaurant.promoted ? (
                  <PromotedRestaurantCard
                    key={restaurant.id}
                    restaurant={restaurant}
                  />
                ) : (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                )}
              </Link>
            )
          })}
        </div>
      </div>
    )
  } else {
    return (
      <div id='no-result-container'>
        <div
          id='no-result-banner'
          className='flex justify-center flex-col items-center pt-8'
        >
          <span id='no-result-text' className='font-bold text-4xl pb-4'>
            Shoot!
          </span>
          <span className='pb-4 text-xl'>{`No Restaurants Found :(`} </span>
          <button
            id='reset-filter'
            className='rounded-lg px-4 py-2 bg-[#C5705D] text-white'
            onClick={handleResetFilter}
          >
            Click here to reset all filters
          </button>
          <img src={RestaurantImage} className='h-72 pt-4'></img>
        </div>
      </div>
    )
  }
}

export default RestaurantCards
