import React from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'

import routes, { quizRoutes } from './routes'
import Country from './routes/Country'
import ErrorPage from './routes/NotFound'
import Search from './routes/Search'
import Quizs from './routes/Quizs'
import CapitalQuiz from './routes/Quizs/CapitalQuiz'

const Router: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          {/* Home redirects to Search */}
          <Route index element={<Navigate to={routes.SEARCH} />} />

          <Route path={routes.SEARCH} element={<Search />} />

          <Route path={`${routes.COUNTRY}/:countryCode`} element={<Country />} />

          <Route path={`${routes.QUIZS}`}>
            <Route index element={<Quizs />} />
            <Route path={`${routes.QUIZS}/${quizRoutes.CAPITAL}`} element={<CapitalQuiz />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default Router
