import { ArrowRight, Eye } from 'lucide-react'
import {
  AIResultCard,
  CTASection,
  Navbar,
  TechnologySection,
  WorkflowSection
} from '../components/components.js'

const HowItWorks = () => {
  return (
    <main className='min-h-screen overflow-hidden bg-[#F7FCFA] text-[#0D2B28]'>
      <Navbar />
      <section className='relative px-6 pb-20 pt-24 sm:px-10 lg:px-16 lg:pb-28 lg:pt-28'>
        {/* Background Glow */}
        <div
          className='
            pointer-events-none absolute
            -left-32 top-10
            h-96 w-96
            rounded-full
            bg-[#DDF5ED]
            opacity-50
            blur-3xl
          '
        />

        <div
          className='
            pointer-events-none absolute
            right-[-180px] top-20
            h-[500px] w-[500px]
            rounded-full
            bg-[#E5F7F2]
            opacity-50
            blur-3xl
          '
        />

        <div
          className='
            relative z-10 mx-auto
            grid max-w-[1200px]
            items-center gap-14
            lg:grid-cols-[1fr_0.95fr]
            lg:gap-20
          '
        >
          <div className='max-w-[620px]'>
            {/* Badge */}
            <div
              className='
                mb-7 inline-flex
                items-center gap-2
                rounded-full
                border border-[#CFE5DE]
                bg-white/80
                px-4 py-2
                text-sm font-semibold
                text-[#27856F]
                shadow-sm
                backdrop-blur
              '
            >
              <Eye size={15} strokeWidth={2.2} />
              Understanding KOA-AI
            </div>

            {/* Main Heading */}
            <h1
              className='
                text-5xl
                font-bold
                leading-[1.02]
                tracking-[-0.045em]
                text-[#0B302C]
                sm:text-6xl
                lg:text-[64px]
                xl:text-[70px]
              '
            >
              How It Works
            </h1>

            {/* Sub Heading */}
            <h2
              className='
                mt-7
                text-2xl
                font-semibold
                leading-tight
                tracking-[-0.025em]
                text-[#294E49]
                sm:text-3xl
              '
            >
              From Knee X-Ray to
              <br className='hidden sm:block' />
              Explainable AI Insight
            </h2>

            {/* Description */}
            <p
              className='
                mt-6
                max-w-[570px]
                text-base
                leading-7
                text-[#5D7470]
                sm:text-lg
                sm:leading-8
              '
            >
              KOA-AI combines image processing, deep learning, and explainable
              AI to help healthcare professionals understand knee osteoarthritis
              severity from X-ray images.
            </p>

            {/* CTA */}
            <div className='mt-8'>
              <a
                href='/signup'
                className='
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-[#278F72]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_25px_rgba(39,143,114,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#207963]
                  hover:shadow-[0_14px_30px_rgba(39,143,114,0.28)]
                '
              >
                Get Started
                <ArrowRight
                  size={18}
                  className='
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  '
                />
              </a>
            </div>
          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className='relative'>
            {/* Main container */}
            <div
              className='
                relative
                mx-auto
                max-w-[540px]
                rounded-[30px]
                bg-[#DDF3EC]
                p-5
                shadow-[0_25px_70px_rgba(28,105,86,0.08)]
                sm:p-6
              '
            >
              <div
                className='
                  grid
                  grid-cols-[1.15fr_0.85fr]
                  gap-3
                  sm:gap-4
                '
              >
                {/* ================= X-RAY CARD ================= */}
                <div
                  className='
                    relative
                    h-[300px]
                    overflow-hidden
                    rounded-[18px]
                    bg-[#EBCF9E]
                    sm:h-[350px]
                  '
                >
                  {/* X-Ray image */}
                  <img
                    src='/images/knee-xray.jpg'
                    alt='Knee X-ray analysis'
                    className='
                      h-full
                      w-full
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      hover:scale-[1.03]
                    '
                  />

                  {/* Soft overlay */}
                  <div
                    className='
                      pointer-events-none
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/10
                      via-transparent
                      to-white/5
                    '
                  />

                  {/* Label */}
                  <div
                    className='
                      absolute
                      bottom-4
                      left-4
                      rounded-lg
                      border
                      border-white/30
                      bg-white/85
                      px-3
                      py-1.5
                      text-xs
                      font-semibold
                      text-[#173A35]
                      shadow-sm
                      backdrop-blur-md
                    '
                  >
                    Knee X-Ray
                  </div>
                </div>
                <div
                  className='
                    relative
                    h-[300px]
                    overflow-hidden
                    rounded-[18px]
                    bg-[#0C152C]
                    sm:h-[350px]
                  '
                >
                  {/* Heatmap */}
                  <div
                    className='
                      absolute
                      inset-0
                      bg-[radial-gradient(circle_at_50%_48%,#ffb000_0%,#ff5c00_10%,#f52222_18%,#18b9ef_38%,#15357b_58%,#091326_78%)]
                      opacity-95
                    '
                  />

                  {/* Secondary glow */}
                  <div
                    className='
                      absolute
                      left-1/2
                      top-[47%]
                      h-24
                      w-24
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-orange-400/50
                      blur-2xl
                    '
                  />

                  {/* Grid effect */}
                  <div
                    className='
                      absolute
                      inset-0
                      opacity-10
                      bg-[linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)]
                      bg-[size:24px_24px]
                    '
                  />

                  {/* Label */}
                  <div
                    className='
                      absolute
                      bottom-4
                      left-4
                      rounded-lg
                      border
                      border-white/10
                      bg-[#0B142A]/75
                      px-3
                      py-1.5
                      text-xs
                      font-semibold
                      text-white
                      backdrop-blur-md
                    '
                  >
                    AI Attention Map
                  </div>
                </div>
              </div>

              {/* ================= FLOATING RESULT ================= */}
              <div
                className='
                  absolute
                  -bottom-5
                  left-1/2
                  flex
                  -translate-x-1/2
                  items-center
                  gap-4
                  whitespace-nowrap
                  rounded-2xl
                  border
                  border-white
                  bg-white/95
                  px-5
                  py-3
                  shadow-[0_15px_40px_rgba(25,80,68,0.15)]
                  backdrop-blur-xl
                '
              >
                {/* Status */}
                <div className='flex items-center gap-2'>
                  <span
                    className='
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-[#2D9B7B]
                      shadow-[0_0_0_4px_rgba(45,155,123,0.12)]
                    '
                  />

                  <span className='text-xs font-medium text-[#63736F]'>
                    AI Analysis
                  </span>
                </div>

                <div className='h-7 w-px bg-[#E4EBE8]' />

                {/* Result */}
                <div>
                  <p className='text-[10px] font-medium uppercase tracking-wide text-[#82908D]'>
                    Example Result
                  </p>

                  <p className='text-sm font-bold text-[#123934]'>KL Grade 2</p>
                </div>
              </div>
            </div>

            {/* Decorative Circle */}
            <div
              className='
                pointer-events-none
                absolute
                -right-6
                -top-8
                -z-0
                h-20
                w-20
                rounded-full
                border
                border-[#BDE1D5]
              '
            />

            {/* Decorative Dot */}
            <div
              className='
                pointer-events-none
                absolute
                -bottom-7
                -left-6
                h-4
                w-4
                rounded-full
                bg-[#278F72]/20
              '
            />
          </div>
        </div>
      </section>
      <section>
        <WorkflowSection />
      </section>
      <section>
        <TechnologySection />
      </section>

      <section>
        <AIResultCard />
      </section>
      <section>
        <CTASection />
      </section>
    </main>
  )
}

export default HowItWorks
