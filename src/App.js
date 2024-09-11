import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

const About = lazy(() => import('./components/About'))
const Body = lazy(() => import('./components/Body'))
const Contact = lazy(() => import('./components/Contact'))
const Header = lazy(() => import('./components/Header'))
const Restaurant = lazy(() => import('./components/Restaurant'))
const ErrorPage = lazy(() => import('./components/ErrorPage'))

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
      {
        path: '/',
        element: (
          <Suspense>
            <Body />
          </Suspense>
        )
      },
      {
        path: '/restaurant/:id',
        element: (
          <Suspense>
            <Restaurant />
          </Suspense>
        )
      },
      {
        path: '/about',
        element: (
          <Suspense>
            <About />
          </Suspense>
        )
      },
      {
        path: '/contact',
        element: (
          <Suspense>
            <Contact />
          </Suspense>
        )
      }
    ],
    errorElement: (
      <Suspense>
        <ErrorPage />
      </Suspense>
    )
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
