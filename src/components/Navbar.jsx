import { Link } from 'react-router-dom'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div className='w-full flex justify-center pt-4 px-2 absolute top-0 z-50'>
      <nav className='bg-white rounded-lg px-3 py-[0.3rem] flex items-center justify-between w-3xl max-w-4xl shadow-sm border border-gray-100'>
        <div className='flex items-center'>
          <div className='p-2 rounded-xl'>
            <Logo size={24} animated={true}  className=' hover:cursor-pointer'/>
          </div>
        </div>

        <div className='hidden md:flex space-x-8 text-md font-medium text-gray-700 '>
          <Link
            to='/'
            className='flex items-center hover:text-green-700 transition-colors'
          >
            Home
          </Link>
          <Link
            to='/features'
            className='hover:text-green-700 transition-colors'
          >
            Features
          </Link>
          <Link
            to='/how-it-works'
            className='hover:text-green-700 transition-colors'
          >
            How It Works
          </Link>
          <Link to='/about' className='hover:text-green-700 transition-colors'>
            About
          </Link>
        </div>

        <div>
          <Link to='/demo' className='inline-block'>
            <button className='bg-[#357B62] hover:bg-[#2b6450] text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors shadow-sm'>
              Get a demo
            </button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
