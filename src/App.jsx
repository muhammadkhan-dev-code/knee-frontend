import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FeaturePage from './pages/FeaturePage.jsx'
import HomePage from './pages/HomePage.jsx'

export default function App () {
  return (
    <BrowserRouter>
      <div className='w-full min-h-screen'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/features' element={<FeaturePage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
