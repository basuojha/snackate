import { useEffect, useState } from 'react'

const useFetchRestaurantData = restaurantId => {
  const [restaurantData, setRestaurantData] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchRestaurantData()
  }, [])
  const fetchRestaurantData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5003/api/restaurants/${restaurantId}`
      )
      const respData = await response.json()
      if (response.ok) {
        setRestaurantData(respData)
      } else {
        setError(true)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoaded(true)
    }
  }
  return { restaurantData, loaded, error }
}

export default useFetchRestaurantData
