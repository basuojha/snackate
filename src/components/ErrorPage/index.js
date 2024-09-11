import { useRouteError, Link } from 'react-router-dom'
import ErrorNotFound from '../../assets/images/errorNotFound.png'
import ErrorImg from '../../assets/images/error.png'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <div className='error-page-container'>
      <h1 className='heading-title'>Uh-Oh!</h1>
      <span>
        {error.status === 404 ? 'Page not found!' : 'Something went wrong!'}{' '}
        Let's take you back to <Link to={'/'}>Snackate</Link>
      </span>
      <img
        src={error.status === 404 ? ErrorNotFound : ErrorImg}
        className='error-img'
      ></img>
    </div>
  )
}

export default ErrorPage
