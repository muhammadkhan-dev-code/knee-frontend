import { ArrowRight, Sparkles } from 'lucide-react'

const AnalysisNextStep = ({ onAnalyze, isAnalyzing }) => {
  return (
    <div className='mt-4 flex items-center justify-end'>
      <button
        type='button'
        onClick={onAnalyze}
        disabled={isAnalyzing}
        className='flex items-center  gap-4 rounded-lg bg-[#008057] hover:bg-[#006F51] text-white px-10 py-4 text-md font-semibold cursor-pointer'
      >
        {isAnalyzing ? (
          <>
            <Sparkles size={20} className='animate-spin' />
            <span>Processing Precision AI Analysis</span>
          </>
        ) : (
          <>
            <span>Execute AI Analysis</span>
            <ArrowRight size={20} />
          </>
        )}
      </button>
    </div>
  )
}

export default AnalysisNextStep
