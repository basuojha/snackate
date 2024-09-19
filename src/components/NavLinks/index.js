import { Link } from 'react-router-dom'
import CartImage from '../../assets/images/cart.png'
import { useSelector } from 'react-redux'

const NavLinks = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const getTotalCount = () => {
    let totalCount = 0
    if (cartItems && cartItems.length > 0) {
      cartItems.forEach(item => {
        totalCount += item.quantity
      })
    }
    return totalCount
  }

  return (
    <div id='nav-links-container' className='flex'>
      <ul id='nav-link-items' className='flex '>
        <li id='home' className='p-4 text-[#7E4338] font-semibold'>
          <Link to='/' className='link-item'>
            Home
          </Link>
        </li>
        <li id='about' className='p-4 text-[#7E4338] font-semibold'>
          <Link to='/about' className='link-item'>
            About Us
          </Link>
        </li>
        <li id='contact' className='p-4 text-[#7E4338] font-semibold'>
          <Link to='/contact' className='link-item'>
            Contact Us
          </Link>
        </li>
        <Link to={'/cart'}>
          <div className='flex items-center p-4'>
            <img
              id='cart-image'
              src={CartImage}
              alt='Cart'
              className='w-6 h-6 relative'
            />
            <span className='relative pl-1'>{`(${getTotalCount()})`}</span>
          </div>
        </Link>
      </ul>
    </div>
  )
}

export default NavLinks
