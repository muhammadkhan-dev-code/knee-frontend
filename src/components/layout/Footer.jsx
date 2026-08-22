import Logo from '../common/Logo'

const Footer = () => {
  const handleScrollTo = (id) => (e) => {
    e.preventDefault()
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className='relative bg-gradient-to-t from-white to-emerald-50 text-gray-800 mt-12'>
      <div className='max-w-screen-2xl mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
          <div className='lg:col-span-5'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='p-3 bg-white rounded-full shadow-sm'>
                <Logo size={28} animated={false} />
              </div>
              <div>
                <h3 className='text-lg font-semibold'>Medonix</h3>
                <p className='text-sm text-gray-600'>
                  All-in-one healthcare platform
                </p>
              </div>
            </div>

            <p className='text-sm text-gray-600 mb-6 max-w-md'>
              Get updates, releases, and tips for better patient care. Join our
              community and stay informed about product improvements.
            </p>

            <form className='flex gap-3 max-w-md' onSubmit={(e) => e.preventDefault()}>
              <label htmlFor='footer-email' className='sr-only'>
                Email
              </label>
              <input
                id='footer-email'
                type='email'
                placeholder='Your work email'
                className='flex-1 rounded-full border border-gray-200 px-4 py-3 focus:outline-none'
              />
              <button className='bg-[#357B62] hover:bg-[#2b6450] text-white px-5 py-2.5 rounded-full font-medium'>
                Join Now
              </button>
            </form>
          </div>

          <div className='lg:col-span-7'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
              <div>
                <h4 className='text-sm font-semibold mb-3'>Navigation</h4>
                <ul className='space-y-2 text-sm'>
                  <li>
                    <a href='#home' onClick={handleScrollTo('home')} className='hover:underline text-emerald-700'>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href='#features' onClick={handleScrollTo('features')} className='hover:underline'>
                      Features
                    </a>
                  </li>
                  <li>
                    <a href='#how-it-works' onClick={handleScrollTo('how-it-works')} className='hover:underline'>
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href='#about' onClick={handleScrollTo('about')} className='hover:underline'>
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className='text-sm font-semibold mb-3'>Resources</h4>
                <ul className='space-y-2 text-sm'>
                  <li>
                    <a href='#features' onClick={handleScrollTo('features')} className='hover:underline'>
                      AI Analysis
                    </a>
                  </li>
                  <li>
                    <a href='#how-it-works' onClick={handleScrollTo('how-it-works')} className='hover:underline'>
                      Methodology
                    </a>
                  </li>
                  <li>
                    <a href='#about' onClick={handleScrollTo('about')} className='hover:underline'>
                      XAI Explainability
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className='text-sm font-semibold mb-3'>Contact Us</h4>
                <p className='text-sm text-gray-600'>support@kneeauth.com</p>
                <p className='text-sm text-gray-600 mt-2'>
                  Hyderabad Sindh Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-screen-2xl mx-auto px-4 py-6 flex text-center justify-center flex-col md:flex-row items-center gap-4'>
        <p className='text-md text-gray-600 mb-4 text-center md:text-left'>
          ©2026 KneeOset. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
