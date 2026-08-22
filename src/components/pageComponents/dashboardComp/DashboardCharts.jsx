export function GradeDistributionChart () {
  const categories = [
    {
      label: 'Normal/Doubtful (KL 0-1)',
      count: 42,
      percentage: '41.6%',
      color: '#0d4239'
    },
    {
      label: 'Mild/Moderate (KL 2-3)',
      count: 46,
      percentage: '45.5%',
      color: '#2c806b'
    },
    {
      label: 'Severe (KL 4)',
      count: 14,
      percentage: '13.9%',
      color: '#cf4242'
    }
  ]
  const conicStyle = {
    background: `conic-gradient(
      #0d4239 0% 41.6%,
      #2c806b 41.6% 87.1%,
      #cf4242 87.1% 100%
    )`
  }

  return (
    <div className='flex h-full flex-col justify-between rounded-xl border border-slate-100 bg-white p-5 shadow-xs'>
      <h3 className='text-lg font-bold text-slate-900'>
        Patient Grade Distribution
      </h3>

      <div className='mt-4  p-8 flex flex-col items-center justify-center gap-24  sm:flex-row'>
        <div
          className='relative flex h-40 w-40 shrink-0 items-center justify-center rounded-full'
          style={conicStyle}
        >
          <div className='h-22 w-22 rounded-full bg-white shadow-inner' />
        </div>

        <div className='space-y-3.5'>
          {categories.map(({ label, count, percentage, color }) => (
            <div key={label} className='flex items-start gap-2.5 text-md'>
              <span
                className='mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full'
                style={{ backgroundColor: color }}
              />
              <div>
                <p className='font-semibold text-slate-800'>{label}</p>
                <p className='text-slate-500'>
                  {count} ({percentage})
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function AnalysisVolumeChart () {
  const data = [
    { label: 'Week 1', value: 65 },
    { label: 'Week 2', value: 52 },
    { label: 'Week 3', value: 71 },
    { label: 'Week 4', value: 34 }
  ]

  const yTicks = [100, 80, 60, 40, 20, 0]

  return (
    <div className='flex h-full flex-col rounded-xl border border-slate-100 bg-white p-5 shadow-xs'>
      <div>
        <h3 className='text-lg font-bold text-slate-900'>
          Analysis Volume - Last 4 Weeks
        </h3>
        <p className='mt-0.5 text-md text-slate-500'>Number of Analyses</p>
      </div>
      <div className='mt-8 flex flex-1 gap-4'>
        <div className='flex w-7  mb-5 flex-col justify-between text-md text-slate-400'>
          {yTicks.map(tick => (
            <span key={tick}>{tick}</span>
          ))}
        </div>

        <div className='relative flex flex-1 flex-col'>
          {/* Actual Plot Area */}
          <div className='relative flex-1'>
            {/* Grid Lines */}
            <div className='absolute inset-0 flex flex-col justify-between pointer-events-none'>
              {yTicks.map(tick => (
                <div key={tick} className='w-full border-b border-slate-100' />
              ))}
            </div>

            {/* Bars */}
            <div className='absolute inset-0 flex items-end justify-around px-8'>
              {data.map(({ label, value }) => (
                <div
                  key={label}
                  className='relative flex h-full w-12 flex-col justify-end items-center'
                >
                  <span
                    className='absolute bottom-[calc(var(--bar-height)+4px)] text-sm font-bold text-slate-700'
                    style={{
                      '--bar-height': `${value}%`
                    }}
                  >
                    {value}
                  </span>

                  <div
                    className='w-full rounded-t-md bg-[#0d4239] transition-all hover:bg-[#155a4e]'
                    style={{
                      height: `${value}%`
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* X Axis Labels - OUTSIDE plot */}
          <div className='flex justify-around px-8 pt-2'>
            {data.map(({ label }) => (
              <span
                key={label}
                className='w-12 text-center text-sm font-medium text-slate-500'
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
