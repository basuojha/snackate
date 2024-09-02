import { useState } from 'react'

const comparisonFunctions = {
  lessThan: (a, b) => a < b,
  greaterThan: (a, b) => a > b,
  equalTo: (a, b) => a === b,
  notEqualTo: (a, b) => a !== b,
  includes: (a, b) => a.includes(b)
}

const useFilter = list => {
  const [filterList, setFilterList] = useState(list)
  const [activeFilters, setActiveFilters] = useState([])
  const applyFilter = ({ list, filterCondition, filterName, value }) => {
    let newActiveFilters = [...activeFilters]
    const filterIndex = newActiveFilters.findIndex(
      filter => filter.filterName === filterName
    )
    if (filterIndex !== -1) {
      newActiveFilters = newActiveFilters.filter(
        filter => filter.filterName !== filterName
      )
    } else {
      newActiveFilters.push({ filterCondition, filterName, value })
    }
    setActiveFilters(newActiveFilters)
    applyAllFilters(newActiveFilters)
  }
  const applyAllFilters = filters => {
    let newFilterList = list
    filters.forEach(({ filterCondition, filterName, value }) => {
      const comparisonFunction = comparisonFunctions[filterCondition]
      if (!comparisonFunction) {
        console.error('Unknown filter comparison')
        return
      }
      newFilterList = newFilterList.filter(item =>
        comparisonFunction(item[filterName], value)
      )
    })
    setFilterList(newFilterList)
  }
  const resetFilter = () => {
    setActiveFilters([])
    setFilterList(list)
  }
  return { filterList, resetFilter, applyFilter }
}

export default useFilter
