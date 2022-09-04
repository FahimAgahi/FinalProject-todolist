import { BrowserRouter as ReactRouter, Routes, Route } from 'react-router-dom'

// import { BrowserRouter as ReactRouter, Switch, Route } from 'react-router-dom'
import React from 'react'
import HomePage from '../pages/Home/index'
import EditPage from '../pages/Edit/index'
// import Login from ''
// import TaskHistoryPage from ''

const Router = (path) => {
  return (
    <ReactRouter>
      <Routes>
        <Route exact path='/homePage' element={<HomePage />} />
        <Route exact path='/editPage' element={<EditPage />} />
      </Routes>
    </ReactRouter>
  )
}
export default Router
