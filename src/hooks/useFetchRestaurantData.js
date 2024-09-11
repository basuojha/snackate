import { useEffect, useState } from 'react'

const useFetchRestaurantData = restaurantId => {
  const [restaurantData, setRestaurantData] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetchRestaurantData()
  }, [])
  const fetchRestaurantData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5003/api/restaurants/${restaurantId}`
      )
      const respData = await response.json()
      setRestaurantData(respData)
    } catch (err) {
      console.error(err)
    } finally {
      setLoaded(true)
    }
  }
  return { restaurantData, loaded }
}

export default useFetchRestaurantData
