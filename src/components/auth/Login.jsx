import { useState } from 'react'
import {
  FaApple,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaLinkedin,
  FaLock
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import { Button, Input, Logo, SocialButton } from '../components.js'

export default function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='w-full max-w-sm'>
     <div className='flex justify-center mb-2'>
        <div className='p-3  '>
          <Logo size={44} className='h-11 w-11' />
        </div>
      </div>

      <div className='mt-1 text-center'>
        <h1 className='mt-1 text-2xl  font-bold tracking-tight text-slate-900'>
          Welcome Back
        </h1>
        <p className=' text-sm leading-5 text-gray-500'>
          Sign in to your account to continue
        </p>
      </div>


      <div className='mt-2'>
        <Input
          label='Email Address'
          placeholder='Enter your email'
          icon={<FaEnvelope className='text-[#357B62] text-base' />}
        />
      </div>


      <div className='mt-1'>
        <Input
          label='Password'
          type={showPassword ? 'text' : 'password'}
          placeholder='Enter your password'
          icon={<FaLock className='text-[#357B62] text-base' />}
          rightIcon={
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='text-[#357B62] '
            >
              {showPassword ? (
                <FaEyeSlash className='text-base' />
              ) : (
                <FaEye className='text-base' />
              )}
            </button>
          }
        />
      </div>

      <div className='mt-2 flex items-center justify-between text-xs'>
        <label className='flex cursor-pointer items-center gap-2 text-gray-600'>
          <input
            type='checkbox'
            className='h-3.5 w-3.5 rounded border-gray-300 text-[#357B62] focus:ring-[#357B62]'
          /> Remember me
        </label>

        <button className='font-medium text-[#357B62] transition hover:text-[#2B6450]'>
          Forgot Password?
        </button>
      </div>

      {/* Login Button */}
      <div className='mt-2'>
        <Button
          title='Log In'
          className='w-full rounded-xl bg-[#357B62] py-2 text-white transition hover:bg-[#2B6450]'
        />
      </div>

      <div className='my-3 flex items-center'>
        <div className='h-px flex-1 bg-gray-200'></div>
        <span className='mx-3 text-[10px] tracking-wide text-gray-700 font-semibold'>
          OR CONTINUE WITH
        </span>
        <div className='h-px flex-1 bg-gray-200'></div>
      </div>

      {/* Social Login */}
      <div className='grid grid-cols-3 gap-2'>
        <SocialButton
          icon={<FaGoogle className='text-base text-red-500   ' />}
        />
        <SocialButton icon={<FaApple className='text-base text-slate-800' />} />
        <SocialButton
          icon={<FaLinkedin className='text-base text-[#357B62]' />}
        />
      </div>

      <p className='mt-3 text-center text-xs text-gray-500'>
        Don't have an account?{''}
        <span className='inline-flex '>
          <button
            onClick={() => navigate('/register')}
            className='ml-2 font-semibold text-[#357B62] transition hover:text-[#2B6450] hover:cursor-pointer hover:underline'
          >
            Sign Up
          </button>
        </span>
      </p>
    </div>
  )
}
