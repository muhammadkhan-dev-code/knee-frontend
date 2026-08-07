import { ArrowLeft, Home } from 'lucide-react'
import { Footer, Navbar } from '../components/components.js'

const NotFound = () => {
  return (
    <>
      <Navbar />

      <main className='min-h-screen overflow-hidden bg-white text-[#0D1715]'>
        <section className='relative px-6 pb-0 pt-24 sm:px-10 lg:px-16'>
          <div className='pointer-events-none absolute left-1/2 top-10 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#DFF3EC] opacity-60 blur-3xl' />

          <div className='relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center mt-5'>
            {/* Badge */}
            <div className='mb-7 mt-3 inline-flex items-center gap-3 rounded-xl border-4  border-[#534e4e5b] bg-[#F3FAF7] px-16 py-4 text-2xl font-medium text-[#27856F]'>
             
              Page Not Available
            </div>

            {/* 404   having gap */}
            <h1 className='text-[76px] mb-5  font-bold leading-none tracking-[-0.07em] text-[#1b2d2a] sm:text-[110px] md:text-[140px] lg:text-[170px]'>
              4 0 4
            </h1>

            {/* Heading */}
            <h2 className='mt-2 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl'>
              Page Not Found
            </h2>

            {/* Description */}
            <p className='mt-5 max-w-xl text-base leading-7 text-[#647572] sm:text-lg'>
              The page you're looking for doesn't exist or may have been moved.
              Let's get you back to KOA-AI.
            </p>

            {/* Buttons */}
            <div className='mt-8 flex flex-col items-center gap-3 sm:flex-row'>
              <a
                href='/'
                className='group inline-flex items-center justify-center gap-2 rounded-xl bg-[#27856F] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(39,133,111,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#207662]'
              >
                <Home size={17} />
                Back to Home
                <ArrowLeft
                  size={16}
                  className='rotate-180 transition-transform duration-300 group-hover:translate-x-1'
                />
              </a>

              <button
                type='button'
                onClick={() => window.history.back()}
                className='inline-flex items-center justify-center gap-2 rounded-xl border border-[#D8E4E0] bg-white px-6 py-3.5 text-sm font-semibold text-[#18332E] transition-all duration-300 hover:border-[#27856F] hover:bg-[#F4FAF7]'
              >
                <ArrowLeft size={16} />
                Go Back
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default NotFound
