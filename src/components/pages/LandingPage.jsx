import { useState } from "react";
import {
  ShieldCheck,
  Lock,
  BarChart3,
  Lightbulb,
  TrendingUp,
  Users,
  Upload,
  FlaskConical,
  ClipboardList,
  Building2,
  CheckCircle2,
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Play,
  ArrowRight,
  ChevronRight,
  Activity,
  Globe,
  Share2,
  Menu,
  X,
  Sparkles,
  Stethoscope,
  FileText,
  Calendar,
  Layers,
  Heart
} from "lucide-react";
import Logo from "../resuable_comp/Logo.jsx";

export default function LandingPage({ onNavigateToAuth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStepTab, setActiveStepTab] = useState(1);
  const [selectedRole, setSelectedRole] = useState("Patient");

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] text-slate-800 font-sans selection:bg-[#1e204d] selection:text-white">
      {/* 1. Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Logo size={40} showText={true} />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {[
              { label: "Home", href: "#home" },
              { label: "Pathway", href: "#pathway" },
              { label: "AI Dashboard", href: "#dashboard-preview" },
              { label: "How It Works", href: "#steps" },
              { label: "About", href: "#about" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#1e204d] transition-colors py-1 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigateToAuth && onNavigateToAuth("login")}
              className="hidden sm:inline-flex px-4 py-2.5 rounded-xl text-[#1e204d] hover:bg-slate-100 text-sm font-semibold transition-colors cursor-pointer"
            >
              Sign In
            </button>

            <button
              onClick={() => onNavigateToAuth("login")}
              className="hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-[#1e204d] hover:bg-[#16183d] active:bg-[#11122e] text-white text-sm font-semibold shadow-md shadow-[#1e204d]/20 transition-all duration-200 cursor-pointer items-center gap-2"
            >
              <span>Launch Workspace</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:text-[#1e204d] hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
            <nav className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
              {[
                { label: "Home", href: "#home" },
                { label: "Pathway", href: "#pathway" },
                { label: "AI Dashboard", href: "#dashboard-preview" },
                { label: "How It Works", href: "#steps" },
                { label: "About", href: "#about" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#1e204d] py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToAuth("login");
                }}
                className="w-full py-2.5 rounded-xl border border-slate-200 text-[#1e204d] text-sm font-semibold text-center cursor-pointer"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToAuth("login");
                }}
                className="w-full py-2.5 rounded-xl bg-[#1e204d] text-white text-sm font-semibold text-center cursor-pointer shadow-md"
              >
                Launch App Workspace
              </button>
            </div>
          </div>
        )}
      </header>


      <section id="home" className="relative pt-10 pb-20 md:pt-16 md:pb-28 bg-gradient-to-b from-[#f0f9f6] via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">



          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Knee Osteoarthritis Care,{" "}
            <span className="text-[#102A2A]">Made Personal</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Understand your knee, reduce day-to-day discomfort, and explore a clinical AI care plan built around how you move.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigateToAuth("login")}
              className="px-7 py-3.5 rounded-2xl bg-[#059669] hover:bg-[#047857] active:bg-[#065f46] text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all duration-200 cursor-pointer flex items-center gap-2.5 hover:-translate-y-0.5"
            >
              <span>Explore your care options</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => {
                const elem = document.getElementById("pathway");
                if (elem) elem.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 shadow-sm transition-all duration-200 cursor-pointer"
            >
              Learn about knee OA
            </button>
          </div>

          {/* Hero UI Showcase Grid (1.png style) */}
          <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch text-left">
            {/* Left Card: Patient Info */}
            <div className="md:col-span-4 bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xl flex flex-col justify-between">
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-square mb-4">
                <img
                  src="/doctor_image.jpg"
                  alt="Doctor avatar"
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="flex items-center justify-between bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1e204d] text-white font-bold text-xs flex items-center justify-center shrink-0">
                    DM
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Daniel Mathew</h4>
                    <p className="text-xs text-slate-500">Female, 24 Years</p>
                  </div>
                </div>
                <button
                  onClick={() => onNavigateToAuth("login")}
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition-colors cursor-pointer"
                >
                  Consult
                </button>
              </div>
            </div>

            {/* Right Card: Clinical Dashboard Preview */}
            <div className="md:col-span-8 bg-white p-3 rounded-3xl border border-slate-200/80 shadow-xl flex flex-col justify-center items-center overflow-hidden">
              <img
                src="/dashboard-preview.png"
                alt="KOA-AI Dashboard Preview"
                className="w-full h-auto max-h-[380px] object-cover rounded-2xl hover:scale-[1.01] transition-transform duration-300 shadow-sm cursor-pointer"
                onClick={() => onNavigateToAuth("login")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Care Pathway Section (Derived from 2.png) */}
      <section id="pathway" className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-3">
            • Your care pathway
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            A clearer path to knee care
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Practical guidance and focused next steps—built around your symptoms, movement, and goals.
          </p>

          {/* 4 Cards Grid (2.png style) */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* Card 1 */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/70 hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900">Understand your symptoms</h3>
              <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                Learn which patterns of pain, stiffness, and joint space narrowing are worth discussing with a specialist.
              </p>
              <div className="mt-6 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>Symptom Intensity Tracking</span>
                  <span className="text-emerald-700 font-bold">Monthly Trend</span>
                </div>
                <div className="h-20 flex items-end gap-2 pt-2">
                  {[65, 45, 75, 30, 85, 50, 40].map((h, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full bg-[#059669] rounded-t-md transition-all duration-500"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/70 hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900">See the full picture</h3>
              <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                Bring your medical history, X-ray imaging, and everyday movement metrics into one clear diagnosis conversation.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-2.5">
                {[
                  { title: "Knee X-Ray", icon: FileText, color: "bg-emerald-600 text-white" },
                  { title: "KL Grade Result", icon: BarChart3, color: "bg-white text-slate-700 border border-slate-200" },
                  { title: "Joint Space", icon: Activity, color: "bg-white text-slate-700 border border-slate-200" },
                  { title: "Osteophyte Scan", icon: FlaskConical, color: "bg-white text-slate-700 border border-slate-200" },
                ].map((item) => (
                  <div key={item.title} className={`p-3 rounded-2xl flex items-center gap-2.5 text-xs font-bold ${item.color}`}>
                    <item.icon size={16} />
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/70 hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900">Build strength with confidence</h3>
              <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                Explore clinician-guided physical activity recommendations and targeted therapy support that fits real life.
              </p>
              <div className="mt-6 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-400">Recommended Care Plan</p>
                  <p className="text-sm font-bold text-slate-800 mt-0.5">Targeted Quadriceps Strengthening</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  Active
                </span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/70 hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900">Choose your next step</h3>
              <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                Review care options together, from lifestyle modifications to radiologist consultations and specialist referral.
              </p>
              <div className="mt-6 bg-[#1e204d] text-white p-4 rounded-2xl shadow-md flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-300">Next Consultation</p>
                  <p className="text-sm font-bold text-white mt-0.5">Dr. Ayesha Khan (Radiology)</p>
                </div>
                <button
                  onClick={() => onNavigateToAuth("login")}
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-500 text-white font-bold text-xs hover:bg-emerald-600 transition-colors cursor-pointer"
                >
                  Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Science & Real-time Dashboard Section (Derived from 3.png) */}
      <section id="dashboard-preview" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold mb-3">
              • Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Innovating for a <span className="italic font-serif">Smarter</span> Future
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              State of the art deep learning architecture creating smarter, simpler diagnostic solutions for knee osteoarthritis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Empower decisions with real-time dashboards
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Track, analyze, and act instantly with intuitive dashboards designed for high accuracy and rapid clinical diagnosis.
              </p>
              <div>
                <button
                  onClick={() => onNavigateToAuth("login")}
                  className="px-6 py-3 rounded-2xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  Explore Dashboard
                </button>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <p className="text-3xl font-black text-[#1e204d]">94.2%+</p>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Classification accuracy verified across Kellgren-Lawrence grades 0 through 4.
                </p>
              </div>
            </div>

            {/* Right Card (Knee Visual from 3.png) */}
            <div className="lg:col-span-7 bg-gradient-to-br from-emerald-600 via-teal-700 to-[#1e204d] p-6 sm:p-8 rounded-3xl shadow-2xl text-white">
              <div className="bg-white text-slate-800 p-6 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Knee Joint Overview</h4>
                    <p className="text-xs text-slate-500">Finished analyzing: <span className="text-emerald-600 font-semibold">Active Scan</span></p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600">
                      <Sparkles size={16} />
                    </button>
                    <button className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600">
                      <Heart size={16} />
                    </button>
                  </div>
                </div>

                <div className="relative flex items-center justify-center my-6">
                  <div className="w-56 h-56 rounded-full bg-emerald-50 flex items-center justify-center p-4 relative border-4 border-emerald-100">
                    <img
                      src="/xray-analysis.png"
                      alt="Knee Heatmap Visual"
                      className="w-full h-full object-cover rounded-full shadow-inner"
                    />
                    <div className="absolute -top-2 left-0 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                      Joint Space: 1.8mm
                    </div>
                    <div className="absolute -bottom-2 right-0 bg-[#1e204d] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                      KL Grade 2 (Mild OA)
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-semibold">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex justify-between">
                    <span className="text-slate-500">Joint Narrowing:</span>
                    <span className="text-amber-600 font-bold">Mild</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex justify-between">
                    <span className="text-slate-500">Confidence:</span>
                    <span className="text-emerald-600 font-bold">96.4%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Simple Steps Interactive Section (Derived from 4.png) */}
      <section id="steps" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-3">
            • Simple steps
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get Started in Minutes
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            From setup to insights—manage your clinic with just three easy steps.
          </p>

          {/* Tab Selector */}
          <div className="mt-8 flex justify-center border-b border-slate-200">
            {[
              { id: 1, label: "1 Quick Registration" },
              { id: 2, label: "2 Data Management" },
              { id: 3, label: "3 AI Diagnostics" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveStepTab(tab.id)}
                className={`py-3 px-6 text-sm font-bold border-b-2 transition-all cursor-pointer ${activeStepTab === tab.id
                  ? "border-[#059669] text-[#059669]"
                  : "border-transparent text-slate-400 hover:text-slate-600"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Interactive Step Content Box (4.png style) */}
          <div className="mt-8 max-w-4xl mx-auto bg-slate-50 p-4 sm:p-8 rounded-3xl border border-slate-200 text-left">
            <div className="bg-emerald-700 text-white rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-xl">
              {/* Left Info */}
              <div className="md:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-200">
                  Step {activeStepTab}
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  {activeStepTab === 1 && "Quickly create your account in minutes."}
                  {activeStepTab === 2 && "Upload X-ray images seamlessly."}
                  {activeStepTab === 3 && "Generate instant KL severity grade reports."}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                  {activeStepTab === 1 && "Choose your role as a doctor, patient, or clinic to access tailored AI diagnostic tools."}
                  {activeStepTab === 2 && "Drag & drop knee DICOM/JPG scans with automated pre-processing and joint space alignment."}
                  {activeStepTab === 3 && "View side-by-side XGrad-CAM heatmaps with confidence scoring and downloadable PDF reports."}
                </p>
              </div>

              {/* Right Form Card Mockup */}
              <div className="md:col-span-7 bg-white text-slate-800 p-5 rounded-2xl shadow-lg space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <Logo size={28} showText={true} />
                  <span className="text-[11px] font-semibold text-slate-400">Role Config</span>
                </div>

                {/* Role Switcher */}
                <div className="grid grid-cols-3 gap-2 p-1 rounded-xl bg-slate-100">
                  {["Clinic", "Patient", "Doctor"].map((role) => (
                    <button
                      key={role}
                      onClick={() => setSelectedRole(role)}
                      className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${selectedRole === role
                        ? "bg-emerald-600 text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                        }`}
                    >
                      Join as {role}
                    </button>
                  ))}
                </div>

                <div className="space-y-3 pt-1">
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase">First Name</label>
                    <input
                      type="text"
                      disabled
                      placeholder="Dr. Jane"
                      className="w-full h-9 px-3 text-xs rounded-xl bg-slate-50 border border-slate-200"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase">Email</label>
                    <input
                      type="text"
                      disabled
                      placeholder="doctor@hospital.com"
                      className="w-full h-9 px-3 text-xs rounded-xl bg-slate-50 border border-slate-200"
                    />
                  </div>
                </div>

                <button
                  onClick={() => onNavigateToAuth && onNavigateToAuth("signup")}
                  className="w-full py-2.5 rounded-xl bg-[#1e204d] text-white font-bold text-xs hover:bg-[#16183d] transition-colors cursor-pointer"
                >
                  Create Account Now →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-[#1e204d] text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <Logo size={36} showText={true} darkMode={true} />
            <p className="text-xs text-slate-400 leading-relaxed">
              AI-Powered Knee Osteoarthritis Severity Assessment System. Developed as an FYP medical diagnostic application.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">Quick Links</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#pathway" className="hover:text-white transition-colors">Care Pathway</a></li>
              <li><a href="#dashboard-preview" className="hover:text-white transition-colors">AI Dashboard</a></li>
              <li><a href="#steps" className="hover:text-white transition-colors">How it works</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">Clinical Severity</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Grade 0: Normal Knee</li>
              <li>Grade 1: Doubtful Narrowing</li>
              <li>Grade 2: Mild Osteoarthritis</li>
              <li>Grade 3: Moderate Osteoarthritis</li>
              <li>Grade 4: Severe Osteoarthritis</li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">Contact & Support</h5>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-center gap-2"><Mail size={14} /> support@koa-ai.org</p>
              <p className="flex items-center gap-2"><Phone size={14} /> +92 (051) 111-222-333</p>
              <p className="flex items-center gap-2"><MapPin size={14} /> University Medical Research Lab</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-8 border-t border-slate-800 text-center text-xs text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>© {new Date().getFullYear()} KOA-AI Knee Osteoarthritis Project. All rights reserved.</span>
          <div className="flex gap-4 text-xs">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
