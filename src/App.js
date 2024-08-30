import React from 'react'
import ReactDOM from 'react-dom'
import CartImage from '../public/assets/Cart.png'
import LogoImage from '../public/assets/Logo.png'
import StarImage from '../public/assets/Star.png'
import { restaurantList } from './constants/restaurantList'

/**
 * Components -
 * Header
 *  - Logo
 *  - NavLinks
 * Body
 *  - SearchBar
 *  - RestaurantCardsContainer
 *   - RestaurantCard
 * Footer
 *  - Copyright
 *  - SocialLinks
 */

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

const Logo = () => {
  return (
    <div className='logo-container'>
      <img className='logo' src={LogoImage}></img>
    </div>
  )
}

const Header = () => {
  return (
    <div className='header'>
      <Logo />
      <NavLinks />
    </div>
  )
}

const SearchBar = () => {
  return <div className='search-bar'></div>
}

const Rating = ({ rating }) => {
  return (
    <div className='rating-container'>
      <img className='star-rating' src={StarImage}></img>
      <span className='rating-num'>{rating}</span>
    </div>
  )
}

const RestaurantCard = ({ restaurant }) => {
  const {
    name,
    timeForDelivery,
    address,
    imgSrc,
    rating,
    priceForTwo,
    cuisine
  } = restaurant || {}
  return (
    <div className='restaurant-card'>
      <img className='restaurant-image' src={imgSrc}></img>
      <span className='name text-truncate'>{name}</span>
      <span className='address text-truncate'>{address}</span>
      <span className='cuisine text-truncate'>{cuisine.join(', ')}</span>
      <div className='details-container'>
        <Rating rating={rating} />
        <span>{`Price: ₹${priceForTwo}`}</span>
        <span>{`ETA: ${timeForDelivery}`}</span>
      </div>
      <hr className='hr-break'></hr>
      <div className='discount'></div>
    </div>
  )
}

const RestaurantCardsContainer = () => {
  return (
    <div className='restaurant-card-container'>
      {restaurantList.map(restaurant => {
        return <RestaurantCard restaurant={restaurant} />
      })}
    </div>
  )
}

const Body = () => {
  return (
    <div className='body'>
      <SearchBar />
      <RestaurantCardsContainer />
    </div>
  )
}
const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)
