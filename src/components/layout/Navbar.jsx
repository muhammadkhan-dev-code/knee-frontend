import Logo from '../common/Logo'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const handleScrollTo = (id) => (e) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      window.location.href = '/#' + id
      return
    }
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="w-full fixed left-0 right-0 z-50 pointer-events-none px-4">
      <nav className="max-w-screen-2xl rounded-lg mx-auto px-4 md:px-10 lg:px-16 py-1 backdrop-blur-sm flex items-center justify-between shadow-md border border-gray-100 pointer-events-auto bg-white/80">
        <a href="#home" onClick={handleScrollTo('home')} className="cursor-pointer flex">
          <Logo size={50} className='ml-3' />
        </a>

        <div className="hidden md:flex items-center lg:gap-10">
          <a
            href="#home"
            onClick={handleScrollTo('home')}
            className="text-gray-700 text-lg font-semibold hover:text-[#357B62] transition-colors duration-200"
          >
            Home
          </a>

          <a
            href="#features"
            onClick={handleScrollTo('features')}
            className="text-gray-700 text-lg font-semibold hover:text-[#357B62] transition-colors duration-200"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            onClick={handleScrollTo('how-it-works')}
            className="text-gray-700 text-lg font-semibold hover:text-[#357B62] transition-colors duration-200"
          >
            How It Works
          </a>

          <a
            href="#about"
            onClick={handleScrollTo('about')}
            className="text-gray-700 text-lg font-semibold hover:text-[#357B62] transition-colors duration-200"
          >
            About
          </a>
        </div>

        <div className="flex items-center gap-3 ml-8">
          <Link to="/register">
            <button className="px-8 py-3 rounded-lg bg-[#357B62] text-white font-semibold text-base hover:bg-[#2d6b55] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
              Sign Up
            </button>
          </Link>

          <Link to="/login">
            <button className="px-8 py-3 rounded-lg border-2 border-[#357B62] text-[#357B62] font-semibold text-base hover:bg-[#357B62] hover:text-white transition-all duration-200 cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
