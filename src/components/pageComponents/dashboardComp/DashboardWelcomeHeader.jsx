import { Clock, Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function DashboardWelcomeHeader ({ user }) {
  const navigate = useNavigate()
  const userName = (user?.name || 'Mujahid Hussain').split(' ')[0]

  return (
    <div className='flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between'>
      <div>
        <h2 className='text-2xl font-extrabold text-slate-900 sm:text-3xl'>
          Welcome back, {userName}!
        </h2>
        <p className='mt-1.5 text-sm text-slate-500 sm:text-base'>
          Here&apos;s a summary of your clinical analysis activity.
        </p>
      </div>

      <div className='flex flex-col items-start gap-2 sm:items-end'>
        <div className='flex flex-wrap items-center gap-3'>
          <button
            onClick={() => navigate('/analyze')}
            className='inline-flex items-center gap-2 rounded-lg bg-[#0d4239] px-8 py-3.5 text-md font-semibold text-white  transition hover:bg-[#13574b] cursor-pointer'
          >
            <Plus size={20} strokeWidth={3} />
            <span>New Analysis</span>
          </button>

          <button
            onClick={() => navigate('/dashboard#history')}
            className='inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-8 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50  hover:border-green-900 cursor-pointer'
          >
            <Clock size={16} />
            <span>Review Pending</span>
          </button>
        </div>
      </div>
    </div>
  )
}
