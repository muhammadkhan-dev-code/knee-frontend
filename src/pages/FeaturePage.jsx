import featureImg from '../assets/images/feature_image_1.avif'
import featureVideo from '../assets/videos/featureVideo.mp4'
import {Navbar, Footer}  from '../components/components.js'

const FeaturePage = () => {
  return (
    <div className='w-full bg-white '>
      <Navbar />
      <section className='relative w-full overflow-hidden bg-white mt-10'>
        <div className='relative z-10 max-w-4xl mx-auto px-4 pt-20 pb-16 flex flex-col items-center text-center '>
          <span className='inline-flex items-center gap-2 bg-white text-gray-700 border border-gray-200 px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-sm'>
            <span className='bg-[#357B62] text-white text-xs font-semibold px-2 py-0.5 rounded-full'>
              New
            </span>
            Simpler Healthcare for All
          </span>

          <h1 className='leading-tight mb-5'>
            <span className='block font-serif italic text-4xl md:text-5xl text-gray-900'>
              All-in-One
            </span>
            <span className='block font-extrabold font-serif text-4xl md:text-5xl text-gray-900 mt-1'>
              Healthcare Platform
            </span>
          </h1>

          <p className='text-base md:text-lg text-gray-700 max-w-xl '>
            Discover powerful new features that bring patients, doctors, and
            clinics together for faster care and better outcomes.
          </p>
        </div>

        <div className='relative max-w-5xl mx-auto px-4 pb-24'>
          <div className='relative rounded-3xl overflow-hidden shadow-2xl aspect-video'>
            <video
              className='absolute inset-0 w-full h-full object-cover'
              src={featureVideo}
              autoPlay
              muted
              loop
              playsInline
              aria-label='Background demonstration video'
            />

            <img
              src={featureImg}
              alt='Dashboard preview'
              className='absolute inset-0 m-auto max-w-[85%] max-h-[85%] object-contain z-10 rounded-xl shadow-xl'
            />
          </div>
        </div>
      </section>

       <Footer />

    </div>
  )
}

export default FeaturePage
