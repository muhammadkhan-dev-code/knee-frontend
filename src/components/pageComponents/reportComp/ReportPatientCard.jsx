import { FileImage, Pencil, ShieldCheck, UserRound } from 'lucide-react'
import xrayImage from '../../assets/xray.png'

export default function ReportPatientCard({ patient }) {
  const rows = [
    ['Patient ID', patient.patientId || 'P-2025-00124'],
    ['Name', patient.fullName || 'Ahsan Raza'],
    ['Age / Sex', `${patient.age || '56'} / ${patient.gender || 'Male'}`],
    ['Knee Side', patient.kneeSide || 'Right Knee'],
    ['Reported Symptoms', patient.clinicalNotes || 'Knee pain, stiffness, swelling during movement.'],
  ]

  return (
    <aside className="space-y-4">
      <section className="rounded-xl border border-[#dceae6] bg-white p-5 shadow-sm shadow-[#1a5a49]/5">
        <div className="flex items-center justify-between"><h2 className="flex items-center gap-2 text-sm font-bold"><UserRound size={16} className="text-[#19745f]" />Patient Summary</h2><button className="flex items-center gap-1 text-xs font-semibold text-[#19745f]"><Pencil size={13} /> Edit</button></div>
        <dl className="mt-5 space-y-3 text-xs"><div className="grid grid-cols-[112px_1fr] gap-2"><dt className="font-semibold">{rows[0][0]}</dt><dd>{rows[0][1]}</dd></div>{rows.slice(1).map(([label, value]) => <div key={label} className="grid grid-cols-[112px_1fr] gap-2"><dt className="font-semibold">{label}</dt><dd className="leading-relaxed text-slate-700">{value}</dd></div>)}</dl>
      </section>
      <section className="rounded-xl border border-[#dceae6] bg-white p-4 shadow-sm shadow-[#1a5a49]/5"><h2 className="flex items-center gap-2 text-sm font-bold"><FileImage size={16} className="text-[#19745f]" />Uploaded X-ray</h2><div className="mt-3 h-52 overflow-hidden rounded-lg bg-slate-950" style={{ backgroundImage: `url(${xrayImage})`, backgroundPosition: 'left center', backgroundSize: '200% 100%' }} /><div className="mt-4 grid grid-cols-[88px_1fr] gap-y-2 text-xs"><span className="font-semibold">File Name</span><span>{patient.fileName || 'knee_xray_right.png'}</span><span className="font-semibold">Uploaded On</span><span>May 16, 2025 · 10:24 AM</span></div><div className="mt-4 flex gap-2 rounded-lg bg-[#e7f5ef] p-3 text-xs leading-relaxed text-[#245548]"><ShieldCheck size={18} className="shrink-0 text-[#19745f]" />This analysis is AI-assisted and not a substitute for professional medical advice.</div></section>
    </aside>
  )
}
