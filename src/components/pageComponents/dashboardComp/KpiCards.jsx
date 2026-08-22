import { AlertTriangle, TrendingUp, ShieldCheck, Users } from 'lucide-react'

const metrics = [
  {
    label: 'Total Analyses',
    value: '134',
    change: '4.5%',
    period: 'vs last month',
    icon: TrendingUp,
    bgColor: 'bg-[#eaf7f4]',
    iconColor: 'text-[#0d4239]',
    changeColor: 'text-emerald-700 bg-emerald-50'
  },
  {
    label: 'Critical Cases (KL 4)',
    value: '18',
    change: '5%',
    period: 'vs last month',
    icon: AlertTriangle,
    bgColor: 'bg-[#fff4e5]',
    iconColor: 'text-[#d97706]',
    changeColor: 'text-amber-700 bg-amber-50'
  },
  {
    label: 'Average Confidence',
    value: '89.2%',
    change: '4.5%',
    period: 'vs last month',
    icon: ShieldCheck,
    bgColor: 'bg-[#eaf7f4]',
    iconColor: 'text-[#0d4239]',
    changeColor: 'text-emerald-700 bg-emerald-50'
  },
  {
    label: 'Total Patients',
    value: '98',
    change: '6.1%',
    period: 'vs last month',
    icon: Users,
    bgColor: 'bg-[#f0efff]',
    iconColor: 'text-[#6366f1]',
    changeColor: 'text-indigo-700 bg-indigo-50'
  },
]

export default function KpiCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map(({ label, value, change, period, icon: Icon, bgColor, iconColor }) => (
        <div
          key={label}
          className="flex flex-col justify-between rounded-xl border border-slate-100 bg-white p-5 shadow-md transition hover:shadow-md"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-500">{label}</span>
            <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${bgColor}`}>
              <Icon size={22} className={iconColor} />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-4xl font-extrabold tracking-tight text-slate-900">{value}</div>
            <div className="mt-2 flex items-center gap-1.5 text-sm font-medium">
              <span className="font-semibold text-emerald-600">↗ {change}</span>
              <span className="text-slate-400">{period}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
