import { useState } from 'react'
import RestaurantCards from '../RestaurantCard'
import SearchBar from '../SearchBar'
import FilterAndSort from '../FilterButtons'
import { restaurantList as mockResList } from '../../utils/mockData'
import useFilter from '../../hooks/useFilter'

const sortList = ({ sortBy, filterList, isSorted, ascending = true }) => {
  if (isSorted) {
    return filterList
  }
  const sortedList = filterList.sort((a, b) => a[sortBy] - b[sortBy])
  return sortedList
}

const Body = () => {
  const [restaurantList] = useState(mockResList)
  const { filterList, applyFilter, resetFilter } = useFilter(restaurantList)
  return (
    <div className='body'>
      <SearchBar />
      <FilterAndSort
        restaurantList={filterList}
        applyFilter={applyFilter}
        resetFilter={resetFilter}
      />
      <RestaurantCards restaurantList={filterList} />
    </div>
  )
}

export default Body
