import { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound/NotFound'
import './scss/app.scss'

export const SearchContext = createContext()

function App() {
  const [searValue, setSearValue] = useState('')

  return (
    <SearchContext.Provider value={{ searValue, setSearValue }}>
      <div>
        <div className="wrapper">
          <Header />
          <div className="content">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home searValue={searValue} />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </SearchContext.Provider>
  )
}

export default App
