import { useState } from 'react'

import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaPhone,
  FaUser
} from 'react-icons/fa'

import { useNavigate } from 'react-router-dom'

import Input from '../common/Input'
import Logo from '../common/Logo'

export default function Register () {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className='flex min-h-screen w-full items-center justify-center px-7 py-8 sm:px-10 lg:px-12 xl:px-16'>
      <div className='w-full max-w-[430px]'>
        <div className='mb-5 flex justify-center'>
          <div className='flex h-12 w-12 items-center justify-center'>
            <Logo size={44} className='h-11 w-11' />
          </div>
        </div>

        <div className='mb-6 text-center'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-[34px]'>
            Create your account
          </h1>

          <p className='mt-2 text-lg leading-6 text-gray-500'>
            Join KneeOai to access AI-powered knee analysis.
          </p>
        </div>

        {/* Form */}
        <div className='space-y-4'>
          <Input
            label='Full Name'
            placeholder='Enter your full name'
            icon={<FaUser className='text-base text-[#357B62]' />}
          />

          <Input
            label='Email Address'
            type='email'
            placeholder='Enter your email'
            icon={<FaEnvelope className='text-base text-[#357B62]' />}
          />

          <Input
            label='Phone Number'
            type='tel'
            placeholder='Enter your phone number'
            icon={<FaPhone className='text-base text-[#357B62]' />}
          />

          <Input
            label='Password'
            type={showPassword ? 'text' : 'password'}
            placeholder='Create a password'
            icon={<FaLock className='text-base text-[#357B62]' />}
            rightIcon={
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='cursor-pointer text-gray-400 transition hover:text-[#357B62]'
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

          <Input
            label='Confirm Password'
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder='Confirm your password'
            icon={<FaLock className='text-base text-[#357B62]' />}
            rightIcon={
              <button
                type='button'
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className='cursor-pointer text-gray-400 transition hover:text-[#357B62]'
                aria-label={
                  showConfirmPassword ? 'Hide password' : 'Show password'
                }
              >
                {showConfirmPassword ? (
                  <FaEyeSlash className='text-sm' />
                ) : (
                  <FaEye className='text-sm' />
                )}
              </button>
            }
          />

          <div className='pt-1'>
            <button
              type='button'
              onClick={() => {
                localStorage.setItem(
                  'user',
                  JSON.stringify({
                    name: 'Dr. Radiologist',
                    role: 'Radiologist',
                    email: 'doctor@hospital.org'
                  })
                )

                navigate('/dashboard')
              }}
              className='
                flex h-11
                w-full
                cursor-pointer
                items-center
                justify-center
                rounded-lg
                bg-[#357B62]
                px-4
                text-sm
                font-semibold
                text-white
                shadow-sm
                shadow-green-900/10
                transition
                duration-200
                hover:bg-[#2B6450]
              '
            >
              Create Account
              <span className='ml-2 text-base'>→</span>
            </button>
          </div>
        </div>

        <p className='mt-5 text-center text-md text-gray-500'>
          Already have an account?{' '}
          <button
            type='button'
            onClick={() => navigate('/login')}
            className='
              ml-1
              cursor-pointer
              font-semibold
              text-gray-900
              transition
              hover:text-[#357B62]
              hover:underline
            '
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  )
}
