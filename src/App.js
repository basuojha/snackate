import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import appStore from './redux/store'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import { GOOGLE_CLIENT_URL } from './utils/apiKeys'

const About = lazy(() => import('./components/About'))
const Body = lazy(() => import('./components/Body'))
const Contact = lazy(() => import('./components/Contact'))
const Header = lazy(() => import('./components/Header'))
const Restaurant = lazy(() => import('./components/Restaurant'))
const ErrorPage = lazy(() => import('./components/ErrorPage'))
const Footer = lazy(() => import('./components/Footer'))
const Cart = lazy(() => import('./components/Cart'))

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
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_URL}>
      <Provider store={appStore}>
        <div className='flex flex-col min-h-screen'>
          <Suspense fallback={<div>Loading</div>}>
            <Header />
          </Suspense>
          <Outlet />
          <Suspense fallback={<div>Loading</div>}>
            <Footer />
          </Suspense>
        </div>
      </Provider>
    </GoogleOAuthProvider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/restaurant/:id',
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <Restaurant />
          </Suspense>
        ),
        errorElement: (
          <Suspense fallback={<div>Loading</div>}>
            <ErrorPage />
          </Suspense>
        )
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <About />
          </Suspense>
        )
      },
      {
        path: '/contact',
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <Contact />
          </Suspense>
        )
      },
      {
        path: '/cart',
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <Cart />
          </Suspense>
        )
      }
    ],
    errorElement: (
      <Suspense fallback={<div>Loading</div>}>
        <ErrorPage />
      </Suspense>
    )
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
