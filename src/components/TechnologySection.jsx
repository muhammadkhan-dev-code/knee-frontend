import {
  ScanSearch,
  BrainCircuit,
  Eye,
  BarChart3,
} from "lucide-react";

const technologies = [
  {
    icon: ScanSearch,
    title: "Image Processing",
    subtitle: "ROI extraction + CLAHE",
  },
  {
    icon: BrainCircuit,
    title: "Deep Learning",
    subtitle: "EfficientNet-B0 model",
  },
  {
    icon: Eye,
    title: "Explainable AI",
    subtitle: "X-Grad-CAM heatmaps",
  },
  {
    icon: BarChart3,
    title: "Cross-Dataset Evaluation",
    subtitle: "Testing beyond one dataset",
  },
];

export default function TechnologySection() {
  return (
    <section className="bg-[#EEF8F5] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Technology designed for clearer,
            <br />
            explainable AI
          </h2>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {technologies.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl bg-white border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Icon */}

                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-500 transition">

                  <Icon
                    size={22}
                    className="text-emerald-600 group-hover:text-white transition"
                  />

                </div>

                {/* Title */}

                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                {/* Subtitle */}

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.subtitle}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}