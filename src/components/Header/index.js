import Logo from '../Logo'
import NavLinks from '../NavLinks'

const Header = () => {
  return (
    <div className='flex bg-[#F8EDE3] justify-between items-center min-w-max'>
      <Logo />
      <NavLinks />
    </div>
  )
}

export default Header
