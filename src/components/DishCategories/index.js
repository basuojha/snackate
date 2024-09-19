import { useState } from 'react'
import DropDownImage from '../../assets/images/dropDown.png'
import Dish from '../Dish'

const DishCategories = ({
  category,
  restaurantData,
  setShowModal,
  setDishToAdd
}) => {
  const [selectedCategory, setSelectedCategory] = useState(true)
  const handleSelectedCategory = () => {
    setSelectedCategory(!selectedCategory)
  }
  const { categoryName, categoryId, dishes } = category
  return (
    <div className='flex flex-col'>
      <div
        className='w-full h-12 shadow-md rounded-md bg-[#C5705D] text-white font-medium flex items-center p-4 justify-between cursor-pointer'
        onClick={() => {
          handleSelectedCategory()
        }}
      >
        <span>
          {categoryName} {dishes && dishes.length && `(${dishes.length})`}
        </span>
        <div className='bg-white rounded-full'>
          <img
            src={DropDownImage}
            className={`h-5 w-5 ${
              selectedCategory ? 'rotate-180' : ''
            } transition-all`}
          ></img>
        </div>
      </div>
      {selectedCategory && (
        <div className='bg-[#F8EDE3] p-4 flex flex-col gap-4 rounded-md relative transition-all'>
          {dishes.map((item, index) => (
            <Dish
              dish={item}
              index={index}
              key={index}
              restaurantData={restaurantData}
              setShowModal={setShowModal}
              setDishToAdd={setDishToAdd}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default DishCategories
