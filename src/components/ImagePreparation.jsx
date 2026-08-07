import { ArrowRight } from "lucide-react";

import XrayImage from "../assets/xray.jpg";
import ROIImage from "../assets/roi.png";
import EnhancedImage from "../assets/enhanced.png";

export default function ImagePreparation() {
  return (
    <section className="bg-[#EEF8F5] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}

          <div>

            <p className="uppercase tracking-[3px] text-[12px] font-semibold text-emerald-600 mb-5">
              02 — Prepare the Image
            </p>

            <h2 className="text-5xl font-bold leading-tight text-slate-900">
              Make the important
              <br />
              details easier to see
            </h2>

            <p className="mt-7 text-slate-500 leading-8 text-lg max-w-md">
              Before analysis, KOA-AI identifies the important knee region and
              improves contrast to prepare the X-ray for the model.
            </p>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex items-center justify-center gap-5 flex-wrap lg:flex-nowrap">

            {/* Original */}

            <div className="relative group">

              <img
                src={XrayImage}
                alt=""
                className="w-40 h-64 object-cover rounded-2xl shadow-xl transition duration-300 group-hover:scale-105"
              />

              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/40 px-3 py-1 rounded-full backdrop-blur">
                Original
              </div>

            </div>

            <ArrowRight
              size={28}
              className="text-slate-500 flex-shrink-0"
            />

            {/* ROI */}

            <div className="relative group">

              <img
                src={ROIImage}
                alt=""
                className="w-40 h-64 object-cover rounded-2xl shadow-xl transition duration-300 group-hover:scale-105"
              />

              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/40 px-3 py-1 rounded-full backdrop-blur">
                Region of Interest
              </div>

            </div>

            <ArrowRight
              size={28}
              className="text-slate-500 flex-shrink-0"
            />

            {/* Enhanced */}

            <div className="relative overflow-hidden rounded-2xl shadow-xl group">

              <img
                src={EnhancedImage}
                alt=""
                className="w-40 h-64 object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-teal-400/20 to-cyan-500/50" />

              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/40 px-3 py-1 rounded-full backdrop-blur">
                Enhanced
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}