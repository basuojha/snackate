import { useEffect, useMemo, useState } from 'react'

const comparisonFunctions = {
  lessThan: (a, b) => a < b,
  greaterThan: (a, b) => a > b,
  equalTo: (a, b) => a === b,
  notEqualTo: (a, b) => a !== b,
  includes: (a, b) => a.includes(b)
}

const useFilter = initialList => {
  const [activeFilters, setActiveFilters] = useState([])

  const addOrRemoveFilter = ({ filterCondition, filterName, value }) => {
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
  }

  const listToRender = useMemo(() => {
    let newFilterList = initialList
    activeFilters.forEach(({ filterCondition, filterName, value }) => {
      const comparisonFunction = comparisonFunctions[filterCondition]
      if (!comparisonFunction) {
        console.error('Unknown filter comparison')
        return
      }
      newFilterList = newFilterList.filter(item =>
        comparisonFunction(item[filterName], value)
      )
    })
    return newFilterList
  }, [activeFilters, initialList])

  const resetFilters = () => {
    console.log('Hereee')
    setActiveFilters([])
  }
  return { listToRender, resetFilters, addOrRemoveFilter, activeFilters }
}

export default useFilter
