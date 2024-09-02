import CartImage from '../../assets/images/cart.png'

const NavLinks = () => {
  return (
    <div className='nav-links'>
      <ul className='link-items'>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <img src={CartImage} alt='Cart' className='cart-icon' />
      </ul>
    </div>
  )
}

export default NavLinks
