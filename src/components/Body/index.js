import { lazy, Suspense, useEffect, useState } from 'react'
import SearchBar from '../SearchBar'
import FilterAndSort from '../FilterButtons'
import useFilter from '../../hooks/useFilter'
import LoaderCards from '../LoaderCards'
import useFetchRestaurantList from '../../hooks/useFetchRestaurantList'
import useIsOnline from '../../hooks/useIsOnline'

const RestaurantCards = lazy(() => import('../RestaurantCards'))

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
  const isOnline = useIsOnline()
  console.log({ isOnline })

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

  if (!isOnline) {
    return (
      <div className='no-result-container'>
        <div className='no-result-banner'>
          <span className='no-result-text'>Shoot!</span>
          <span>
            Guess you lost your connection! Try connecting to internet again!
          </span>
        </div>
      </div>
    )
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
        <Suspense fallback={<LoaderCards />}>
          <RestaurantCards
            restaurantList={listToRender}
            handleResetFilter={handleResetFilter}
          />
        </Suspense>
      )}
    </div>
  )
}

export default Body
