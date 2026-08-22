import {
  BarChart2,
  BarChart3,
  ClipboardList,
  FileText,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Settings,
  Users
} from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const navigation = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { label: 'New Analysis', icon: ClipboardList, path: '/analyze' },
  { label: 'History', icon: BarChart3, path: '/dashboard#history' },
  { label: 'Patients', icon: Users, path: '/dashboard#patients' },
  { label: 'Reports', icon: FileText, path: '/report' },
  { label: 'Analytics', icon: BarChart2, path: '/dashboard#analytics' },
  { label: 'Settings', icon: Settings, path: '/dashboard#settings' },
  { label: 'Help & Support', icon: HelpCircle, path: '/dashboard#support' }
]

export default function DashboardSidebar () {
  const location = useLocation()
  const navigate = useNavigate()

  const logOut = () => {
    localStorage.removeItem('user')
    navigate('/')
  }

  return (
    <aside className='flex w-full shrink-0 flex-col justify-between border-r border-slate-200 bg-[#f8fafb] px-4 py-6 lg:w-60 lg:min-h-[calc(100vh-4rem)]'>
      <div className='space-y-6'>
        <nav className='flex gap-4 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0'>
          {navigation.map(({ label, icon: Icon, path }) => {
            const active =
              location.pathname === path ||
              (path === '/dashboard' &&
                location.pathname === '/dashboard' &&
                !location.hash)
            return (
              <Link
                key={label}
                to={path}
                className={`flex shrink-0 items-center gap-3.5 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all ${
                  active
                    ? 'bg-[#e2f2ef] text-[#0d4239] font-bold shadow-xs'
                    : 'text-slate-600 hover:bg-[#eef7f4] hover:text-[#0d4239]'
                }`}
              >
                <Icon
                  size={25}
                  strokeWidth={active ? 2.2 : 1.8}
                  className={active ? 'text-[#0d4239]' : 'text-slate-500'}
                />
                <span className='text-md font-semibold'>{label}</span>
              </Link>
            )
          })}
        </nav>

        <button
          onClick={logOut}
          className='flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5   text-slate-600 transition hover:bg-red-50 hover:text-red-600 cursor-pointer'
        >
          <LogOut size={25} className='text-slate-500 hover:text-red-600' />
          <span className='text-md font-semibold'>Log out</span>
        </button>
      </div>
    </aside>
  )
}
