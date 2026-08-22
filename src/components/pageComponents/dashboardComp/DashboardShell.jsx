import DashboardHeader from './DashboardHeader'
import DashboardSidebar from './DashboardSidebar'

function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem('user') || '{}')
  } catch {
    return {}
  }
}

export default function DashboardShell({ children }) {
  const user = getStoredUser()

  return (
    <div className="min-h-screen bg-[#f4f7f6] text-slate-900 font-['Outfit']">
     
      <DashboardHeader user={user} />

      {/* Main Container below Header */}
      <div className="flex flex-col lg:flex-row">
        <DashboardSidebar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0">
          {children}
        </main>
      </div>
    </div>
  )
}
