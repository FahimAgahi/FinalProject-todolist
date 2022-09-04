import { BrowserRouter as ReactRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import HomePage from '../pages/Home/index'
import EditPage from '../pages/Edit/index'
import LoginPage from '../pages/Login'

const Router = (path) => {
  return (
    <ReactRouter>
      <Routes>
        <Route exact path='/homePage' element={<HomePage />} />
        <Route exact path='/editPage' element={<EditPage />} />
        <Route exact path='/' element={<LoginPage />} />
      </Routes>
    </ReactRouter>
  )
}
export default Router
