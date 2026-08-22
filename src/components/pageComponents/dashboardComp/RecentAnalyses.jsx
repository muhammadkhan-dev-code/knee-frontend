import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const analyses = [
  {
    id: 'P-2025-00124',
    name: 'Ahsan Raza',
    grade: 'KL 2-3 (as in 4Go)',
    confidence: '88.6%',
    date: 'May 20, 2025 · 10:24 AM',
    badgeStyle: 'bg-amber-100 text-amber-800 border border-amber-200',
    status: 'Completed',
    statusStyle: 'bg-emerald-50 text-emerald-700 border border-emerald-200'
  },
  {
    id: 'P-2025-00125',
    name: 'Maria Chen',
    grade: 'KL 1',
    confidence: '92.1%',
    date: 'May 20, 2025 · 10:24 AM',
    badgeStyle: 'bg-[#e2f2ef] text-[#0d4239] border border-[#cbebe3]',
    status: 'Completed',
    statusStyle: 'bg-emerald-50 text-emerald-700 border border-emerald-200'
  },
  {
    id: 'P-2025-00126',
    name: 'James Smith',
    grade: 'KL 2',
    confidence: '85.3%',
    date: 'May 20, 2025 · 10:24 AM',
    badgeStyle: 'bg-amber-100 text-amber-800 border border-amber-200',
    status: 'Completed',
    statusStyle: 'bg-emerald-50 text-emerald-700 border border-emerald-200'
  },
  {
    id: 'P-2025-00127',
    name: 'Fatima Ali',
    grade: 'KL 4',
    confidence: '78.9%',
    date: 'May 20, 2025 · 10:24 AM',
    badgeStyle: 'bg-red-100 text-red-700 border border-red-200',
    status: 'Critical',
    statusStyle: 'bg-red-50 text-red-600 border border-red-200'
  },
  {
    id: 'P-2025-00128',
    name: 'David Lee',
    grade: 'KL 0-1',
    confidence: '93.4%',
    date: 'May 20, 2025 · 10:24 AM',
    badgeStyle: 'bg-[#e2f2ef] text-[#0d4239] border border-[#cbebe3]',
    status: 'Completed',
    statusStyle: 'bg-emerald-50 text-emerald-700 border border-emerald-200'
  }
]

export default function RecentAnalyses () {
  return (
    <div className='flex h-full flex-col justify-between rounded-xl border border-slate-100 bg-white p-5 shadow-xs'>
      <div className='flex items-center justify-between pb-4'>
        <h3 className='text-lg font-bold text-slate-900'>Recent Analyses</h3>
        <Link
          to='/report'
          className='flex items-center gap-1 text-sm font-semibold text-[#0d4239] transition hover:underline'
        >
          <span>View All</span>
          <ArrowRight size={15} />
        </Link>
      </div>

      <div className='overflow-x-auto'>
        <table className='w-full text-left text-sm'>
          <thead>
            <tr className='bg-slate-50 text-slate-600 border-y border-slate-100'>
              <th className='py-3 px-3 font-semibold'>Patient ID</th>
              <th className='py-3 px-3 font-semibold'>Name</th>
              <th className='py-3 px-3 font-semibold'>Predicted KL Grade</th>
              <th className='py-3 px-3 font-semibold'>Confidence</th>
              <th className='py-3 px-3 font-semibold'>Date/Time</th>
              <th className='py-3 px-3 font-semibold'>Status</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-slate-100'>
            {analyses.map(
              ({
                id,
                name,
                grade,
                confidence,
                date,
                badgeStyle,
                status,
                statusStyle
              }) => (
                <tr key={id} className='hover:bg-slate-50/50 transition'>
                  <td className='py-3.5 px-3 font-medium text-slate-600 '>
                    {id}
                  </td>
                  <td className='py-3.5 px-3 font-semibold text-slate-900'>
                    {name}
                  </td>
                  <td className='py-3.5 px-3'>
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${badgeStyle}`}
                    >
                      {grade}
                    </span>
                  </td>
                  <td className='py-3.5 px-3 font-medium text-slate-700'>
                    {confidence}
                  </td>
                  <td className='py-3.5 px-3 text-slate-500'>{date}</td>
                  <td className='py-3.5 px-3'>
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusStyle}`}
                    >
                      {status}
                    </span>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
