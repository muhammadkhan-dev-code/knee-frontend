import {
  AiInsightsCard,
  AnalysisVolumeChart,
  DashboardShell,
  DashboardWelcomeHeader,
  GradeDistributionChart,
  KpiCards,
  ModelPerformanceCard,
  RecentAnalyses
} from '../components/pageComponents/dashboardComp'

function getStoredUser () {
  try {
    return JSON.parse(localStorage.getItem('user') || '{}')
  } catch {
    return {}
  }
}

export default function DashboardPage () {
  const user = getStoredUser()

  return (
    <DashboardShell>
      <div className='space-y-6'>
        <DashboardWelcomeHeader user={user} />

        <KpiCards />

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <AnalysisVolumeChart />
          <GradeDistributionChart />
        </div>

        <RecentAnalyses />

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <AiInsightsCard />
          <ModelPerformanceCard />
        </div>
      </div>
    </DashboardShell>
  )
}
