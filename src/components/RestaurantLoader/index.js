const RestaurantLoader = () => {
  return (
    <div
      id='shimmer-restaurant-page-container'
      className='px-[15%] py-16 h-full '
    >
      <div className='text-justify m-2 bg-[#f0f0f0] rounded-lg'>
        <div
          id='shimmer-restaurant-image-cover'
          className='rounded-lg h-72 w-full object-cover bg-[#e0e0e0]'
        ></div>
        <div
          id='shimmer-restaurant-details-container'
          className='flex flex-col'
        >
          <h1
            id='shimmer-restaurant-heading-title'
            className='font-bold text-3xl pb-2 text-[#7E4338] pt-8'
          ></h1>
          <div className='font-bold text-md pb-2 text-[#C5705D]'></div>
          <div
            id='shimmer-color-text-item'
            className='text-lg font-bold pb-4 text-[#7E4338] pt-2'
          ></div>
        </div>
        <h2
          id='shimmer-menu-heading'
          className='pt-4 text-2xl font-bold text-[#C5705D] '
        ></h2>
        <div id='shimmer-menu-container' className='pt-4'>
          <div
            id='shimmer-menu-item-container'
            className='flex justify-between pb-4'
          >
            <div id='shimmer-item-name-container' className='flex gap-4'>
              <div
                id='shimmer-item-image-container'
                className='h-36 w-64 object-cover rounded-xl'
              ></div>
              <div
                id='shimmer-item-details-container'
                className='flex flex-col'
              >
                <div
                  id='shimmer-item-heading'
                  className='font-semibold text-lg text-[#f0f0f0]'
                ></div>
                <div id='shimmer-item-text' className='truncate'></div>
                <div
                  id='shimmer-color-text-item'
                  className='text-[#f0f0f0] font-semibold'
                ></div>
              </div>
            </div>
            <div
              id='shimmer-quantity-price-container'
              className='flex flex-col'
            >
              <div
                id='shimmer-price-container'
                className='relative pb-6 flex gap-1 justify-end'
              >
                <div className='flex'>
                  <div
                    id='shimmer-original-price'
                    className='text-gray-500'
                  ></div>
                  <div className='w-7 h-7 absolute left-12'></div>
                </div>
                <div id='shimmer-discounted-price'></div>
              </div>
              <div id='shimmer-quantity-container' className='flex justify-end'>
                <button
                  id='shimmer-add-subtract-icon'
                  className='rounded-md px-2 py-1 bg-[#f0f0f0] text-white items-center flex justify-center h-3/4 w-10'
                  onClick={() => quantityHandler({ id, action: 'remove' })}
                ></button>
                <div
                  id='shimmer-quantity'
                  className='rounded-md px-2 py-1 bg-[#f0f0f0] text-black items-center flex justify-center h-3/4 w-10'
                ></div>
                <button
                  id='shimmer-add-subtract-icon'
                  className='rounded-md px-2 py-1 bg-[#f0f0f0] text-white items-center flex justify-center h-3/4  w-10'
                  onClick={() => quantityHandler({ id, action: 'add' })}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantLoader
