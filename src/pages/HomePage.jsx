import { Link } from 'react-router-dom'
import dashboard_image from '../assets/images/dashboard-preview.png'
import doctor_image from '../assets/images/doctor_image.jpg'
import LaptopImage from '../assets/images/laptop_image.png'
import About from '../components/About.jsx'
import { Footer, Navbar } from '../components/components.js'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#f4fcf9] relative overflow-hidden font-['Outfit']">
      <div className='absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-teal-50/50 rounded-full blur-[100px] pointer-events-none'></div>
      <div className='absolute top-[10%] right-[-10%] w-[40rem] h-[40rem] bg-green-50/40 rounded-full blur-[80px] pointer-events-none'></div>

      <Navbar />

      <main className='pt-32 pb-16 px-4 max-w-7xl mx-auto relative z-10 flex flex-col items-center'>
        <div className='text-center max-w-3xl mb-10'>
          <h1 className='text-5xl md:text-6xl font-semibold text-[#1a3b34] leading-tight mb-6 tracking-tight'>
            Knee Osteoarthritis <br />
            Care, Made Personal
          </h1>
          <p className='text-xl text-gray-800  md:px-12 leading-relaxed font-light'>
            Understand your knee, reduce day-to-day discomfort, and explore a
            care plan built around how you move.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row items-center gap-4 mb-20'>
          <button className='w-full sm:w-auto bg-[#357B62] hover:bg-[#2b6450] text-white px-8 py-3.5 rounded-full font-medium transition-colors shadow-md shadow-green-900/10'>
            Explore your care options
          </button>
          <button className='w-full sm:w-auto bg-white hover:bg-gray-50 text-[#357B62] border border-[#357B62]/30 px-8 py-3.5 rounded-full font-medium transition-colors shadow-sm'>
            Learn about knee OA
          </button>
        </div>

        <div className='w-full flex flex-col lg:flex-row gap-6 mt-4'>
          <div className='w-full lg:w-1/3 relative rounded-[2rem] overflow-hidden shadow-xl shadow-gray-200/50 group h-[400px] lg:h-[500px]'>
            <img
              src={doctor_image}
              alt='Dr. Daniel Mathew'
              className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
            />
            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent'></div>

            {/* Floating Info Box */}
            <div className='absolute bottom-6 left-6 right-6'>
              <div className='bg-white/95 backdrop-blur-md rounded-[1.5rem] p-4 flex items-center justify-between shadow-lg'>
                <div className='flex items-center space-x-3'>
                  <img
                    src={doctor_image}
                    alt='Avatar'
                    className='w-12 h-12 rounded-full object-cover'
                  />
                  <div>
                    <h3 className='font-semibold text-gray-900 leading-tight'>
                      Daniel Mathew
                    </h3>
                    <p className='text-xs text-gray-500 font-medium mt-0.5'>
                      Female, 24 Years
                    </p>
                  </div>
                </div>
                <button className='bg-[#8dbba5] hover:bg-[#7aa992] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm'>
                  Consult
                </button>
              </div>
            </div>
          </div>

          <div className='w-full lg:w-2/3 bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-gray-200/50 border-10 border-b-0 border-[#357B62] p-2 h-[400px] lg:h-[500px] flex flex-col relative'>
            <div className='w-full h-full rounded-[1.5rem] overflow-hidden bg-[#eff8f4] flex items-center justify-center p-6 lg:p-10 relative group'>
              <img
                src={dashboard_image}
                alt='Dashboard Preview'
                className='w-full h-full  object-contain rounded-xl shadow-2xl  hover:cursor-pointer transition-transform duration-700 group-hover:scale-[1.02]'
              />
            </div>
          </div>
        </div>

        <div></div>
      </main>
      <div className='max-w-7xl mx-auto px-6'>
        <About />
      </div>
      <section>
        <div className='bg-[#f7fcfa] min-h-screen'>
          <div className='max-w-6xl mx-auto px-5  lg:py-10'>
            <div className='text-center mb-4 lg:mb-16'>
              <h1 className='text-2xl lg:text-3xl font-bold text-[#0d2320] leading-tight'>
                Ready to Get Started with Smarter Knee Analysis?
              </h1>
              <p className='mt-2 text-sm lg:text-xl text-gray-600 max-w-3xl mx-auto'>
                Join Thousands of Professionals Using KOA-AI to Enhance
                Diagnosis in Minutes.
                <br />
                Create Your Account or Log In Below.
              </p>
            </div>

            <div className='bg-white rounded-2xl border border-gray-100 overflow-hidden '>
              <div className='grid  lg:grid-cols-2 min-h-100 '>
                <div className='p-6 lg:p-12 flex flex-col justify-center'>
                  <div className='flex justify-center'>
                    <div className='w-15 h-15 rounded-full bg-[#376e52] flex items-center justify-center'>
                      <svg
                        className='w-7 h-7 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeWidth={1}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                        />
                      </svg>
                    </div>
                  </div>

                  <h2 className='text-center text-xl lg:text-2xl font-bold text-[#152b28] mt-3'>
                    Create Your Account for
                    <br />
                    Seamless Analysis and Reports.
                  </h2>

                  <div className='relative mt-8'>
                    <div className='absolute top-8 left-[10%] right-[10%] border-t-2 border-dashed border-gray-300' />

                    <div className='grid grid-cols-3 gap-6 relative px-2'>
                      <div className='text-center'>
                        <div className='relative inline-flex'>
                          <span className='absolute -top-3 -right-3 w-7 h-7 rounded-full bg-white border-2 border-gray-300 text-xs font-bold flex items-center justify-center text-[#1E6F47]'>
                            1
                          </span>
                          <div className='w-12 h-12 rounded-full bg-white border-2 border-gray-200 shadow-md flex items-center justify-center text-[#1E6F47]'>
                            <svg
                              className='w-8 h-8'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12'
                              />
                            </svg>
                          </div>
                        </div>
                        <h3 className='font-bold mt-4 text-[#152b28] text-sm'>
                          Upload X-ray
                        </h3>
                        <p className='text-xs text-gray-500 mt-2'>
                          Upload your knee X-ray image securely.
                        </p>
                      </div>

                      {/* Step 2 */}
                      <div className='text-center'>
                        <div className='relative inline-flex'>
                          <span className='absolute -top-3 -right-3 w-7 h-7 rounded-full bg-white border-2 border-gray-300 text-xs font-bold flex items-center justify-center text-[#1E6F47]'>
                            2
                          </span>
                          <div className='w-12 h-12 rounded-full bg-white border-2 border-gray-200 shadow-md flex items-center justify-center text-[#1E6F47]'>
                            <svg
                              className='w-8 h-8'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M9.75 17L9 21l3-2 3 2-.75-4M5 10a7 7 0 1114 0c0 3.866-3.134 7-7 7s-7-3.134-7-7z'
                              />
                            </svg>
                          </div>
                        </div>
                        <h3 className='font-bold mt-4 text-[#152b28] text-sm'>
                          AI Analysis
                        </h3>
                        <p className='text-xs text-gray-500 mt-2'>
                          Our Analyzes and predicts KL grade.
                        </p>
                      </div>

                      {/* Step 3 */}
                      <div className='text-center'>
                        <div className='relative inline-flex'>
                          <span className='absolute -top-3 -right-3 w-7 h-7 rounded-full bg-white border-2 border-gray-300 text-xs font-bold flex items-center justify-center text-[#1E6F47]'>
                            3
                          </span>
                          <div className='w-12 h-12 rounded-full bg-white border-2 border-gray-200 shadow-md flex items-center justify-center text-[#1E6F47]'>
                            <svg
                              className='w-8 h-8'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                              />
                            </svg>
                          </div>
                        </div>
                        <h3 className='font-bold mt-4 text-[#152b28] text-sm'>
                          View Results
                        </h3>
                        <p className='text-xs text-gray-500 mt-2'>
                          See results, heatmap and download report.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='grid grid-cols-2 gap-3 mt-10'>
                    <Link to='/register'>
                      <button className='w-full py-3 rounded-xl bg-[#1E6F47] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#17553A]'>
                        <svg
                          className='w-5 h-5'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z'
                          />
                        </svg>
                        Create an Account
                      </button>
                    </Link>
                    <Link to='/login'>
                      <button className='w-full py-3 rounded-xl border-2 border-[#1E6F47] text-[#1E6F47] font-semibold hover:bg-[#f2faf7]'>
                        Log In →
                      </button>
                    </Link>
                  </div>
                </div>

                <div className='relative flex items-center justify-center p-10 lg:p-12 bg-gradient-to-br from-green-500 via-green-400'>
                  <img
                    src={LaptopImage}
                    alt='KOA-AI Laptop Preview'
                    className='relative z-10 w-full h-full object-contain drop-shadow-2xl'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
