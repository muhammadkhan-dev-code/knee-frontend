import { BrainCircuit, CheckCircle2 } from "lucide-react";

export default function AIResultCard() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[3px] text-[12px] font-semibold text-emerald-600 mb-5">
              03 — AI Analysis & KL Grade
            </p>

            <h2 className="text-5xl font-bold leading-tight text-slate-900">
              A clinically readable AI result
            </h2>

            <p className="mt-7 text-slate-500 leading-8 text-lg max-w-md">
              EfficientNet-B0 analyzes the prepared image, then KOA-AI
              presents a KL grade, confidence score, and visual explanation
              in one simple report.
            </p>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">

              {/* Header */}

              <div className="flex justify-between items-center px-6 py-5 bg-slate-50 border-b">

                <div>
                  <p className="text-xs text-slate-500 font-medium">
                    Case ID
                  </p>

                  <h3 className="font-semibold text-slate-900">
                    KOA-2026-042
                  </h3>
                </div>

                <span className="text-sm text-slate-500">
                  Aug 07, 2026
                </span>

              </div>

              {/* Prediction */}

              <div className="p-6">

                <p className="text-sm text-slate-500">
                  Predicted Severity
                </p>

                <div className="mt-3 flex items-center justify-between">

                  <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-semibold">

                    <BrainCircuit size={18} />

                    Grade 2 · Mild Osteoarthritis

                  </div>

                  <span className="font-bold text-slate-700">
                    92% Confidence
                  </span>

                </div>

                {/* Progress */}

                <div className="mt-8">

                  <div className="flex justify-between text-sm text-slate-500 mb-2">
                    <span>Model Confidence</span>
                    <span>92%</span>
                  </div>

                  <div className="h-3 rounded-full bg-slate-200 overflow-hidden">

                    <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"></div>

                  </div>

                </div>

                {/* Visual Explanation */}

                <div className="mt-8 p-5 rounded-2xl bg-emerald-50 border border-emerald-100">

                  <div className="flex gap-3">

                    <CheckCircle2
                      size={22}
                      className="text-emerald-600 mt-1 flex-shrink-0"
                    />

                    <p className="text-sm leading-7 text-slate-600">

                      X-Grad-CAM highlights image regions that contributed
                      most strongly to the classification, providing an
                      explainable visual interpretation instead of only a
                      numerical prediction.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}