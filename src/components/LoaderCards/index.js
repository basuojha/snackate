const LoaderCards = () => {
  const ShimmerCard = () => {
    return (
      <div
        id='shimmer-card'
        className='w-[256px] lg:w-1/4 md:w-1/3 sm:w-1/2 xl:1/4 p-2'
      >
        <div
          id='shimmer-card-item'
          className='min-w-8 bg-[#f0f0f0] relative rounded-xl'
        >
          <div
            id='shimmer-image'
            className='h-48 object-cover w-full rounded-xl bg-[#e0e0e0] animate-pulse'
          ></div>
          <div className='flex flex-col'>
            <div
              id='shimmer-name'
              className='font-bold text-lg truncate mt-4 ml-3 mr-3 mb-1 text-[#7E4338] h-6 bg-[#e0e0e0] rounded-lg animate-pulse'
            ></div>
            <div
              id='shimmer-address'
              className='ml-3 mr-3 mb-1 truncate text-[#C5705D] font-semibold h-6 bg-[#e0e0e0] rounded-lg animate-pulse'
            ></div>
            <div
              id='shimmer-cuisine'
              className='text-[#7E4338] font-medium ml-3 mr-3 truncate h-6 bg-[#e0e0e0] rounded-lg animate-pulse'
            ></div>
          </div>
          <div
            id='shimmer-details-container'
            className='flex justify-between p-3 rounded-lg'
          >
            <div
              id='shimmer-delivery-time'
              className='text-[#C5705D] font-semibold h-7 bg-[#e0e0e0] w-16 rounded-lg animate-pulse'
            ></div>
            <div
              id='shimmer-rating-container'
              className='bg-[#e0e0e0] w-14 rounded-lg animate-pulse'
            ></div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div id='shimmer-container' className='flex flex-wrap'>
      {Array.from({ length: 8 }).map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  )
}

export default LoaderCards
