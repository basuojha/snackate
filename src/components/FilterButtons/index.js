import { quickFilterItems } from '../../utils/constants'
import SortBar from '../SortBar'
import { useState } from 'react'

const FilterAndSort = props => {
  const { restaurantList = [], applyFilter, resetFilter } = props
  const [selectedPills, setSelectedPills] = useState([])

  return (
    <div className='filter-sort-container'>
      <div className='filter-bar-container'>
        {quickFilterItems.map((filter, index) => {
          const { type, name, filterCondition, filterName, value } = filter
          switch (type) {
            case 'range':
              return (
                <div
                  key={index}
                  className={`pill ${
                    selectedPills.includes(index) ? 'pill-selected' : ''
                  }`}
                  onClick={() => {
                    applyFilter({
                      filterCondition,
                      list: restaurantList,
                      value,
                      filterName
                    })
                    const newSelectedPills = [...selectedPills]
                    if (newSelectedPills.includes(index)) {
                      setSelectedPills(
                        newSelectedPills.filter(item => item !== index)
                      )
                    } else {
                      newSelectedPills.push(index)
                      setSelectedPills(newSelectedPills)
                    }
                  }}
                >
                  <span className='pill-name'>{name}</span>
                </div>
              )
            // case 'dropdown':
          }
        })}
      </div>
      <SortBar />
    </div>
  )
}

export default FilterAndSort
