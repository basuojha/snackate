import { useState } from 'react'
import SortIcon from '../../assets/images/sort.png'

const sortKeyMap = [
  {
    filterName: 'rating',
    name: 'Rating: High to Low',
    sortDirection: 'desc'
  },
  {
    filterName: 'timeForDelivery',
    name: 'Delivery Time',
    sortDirection: 'asc'
  },
  {
    filterName: 'priceForTwo',
    name: 'Cost: Low to High',
    sortDirection: 'asc'
  },
  {
    filterName: 'priceForTwo',
    name: 'Cost: High to Low',
    sortDirection: 'desc'
  }
]

const SortDropDown = () => {
  return (
    <div className='sort-dropdown'>
      <div className='sort-list'>
        {sortKeyMap.map((sortItem, index) => {
          return (
            <div className='sort-item' key={index}>
              <input type='radio'></input>
              {sortItem.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const SortBar = () => {
  const [isSortBarOpen, setIsSortBarOpen] = useState(false)
  return (
    <div className='sort-bar'>
      <img
        className='w-8'
        src={SortIcon}
        onClick={() => setIsSortBarOpen(!isSortBarOpen)}
      ></img>
      {isSortBarOpen && <SortDropDown />}
    </div>
  )
}

export default SortBar
