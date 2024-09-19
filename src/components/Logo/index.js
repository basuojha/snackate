import { Link } from 'react-router-dom'
import LogoImage from '../../assets/images/logo.png'
import SnackateImage from '../../assets/images/snackate.png'

const Logo = () => {
  return (
    <Link to='/'>
      <div className='logo-container'>
        <img className='w-32 p-4' src={SnackateImage}></img>
      </div>
    </Link>
  )
}

export default Logo
