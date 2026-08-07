import {
  UploadCloud,
  ScanSearch,
  Cpu,
  Eye,
} from "lucide-react";

const workflowSteps = [
  {
    id: "01",
    title: "Upload X-Ray",
    description:
      "Doctor uploads a knee X-ray image through the KOA-AI web application.",
    icon: UploadCloud,
  },
  {
    id: "02",
    title: "Prepare Image",
    description:
      "ROI extraction and CLAHE enhancement prepare a clearer image for analysis.",
    icon: ScanSearch,
  },
  {
    id: "03",
    title: "AI Analysis",
    description:
      "EfficientNet-B0 identifies patterns associated with osteoarthritis severity.",
    icon: Cpu,
  },
  {
    id: "04",
    title: "Explain Results",
    description:
      "Review KL grade, confidence score, and an X-Grad-CAM heatmap.",
    icon: Eye,
  },
];

export default function WorkflowSection() {
  return (
    <div className="max-w-7xl mx-auto bg-white px-4 sm:px-6 lg:px-8 py-20">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-[13px] font-semibold uppercase tracking-[3px] text-emerald-600">
          From Image To Insight
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-slate-900">
          A clear workflow for explainable
          <br />
          assessment
        </h2>

        <p className="mt-6 text-lg text-slate-500 leading-8 max-w-2xl mx-auto">
          KOA-AI follows a simple process designed to make AI-assisted knee
          assessment easier to understand.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {workflowSteps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.id}
              className="group rounded-3xl border border-emerald-100 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-slate-200 group-hover:border-emerald-200 group-hover:bg-emerald-50 transition">
                <Icon
                  size={24}
                  className="text-slate-800 group-hover:text-emerald-600"
                />
              </div>

              {/* Number + Title */}
              <div className="mt-8 flex items-center gap-3">
                <span className="text-3xl font-bold text-slate-900">
                  {step.id}
                </span>

                <h3 className="text-2xl font-semibold text-slate-900">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-5 text-[16px] leading-8 text-slate-500">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}