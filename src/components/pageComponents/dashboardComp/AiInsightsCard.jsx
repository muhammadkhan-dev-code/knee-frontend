import { Sparkles } from 'lucide-react'
import KneeSvg from '../../../assets/images/dashboard/knee-svg.jpg'

export default function AiInsightsCard () {
  return (
    <div className='relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-[#cbebe3] bg-gradient-to-br from-[#e4f6f3] via-[#edf9f6] to-[#f4fbf9] p-5 shadow-xs'>
      <div className='relative z-10 max-w-[65%]'>
        <div className='flex items-center gap-2 text-base font-bold text-[#0d4239]'>
          <Sparkles size={16} className='text-[#10705c]' />
          <span>AI Insights</span>
        </div>
        <p className='mt-3 text-md leading-relaxed text-slate-700'>
          Severe cases - KL 4 have increased by 5% this month. Continue
          monitoring and review critical cases to ensure timely follow-up.
        </p>
        <button className='mt-5 inline-flex items-center gap-2 rounded-xl bg-[#0d4239] px-4 py-2.5 text-sm font-semibold text-white shadow-xs transition hover:bg-[#13574b] cursor-pointer'>
          View Detailed Insights
        </button>
      </div>

      <div className='absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none flex items-center justify-center'>
        <div className='relative flex h-28 w-28 items-center justify-center '>
          <div className='absolute inset-0 rounded-full bg-teal-200/30 blur-xl' />
          <img src={KneeSvg} alt='knee svg' />
        </div>
      </div>
    </div>
  )
}
