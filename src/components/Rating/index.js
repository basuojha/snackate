import StarImage from '../../assets/images/star.png'

const Rating = ({ rating, style }) => {
  return (
    <div
      id='rating-container'
      className={`flex items-center bg-[#7E4338] rounded-lg text-white px-2 py-1 gap-1 ${style}`}
    >
      <span id='rating-text' className='text-sm font-medium'>
        {rating}
      </span>
      <img id='rating-star' className='w-3 h-3' src={StarImage}></img>
    </div>
  )
}

export default Rating
