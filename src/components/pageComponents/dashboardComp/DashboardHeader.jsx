import { Bell, ChevronDown } from 'lucide-react'
import Logo from '../../common/Logo'

export default function DashboardHeader ({ user }) {
  const userName = user?.name || 'Guest'
  const userRole = user?.role || 'Radiologist'
  const initial = userName.charAt(0).toUpperCase() || 'M'

  return (
    <header className='flex h-16 w-full items-center justify-between bg-[#075344] px-6 text-white shadow-md'>
      <div className='flex items-center gap-10 mx-25'>
        <div className='flex h-10 w-10 items-center justify-center   text-[#075344]'>
          <Logo size={28} className='h-10 w-10' />
        </div>
        <h1 className="text-2xl font-bold tracking-wide text-white uppercase font-['Outfit']">
          KNEE OAI- DASHBOARD
        </h1>
      </div>

      <div className='flex items-center gap-6'>
        <button
          aria-label='Notifications'
          className='relative rounded-full p-2 text-emerald-100 transition hover:bg-[#185549] hover:text-white'
        >
          <Bell size={25} />
          <span className='absolute top-2 right-2 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-[#0d4239]' />
        </button>

        <div className='flex items-center gap-3 border-l border-[#1a5549] pl-6 cursor-pointer mr-10'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-[#1b5c4d] text-sm font-bold text-emerald-100 border border-[#2a7362]'>
            {initial}
          </div>
          <div className='hidden text-left sm:block'>
            <p className='text-md font-semibold leading-none text-white'>
              {userName}
            </p>
            <p className='mt-1 text-sm text-emerald-200/80'>{userRole}</p>
          </div>
          <ChevronDown size={20} className='text-emerald-200/80' />
        </div>
      </div>
    </header>
  )
}
