import React from 'react';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#f4fcf9] relative overflow-hidden font-['Outfit']">


      <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-teal-50/50 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-[10%] right-[-10%] w-[40rem] h-[40rem] bg-green-50/40 rounded-full blur-[80px] pointer-events-none"></div>

      <Navbar />

      <main className="pt-32 pb-16 px-4 max-w-7xl mx-auto relative z-10 flex flex-col items-center">

        <div className="text-center max-w-3xl mb-10">
          <h1 className="text-5xl md:text-6xl font-semibold text-[#1a3b34] leading-tight mb-6 tracking-tight">
            Knee Osteoarthritis <br />
            Care, Made Personal
          </h1>
          <p className="text-xl text-gray-800  md:px-12 leading-relaxed font-light">
            Understand your knee, reduce day-to-day discomfort,
            and explore a care plan built around how you move.
          </p>
        </div>


        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
          <button className="w-full sm:w-auto bg-[#357B62] hover:bg-[#2b6450] text-white px-8 py-3.5 rounded-full font-medium transition-colors shadow-md shadow-green-900/10">
            Explore your care options
          </button>
          <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#357B62] border border-[#357B62]/30 px-8 py-3.5 rounded-full font-medium transition-colors shadow-sm">
            Learn about knee OA
          </button>
        </div>


        <div className="w-full flex flex-col lg:flex-row gap-6 mt-4">


          <div className="w-full lg:w-1/3 relative rounded-[2rem] overflow-hidden shadow-xl shadow-gray-200/50 group h-[400px] lg:h-[500px]">
            <img
              src="/doctor_image.jpg"
              alt="Dr. Daniel Mathew"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

            {/* Floating Info Box */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-md rounded-[1.5rem] p-4 flex items-center justify-between shadow-lg">
                <div className="flex items-center space-x-3">
                  <img src="/doctor_image.jpg" alt="Avatar" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h3 className="font-semibold text-gray-900 leading-tight">Daniel Mathew</h3>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">Female, 24 Years</p>
                  </div>
                </div>
                <button className="bg-[#8dbba5] hover:bg-[#7aa992] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm">
                  Consult
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-gray-200/50 border-10 border-b-0 border-[#357B62] p-2 h-[400px] lg:h-[500px] flex flex-col relative">
            <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-[#eff8f4] flex items-center justify-center p-6 lg:p-10 relative group">
              <img
                src="/dashboard-preview.png"
                alt="Dashboard Preview"
                className="w-full h-full  object-contain rounded-xl shadow-2xl  hover:cursor-pointer transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default HomePage;
