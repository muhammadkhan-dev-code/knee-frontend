import { Register } from '../components/components.js'
import SignUpImage from '/signup_image.webp'

export default function RegisterPage() {
    return (
        <div className="h-screen max-h-screen max-w-full mx-auto flex items-center justify-center overflow-hidden py-2 bg-[url('/signup_background.png')] bg-cover bg-center bg-no-repeat">
            <div className='w-full max-h-[99%] h-full max-w-5xl bg-white  rounded-xl shadow-lg overflow-hidden'>
                <div className='grid grid-cols-1 lg:grid-cols-2 h-full w-full'>
                    <div className='flex items-center justify-center p-6 h-full'>
                        <div className='w-full max-w-[480px]'>
                            <Register />
                        </div>
                    </div>

                    <div className='relative bg-slate-100 hidden lg:block'>
                        <img
                            src={SignUpImage}
                            alt='Healthcare SignUp'
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
