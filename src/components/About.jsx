import dashboard from "../assets/images/about_image.jpg"

export default function About() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center mb-20">

          <span className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 text-sm bg-white shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Who We Are
          </span>

          <h2 className="text-5xl font-semibold mt-6 leading-tight text-gray-900">
            Innovating for a
            <br />
            <span className="italic font-light">
              Smarter
            </span>{" "}
            Future
          </h2>

          <p className="text-gray-500 mt-5 text-lg">
            Global tech company creating smarter, simpler solutions.
          </p>

        </div>

     

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <h3 className="text-5xl font-semibold leading-tight text-gray-900 max-w-md">
              Empower decisions
              <br />
              with real-time
              <br />
              dashboards
            </h3>

            <p className="text-gray-500 mt-8 max-w-sm leading-8">
              Track, analyze, and act instantly with intuitive dashboards
              designed for accuracy and speed.
            </p>

            <button className="mt-10 px-7 py-3 rounded-full bg-green-700 hover:bg-green-800 text-white transition">
              About us
            </button>

            <div className="mt-28">

              <h4 className="text-5xl font-semibold">
                0+
              </h4>

              <p className="text-gray-500 mt-2">
                Active dashboards monitored daily
              </p>

            </div>

          </div>

          {/* Right */}

          <div className="relative">

            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-green-500 via-green-400 to-emerald-200 p-10">

              <img
                src={dashboard}
                alt="Dashboard"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />

            </div>

          </div>

        </div>

      </div>

     
        
    </section>

   
  );
}