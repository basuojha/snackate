import { Link } from 'react-router-dom'
import CartImage from '../../assets/images/cart.png'

const NavLinks = () => {
  return (
    <div className='nav-links'>
      <ul className='link-items'>
        <li>
          <Link to='/' className='link-item'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' className='link-item'>
            About Us
          </Link>
        </li>
        <li>
          <Link to='/contact' className='link-item'>
            Contact Us
          </Link>
        </li>
        <img src={CartImage} alt='Cart' className='cart-icon' />
      </ul>
    </div>
  )
}

export default NavLinks
