import { useState, useEffect } from 'react'

const useFetchRestaurantList = () => {
  const [loaded, setLoaded] = useState(false)
  const [restaurantList, setRestaurantList] = useState([])
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5003/api/restaurants/list')
      const data = await response.json()
      if (response.ok) {
        setRestaurantList(data)
        setFilteredRestaurantList(data)
      } else {
        setError(true)
      }
    } catch (error) {
      console.error('Error fetching data: ', error)
    } finally {
      setLoaded(true)
    }
  }
  return {
    restaurantList,
    filteredRestaurantList,
    loaded,
    setFilteredRestaurantList,
    error
  }
}

export default useFetchRestaurantList
