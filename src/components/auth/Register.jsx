import { useState } from 'react'
import {
  FaApple,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaHospital,
  FaLinkedin,
  FaLock,
  FaPhone,
  FaUser
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import { Button, Input, Logo, SocialButton } from '../components.js'

export default function Register() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className='w-full max-h-[88vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#357B62]/30 scrollbar-track-transparent pr-4 pb-4'>
      <div className='flex justify-center mb-2'>
        <div className='p-3  '>
          <Logo size={44} className='h-11 w-11' />
        </div>
      </div>

      <div className='mt-1 text-center'>
        <h1 className='text-2xl font-bold tracking-tight text-slate-900'>
          Create Account
        </h1>
        <p className='text-sm leading-5 text-gray-500'>
          Join us to get started with our platform
        </p>
      </div>

      <div className='mt-4'>
        <Input
          label='Full Name'
          placeholder='Enter your full name'
          icon={<FaUser className='text-[#357B62] text-base' />}
        />
      </div>

      <div className='mt-3'>
        <Input
          label='Email Address'
          placeholder='Enter your email'
          icon={<FaEnvelope className='text-[#357B62] text-base' />}
        />
      </div>

      <div className='mt-3'>
        <Input
          label='Phone Number'
          placeholder='Enter your phone number'
          icon={<FaPhone className='text-[#357B62] text-base' />}
        />
      </div>

      <div className='mt-3'>
        <Input
          label='Hospital Name'
          placeholder='Enter your hospital name'
          icon={<FaHospital className='text-[#357B62] text-base' />}
        />
      </div>

      <div className='mt-3'>
        <Input
          label='Password'
          type={showPassword ? 'text' : 'password'}
          placeholder='Create a password'
          icon={<FaLock className='text-[#357B62] text-base' />}
          rightIcon={
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='text-[#357B62]'
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

      <div className='mt-3'>
        <Input
          label='Confirm Password'
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder='Confirm your password'
          icon={<FaLock className='text-[#357B62] text-base' />}
          rightIcon={
            <button
              type='button'
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className='text-[#357B62]'
            >
              {showConfirmPassword ? (
                <FaEyeSlash className='text-base' />
              ) : (
                <FaEye className='text-base' />
              )}
            </button>
          }
        />
      </div>

      {/* SignUp Button */}
      <div className='mt-4'>
        <Button
          title='Sign Up'
          className='w-full rounded-xl bg-[#357B62] py-2 text-white transition hover:bg-[#2B6450]'
        />
      </div>

      <div className='my-3 flex items-center'>
        <div className='h-px flex-1 bg-gray-200'></div>
        <span className='mx-3 text-[10px] tracking-wide text-gray-700 font-semibold'>
          OR REGISTER WITH
        </span>
        <div className='h-px flex-1 bg-gray-200'></div>
      </div>

      {/* Social Register */}
      <div className='grid grid-cols-3 gap-2'>
        <SocialButton icon={<FaGoogle className='text-base text-red-500' />} />
        <SocialButton icon={<FaApple className='text-base text-slate-800' />} />
        <SocialButton
          icon={<FaLinkedin className='text-base text-[#357B62]' />}
        />
      </div>

      <p className='mt-3 text-center text-xs text-gray-500'>
        Already have an account?{' '}
        <span className='inline-flex'>
          <button
            onClick={() => navigate('/login')}
            className='ml-2 font-semibold text-[#357B62] transition hover:text-[#2B6450] hover:cursor-pointer hover:underline'
          >
            Log In
          </button>
        </span>
      </p>
    </div>
  )
}
