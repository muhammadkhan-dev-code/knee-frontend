import { BrowserRouter, Route, Routes } from 'react-router-dom'

import FeaturePage from './pages/FeaturePage.jsx'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'

export default function App () {
  return (
    <BrowserRouter>
      <div className='w-full min-h-screen'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/features' element={<FeaturePage />} />
          <Route path='*' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
