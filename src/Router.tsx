import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'

import routes, { quizRoutes } from './routes'
import Country from './routes/Country'
import ErrorPage from './routes/NotFound'
import Home from './routes/Home'
import Quizs from './routes/Quizs'
import CapitalQuiz from './routes/Quizs/CapitalQuiz'

const Router: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<Home />} />
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
