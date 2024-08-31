import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Body from './components/Body'

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
