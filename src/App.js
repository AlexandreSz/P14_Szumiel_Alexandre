import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import AddEmployee from './pages/AddEmployee'
import EmployeeList from './pages/EmployeeList'
import { Provider } from 'react-redux'
import { store } from './services/store'
import './index.css'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={'/add-employee'} element={<AddEmployee />} />
            <Route path={'/employee-list'} element={<EmployeeList />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  )
}

export default App
