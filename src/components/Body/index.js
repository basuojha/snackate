import { lazy, Suspense, useEffect, useState } from 'react'
import SearchBar from '../SearchBar'
import FilterAndSort from '../FilterButtons'
import useFilter from '../../hooks/useFilter'
import LoaderCards from '../LoaderCards'
import useFetchRestaurantList from '../../hooks/useFetchRestaurantList'
import useIsOnline from '../../hooks/useIsOnline'
import RestaurantImage from '../../assets/images/restaurant.png'
import { Link } from 'react-router-dom'

const RestaurantCards = lazy(() => import('../RestaurantList'))

const sortList = ({ sortBy, filterList, isSorted, ascending = true }) => {
  if (isSorted) {
    return filterList
  }
  const sortedList = filterList.sort((a, b) => a[sortBy] - b[sortBy])
  return sortedList
}

const Body = () => {
  const {
    restaurantList,
    filteredRestaurantList,
    loaded,
    error: apiError,
    setFilteredRestaurantList
  } = useFetchRestaurantList()
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
          <span className='pb-4 text-xl'>{`No Restaurants Found!`} </span>
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

  return (
    <div className='px-[15%] py-16'>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearchClick={handleSearchClick}
        handleResetFilter={handleResetFilter}
      />
      <div id='filter-sort-container' className='px-2 pt-6 py-4 items-center'>
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
