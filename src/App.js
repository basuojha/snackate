import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Restaurant from './components/Restaurant'

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
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Body /> },
      { path: '/restaurant/:id', element: <Restaurant /> },
      { path: '/about', element: <About /> },
      {
        path: '/contact',
        element: <Contact />
      }
    ],
    errorElement: <ErrorPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
