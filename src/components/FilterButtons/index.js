import { quickFilterItems } from '../../utils/constants'
import SortBar from '../SortBar'

const FilterAndSort = props => {
  const { restaurantList = [], applyFilter, activeFilters } = props

  return (
    <div id='filter-container' className='flex justify-between items-center'>
      <div id='filter-btn-container' className='flex gap-3'>
        {quickFilterItems.map((filter, index) => {
          const { type, name, filterCondition, filterName, value } = filter
          switch (type) {
            case 'range':
              return (
                <button
                  key={index}
                  id={`filter-btn-${index}`}
                  className={`px-2.5 py-1 rounded-xl border-solid border-2 font-sm  ${
                    activeFilters.find(
                      filter => filter.filterName === filterName
                    )
                      ? 'bg-[#C5705D] text-white border-[#C5705D]'
                      : 'bg-[#F8EDE3] text-[#7E4338] border-[#7E4338]'
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
                  <span id='filter-btn-name'>{name}</span>
                </button>
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
