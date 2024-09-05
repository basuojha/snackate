import { useEffect, useState } from 'react'
import RestaurantCards from '../RestaurantCard'
import SearchBar from '../SearchBar'
import FilterAndSort from '../FilterButtons'
import useFilter from '../../hooks/useFilter'
import LoaderCards from '../LoaderCards'

const sortList = ({ sortBy, filterList, isSorted, ascending = true }) => {
  if (isSorted) {
    return filterList
  }
  const sortedList = filterList.sort((a, b) => a[sortBy] - b[sortBy])
  return sortedList
}

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([])
  const [searchText, setSearchText] = useState('')
  const { listToRender, addOrRemoveFilter, resetFilters, activeFilters } =
    useFilter(filteredRestaurantList)

  useEffect(() => {
    fetchData()
    console.log('USEFFECT RENDER')
  }, [])

  console.log('BODYY RENDER')
  const handleSearchClick = () => {
    if (searchText.length) {
      setFilteredRestaurantList(
        restaurantList.filter(
          item =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.cuisine.includes()
        )
      )
    }
  }

  const handleResetFilter = () => {
    resetFilters()
    setFilteredRestaurantList(restaurantList)
    setSearchText('')
  }

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3004/api/restaurants/list')
      const data = await response.json()
      setRestaurantList(data)
      setFilteredRestaurantList(data)
      setLoaded(true)
    } catch (error) {
      console.error('Error fetching data: ', error)
    }
  }

  return (
    <div className='body'>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearchClick={handleSearchClick}
        handleResetFilter={handleResetFilter}
      />
      <div className='filter-search-container'>
        <FilterAndSort
          restaurantList={listToRender}
          applyFilter={addOrRemoveFilter}
          resetFilters={resetFilters}
          activeFilters={activeFilters}
        />
      </div>
      {!loaded ? (
        <LoaderCards />
      ) : (
        <RestaurantCards
          restaurantList={listToRender}
          handleResetFilter={handleResetFilter}
        />
      )}
    </div>
  )
}

export default Body
