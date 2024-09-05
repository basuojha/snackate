const LoaderCards = () => {
  const ShimmerCard = () => {
    return (
      <div className='shimmer-card'>
        <div className='shimmer-card-item'>
          <div className='shimmer-image shimmer'> </div>
          <div className='shimmer-name shimmer'></div>
          <div className='shimmer-address shimmer'></div>
          <div className='shimmer-cuisine shimmer'></div>
          <div className='shimmer-details-container'>
            <div className='shimmer-delivery-time shimmer'></div>
            <div className='shimmer-rating-container'></div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='shimmer-container'>
      {Array.from({ length: 9 }).map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  )
}

export default LoaderCards
