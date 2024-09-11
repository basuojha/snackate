import { useEffect, useState } from 'react'
import RestaurantCards from '../RestaurantCard'
import SearchBar from '../SearchBar'
import FilterAndSort from '../FilterButtons'
import useFilter from '../../hooks/useFilter'
import LoaderCards from '../LoaderCards'
import useFetchRestaurantList from '../../hooks/useFetchRestaurantList'

const sortList = ({ sortBy, filterList, isSorted, ascending = true }) => {
  if (isSorted) {
    return filterList
  }
  const sortedList = filterList.sort((a, b) => a[sortBy] - b[sortBy])
  return sortedList
}

const Body = () => {
  const { restaurantList, filteredRestaurantList, loaded } =
    useFetchRestaurantList()
  const [searchText, setSearchText] = useState('')
  const { listToRender, addOrRemoveFilter, resetFilters, activeFilters } =
    useFilter(filteredRestaurantList)

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
