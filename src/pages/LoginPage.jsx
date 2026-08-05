import { Login } from '../components/components.js'
import LoginImage from '/login_image.png'

export default function LoginPage () {
  return (
    <div className="h-screen max-h-screen max-w-full mx-auto flex items-center justify-center overflow-hidden py-2 bg-[url('/login_background.png')] bg-cover bg-center bg-no-repeat">
      <div className='w-full max-h-[99%] h-full max-w-5xl bg-white border-t-10 border-[#366152] rounded-xl shadow-lg overflow-hidden'>
        <div className='grid grid-cols-1 lg:grid-cols-2 h-full w-full'>
          <div className='flex items-center justify-center p-4 overflow-hidden -translate-y-4'>
            <div className='w-full max-w-md'>
              <Login />
            </div>
          </div>

          <div className='relative bg-slate-100 hidden lg:block'>
            <img
              src={LoginImage}
              alt='Healthcare'
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
