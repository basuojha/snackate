import RestaurantCardsContainer from './RestaurantCard'
import SearchBar from './SearchBar'
import { restaurantList } from '../../constants/restaurantList'

const Body = () => {
  return (
    <div className='body'>
      <SearchBar />
      <RestaurantCardsContainer restaurantList={restaurantList} />
    </div>
  )
}

export default Body
