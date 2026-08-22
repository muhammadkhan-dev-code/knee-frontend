import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AnalysisNextStep,
  AnalyzeHeader,
  PatientInformation,
  XRayUpload
} from '../components/components'
import { DashboardShell } from '../components/pageComponents/dashboardComp'

const emptyPatient = {
  fullName: '',
  age: '',
  gender: '',
  patientId: '',
  contactNumber: '',
  email: '',
  clinicalNotes: ''
}

const allowedTypes = [
  'image/jpeg',
  'image/png',
  'image/jpg',
  'application/dicom',
  'application/dicom+json'
]
const maxFileSize = 25 * 1024 * 1024

export default function AnalyzePage () {
  const [patientData, setPatientData] = useState(emptyPatient)
  const [xrayFile, setXrayFile] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const navigate = useNavigate()

  const handlePatientChange = (field, value) =>
    setPatientData(current => ({ ...current, [field]: value }))

  const handleFileSelect = file => {
    if (!file) return
    const validType =
      allowedTypes.includes(file.type) ||
      file.name.toLowerCase().endsWith('.dcm')
    if (!validType) return alert('Please upload a JPG, PNG, or DICOM file.')
    if (file.size > maxFileSize)
      return alert('File size must be less than 25MB.')
    setXrayFile(file)
  }

  const handleAnalyze = () => {
    if (
      !patientData.fullName ||
      !patientData.age ||
      !patientData.gender ||
      !xrayFile
    ) {
      return alert(
        'Please complete the patient information and upload a knee X-ray study.'
      )
    }
    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
      navigate('/report', {
        state: { patient: { ...patientData, fileName: xrayFile.name } }
      })
    }, 2000)
  }

  return (
    <DashboardShell>
      <main className=' w-full max-w-screen-2xl  pb-10 pt-5 sm:px-7 lg:px-9'>
        <AnalyzeHeader />
        <div className='grid grid-cols-1 gap-2 lg:grid-cols-12'>
          <section className='flex flex-col justify-between rounded-xl border border-[#dceae6] bg-white p-6 shadow-sm shadow-[#1a5a49]/5 sm:p-8 lg:col-span-7'>
            <PatientInformation
              patientData={patientData}
              onChange={handlePatientChange}
              onClear={() => setPatientData(emptyPatient)}
            />
          </section>
          <section className='flex flex-col justify-between rounded-xl border border-[#dceae6] bg-white p-6 shadow-sm shadow-[#1a5a49]/5 sm:p-8 lg:col-span-5'>
            <XRayUpload
              file={xrayFile}
              onFileSelect={handleFileSelect}
              onRemove={() => setXrayFile(null)}
            />
          </section>
        </div>
        <AnalysisNextStep onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />
      </main>
    </DashboardShell>
  )
}
