import { ShieldCheck } from 'lucide-react'

export default function ModelPerformanceCard () {
  return (
    <div className='flex h-full flex-col justify-between rounded-xl border border-slate-100 bg-white p-5 shadow-xs'>
      <div className='flex items-center gap-3'>
        <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf7f4] text-[#0d4239]'>
          <ShieldCheck size={20} />
        </div>
        <h3 className='text-lg font-bold text-slate-900'>
          Model Performance DenseNet-B0
        </h3>
      </div>

      <div className='mt-6 grid grid-cols-2 gap-4'>
        <div>
          <p className='text-md font-medium text-slate-500'>Overall Accuracy</p>
          <p className='mt-1 text-3xl font-extrabold tracking-tight text-slate-900'>
            92.7%
          </p>
        </div>
        <div>
          <p className='text-md font-medium text-slate-500'>
            Average Confidence
          </p>
          <p className='mt-1 text-3xl font-extrabold tracking-tight text-slate-900'>
            89.2%
          </p>
        </div>
      </div>

      <p className='mt-6 text-xl text-slate-700'>
        Model is performing well across all KL grades.
      </p>
    </div>
  )
}
