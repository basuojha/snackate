import StarImage from '../../assets/images/star.png'

const Rating = ({ rating }) => {
  return (
    <div className='rating-container'>
      <span className='rating-num'>{rating}</span>
      <img className='star-rating' src={StarImage}></img>
    </div>
  )
}

export default Rating
