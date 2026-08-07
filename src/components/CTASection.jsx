import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-[#146B58] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left */}

          <div>

            <h2 className="text-4xl font-bold text-white">
              Ready to explore KOA-AI?
            </h2>

            <p className="mt-4 text-emerald-100 text-lg max-w-2xl leading-8">
              Upload a knee X-ray and experience a more explainable approach
              to osteoarthritis assessment.
            </p>

          </div>

          {/* Button */}

          <button className="group inline-flex items-center gap-3 bg-white text-[#146B58] font-semibold px-7 py-4 rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-lg">

            Get Started

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />

          </button>

        </div>

      </div>
    </section>
  );
}