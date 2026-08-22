import { Plus } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { DashboardShell } from '../components/pageComponents/dashboardComp'
import {
  ImagingPanel,
  PredictionSummary,
  ProbabilityChart,
  ReportActions,
  ReportFooter,
  ReportPatientCard,
} from '../components/pageComponents/reportComp'

export default function ReportPage() {
  const { state } = useLocation()
  const patient = state?.patient || {}

  return (
    <DashboardShell>
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Page header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Analysis <span className="text-[#19745f]">Results</span>
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              AI-powered knee osteoarthritis assessment
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <ReportActions />
            <Link
              to="/analyze"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#17614e] px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-[#1a5a49]/20 transition hover:bg-[#104c3d]"
            >
              <Plus size={18} />
              New Analysis
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 grid gap-5 xl:grid-cols-[292px_minmax(0,1fr)]">
          <ReportPatientCard patient={patient} />

          <div className="space-y-4">
            <PredictionSummary />

            <div className="grid gap-4 lg:grid-cols-[1.05fr_.95fr]">
              <div className="space-y-4">
                <ProbabilityChart />
              </div>
              <ImagingPanel />
            </div>

            <ReportFooter />
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
