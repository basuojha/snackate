import { quickFilterItems } from '../../utils/constants'
import SortBar from '../SortBar'

const FilterAndSort = props => {
  const { restaurantList = [], applyFilter, activeFilters } = props

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
                    activeFilters.find(
                      filter => filter.filterName === filterName
                    )
                      ? 'pill-selected'
                      : ''
                  }`}
                  onClick={() => {
                    applyFilter({
                      filterCondition,
                      list: restaurantList,
                      value,
                      filterName
                    })
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
