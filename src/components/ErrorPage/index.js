import { useRouteError, Link } from 'react-router-dom'
import ErrorNotFound from '../../assets/images/errorNotFound.png'
import ErrorImg from '../../assets/images/error.png'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <div id='error-page-container' className='flex justify-center flex-col items-center p-16 gap-8'>
      <h1 id='heading-title' className='text-4xl'>
        Uh-Oh!
      </h1>
      <span>
        {error.status === 404 ? 'Page not found!' : 'Something went wrong!'}{' '}
        Let's take you back to <Link to={'/'} className='underline'>Snackate</Link>
      </span>
      <img
      className='w-64'
        src={error.status === 404 ? ErrorNotFound : ErrorImg}
        id='error-img'
      ></img>
    </div>
  )
}

export default ErrorPage
