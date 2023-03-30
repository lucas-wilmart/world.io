import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Routes from './routes'
import CountryDetails from './screens/CountryDetails'
import ErrorPage from './screens/ErrorPage'
import Home from './screens/Home'

const router = createBrowserRouter(
  [
    {
      path: Routes.ROOT,
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: `${Routes.COUNTRY}/:countryCode`,
      element: <CountryDetails />
    }
  ],
  {
    basename: import.meta.env.BASE_URL
  }
)

const Router: React.FC = () => {
  return <RouterProvider router={router} />
}

export default Router
