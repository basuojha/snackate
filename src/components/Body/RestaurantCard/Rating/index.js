import StarImage from '../../../../assets/images/star.png'

const Rating = ({ rating }) => {
  return (
    <div className='rating-container'>
      <img className='star-rating' src={StarImage}></img>
      <span className='rating-num'>{rating}</span>
    </div>
  )
}

export default Rating
