import { useState } from 'react'
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Input, Logo } from '../components'

export default function Login () {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const [email, setEmail] = useState('mujahid.radiology@hospital.org')

  const [password, setPassword] = useState('••••••••••••')

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    setIsLoading(true)

    setTimeout(() => {
      localStorage.setItem(
        'user',
        JSON.stringify({
          name: 'Mujahid Hussain',
          role: 'Radiologist',
          email: email || 'mujahid.radiology@hospital.org'
        })
      )

      navigate('/dashboard')
    }, 500)
  }

  return (
    <div className='relative flex min-h-screen w-full flex-col bg-white'>
      <header className='flex w-full items-center justify-between px-7 py-6 sm:px-10 lg:px-12 xl:px-16'>
        <div onClick={() => navigate('/')} className='cursor-pointer'>
          <div className='flex h-10 w-10 items-center justify-center'>
            <span className='text-3xl font-bold text-[#357B62]'>
              <Logo />
            </span>
          </div>
        </div>

        <button
          type='button'
          onClick={() => navigate('/register')}
          className='
            cursor-pointer
            rounded-full
            border
            border-gray-200
            bg-white
            px-5
            py-2
            text-sm
            font-medium
            text-gray-600
            transition
            duration-200
            hover:border-[#357B62]
            hover:text-[#357B62]
          '
        >
          Sign up
        </button>
      </header>

      <main className='flex flex-1 items-center justify-center px-7 py-10 sm:px-10 lg:px-12 xl:px-16'>
        <div className='w-full max-w-[430px] -mt-8'>
          <div className='mb-8'>
            <h1
              className=' text-3xl font-bold tracking-tight text-gray-900 sm:text-[34px]
              '
            >
              Welcome back
            </h1>

            <p className='mt-2 text-lg leading-6 text-gray-500'>
              Sign in to access your analysis and reports.
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-5'>
            {/* Email */}
            <Input
              label='Email'
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='you@example.com'
              icon={<FaEnvelope className='text-lg text-[#357B62]' />}
            />

            {/* Password */}
            <Input
              label='Password'
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='Your password'
              icon={<FaLock className='text-lg text-[#357B62]' />}
              rightIcon={
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='
                    cursor-pointer  text-gray-400  transition hover:text-[#357B62]
                  '
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <FaEyeSlash className='text-sm' />
                  ) : (
                    <FaEye className='text-sm' />
                  )}
                </button>
              }
            />

            <div className='flex items-center justify-between pt-1'>
              <label
                className='
                  flex
                  cursor-pointer
                  items-center
                  gap-2
                  text-xs
                  text-gray-500
                '
              >
                <input
                  type='checkbox'
                  defaultChecked
                  className=' h-3.5 w-3.5 rounded border-gray-300 text-[#357B62] focus:ring-[#357B62]
                  '
                />
                Remember me
              </label>

              <button
                type='button'
                className=' cursor-pointer text-xs font-medium text-[#357B62] transition hover:text-[#2B6450]
                '
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <div className='pt-1'>
              <button
                type='submit'
                disabled={isLoading}
                className=' flex h-11 w-full  items-center justify-center rounded-lg bg-[#357B62] px-4 text-sm font-semibold text-white shadow-sm shadow-green-900/10 transition duration-200 hover:bg-[#2B6450] disabled:cursor-not-allowed disabled:opacity-70
                '
              >
                {isLoading ? (
                  'Signing in...'
                ) : (
                  <>
                    Sign in
                    <span className='ml-2 text-base'>→</span>
                  </>
                )}
              </button>
            </div>
          </form>

          <p className='mt-7 text-center text-xs text-gray-500'>
            Don't have an account?{' '}
            <button
              type='button'
              onClick={() => navigate('/register')}
              className='
                cursor-pointer
                font-semibold
                text-gray-900
                transition
                hover:text-[#357B62]
                hover:underline
              '
            >
              Create one
            </button>
          </p>
        </div>
      </main>

      <footer className='px-7 py-5 sm:px-10 lg:px-12 xl:px-16'>
        <div className='flex items-center gap-4 text-[11px] text-gray-400'>
          <span>© 2026 KneeOai Pro</span>

          <span>•</span>

          <button
            type='button'
            className='cursor-pointer transition hover:text-gray-600'
          >
            Privacy
          </button>

          <button
            type='button'
            className='cursor-pointer transition hover:text-gray-600'
          >
            Terms
          </button>
        </div>
      </footer>
    </div>
  )
}
