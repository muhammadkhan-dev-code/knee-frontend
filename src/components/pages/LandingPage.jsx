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
} from "lucide-react";
import Logo from "../ui/Logo.jsx";
import Button from "../ui/Button.jsx";

export default function LandingPage({ onNavigateToAuth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            {["Home", "Features", "How It Works", "Benefits", "About", "Contact"].map((item) => {
              const id = item.toLowerCase().replace(/\s+/g, "-");
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className="hover:text-[#1e204d] transition-colors py-1 cursor-pointer"
                >
                  {item}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigateToAuth("login")}
              className="hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-[#1e204d] hover:bg-[#16183d] active:bg-[#11122e] text-white text-sm font-semibold shadow-md shadow-[#1e204d]/20 transition-all duration-200 cursor-pointer"
            >
              Login / Register
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
              {["Home", "Features", "How It Works", "Benefits", "About", "Contact"].map((item) => {
                const id = item.toLowerCase().replace(/\s+/g, "-");
                return (
                  <a
                    key={item}
                    href={`#${id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#1e204d] py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    {item}
                  </a>
                );
              })}
            </nav>
            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToAuth("login");
                }}
                className="w-full py-3 rounded-xl bg-[#1e204d] text-white text-sm font-semibold text-center cursor-pointer shadow-md"
              >
                Login / Register
              </button>
            </div>
          </div>
        )}
      </header>


      {/* 2. Hero Section */}
      <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-[#f4f7fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left">


              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1e204d] tracking-tight leading-[1.15]">
                Precision Diagnostics for Knee Health, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e204d] to-indigo-600">Powered by AI.</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                Empower your clinical workflow with deep learning-based KOA detection. Get accurate KL grading and explainable heatmaps in seconds.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigateToAuth("signup")}
                  className="px-7 py-3.5 rounded-xl bg-[#1e204d] hover:bg-[#16183d] active:bg-[#11122e] text-white font-semibold text-sm shadow-lg shadow-[#1e204d]/25 transition-all duration-200 flex items-center gap-2.5 cursor-pointer hover:-translate-y-0.5"
                >
                  <span>Get Started</span>
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => {
                    const elem = document.getElementById("how-it-works");
                    if (elem) elem.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#1e204d] font-semibold text-sm border border-slate-200 shadow-sm transition-all duration-200 flex items-center gap-2 cursor-pointer"
                >
                  <Play size={16} className="fill-[#1e204d]" />
                  <span>Watch Demo</span>
                </button>
              </div>

              {/* Trust badges */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-200/80 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-teal-600 shrink-0" />
                  <span>Clinically Validated AI Models</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock size={18} className="text-teal-600 shrink-0" />
                  <span>Secure & HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 size={18} className="text-teal-600 shrink-0" />
                  <span>Evidence-Based Predictions</span>
                </div>
              </div>
            </div>

            {/* Right Graphic Preview */}
            <div className="lg:col-span-6 relative">
              {/* Outer frame */}
              <div className="relative rounded-2xl bg-[#0f172a] p-2 sm:p-3 shadow-2xl shadow-slate-900/30 border border-slate-800">
                <img
                  src="/xray-analysis.png"
                  alt="Knee X-Ray AI Analysis Visual"
                  className="w-full h-auto rounded-xl object-cover"
                />

                {/* Floating Prediction Score Badge */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-100 max-w-[220px] w-full text-center space-y-2.5">
                  <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase block">
                    Prediction Score
                  </span>

                  {/* Ring Progress Display */}
                  <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-100"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-amber-500"
                        strokeDasharray="78, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center leading-none">
                      <span className="text-xl font-extrabold text-[#1e204d]">78%</span>
                      <span className="text-[9px] font-bold text-amber-600 uppercase mt-0.5">HIGH RISK</span>
                    </div>
                  </div>

                  {/* Scale Breakdown */}
                  <div className="space-y-1 text-[10px] font-medium text-slate-500 pt-1 border-t border-slate-100">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" /> Low Risk
                      </span>
                      <span>&lt; 30%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-amber-500" /> Moderate Risk
                      </span>
                      <span>30% - 60%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-rose-500" /> High Risk
                      </span>
                      <span>&gt; 60%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Section ("Why Choose KOA-AI?") */}
      <section id="features" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e204d] tracking-tight">
            Why Choose KOA-AI?
          </h2>
          <div className="w-12 h-1 bg-[#1e204d] mx-auto mt-3 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-[#f8fafc] border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300 text-left space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#1e204d] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#1e204d]">Deep Learning Precision</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                Advanced machine learning models trained on diverse clinical datasets for reliable predictions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-[#f8fafc] border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300 text-left space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#1e204d] flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#1e204d]">Intelligent Clinical Insights</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                Empowers healthcare professionals with data-driven insights for better treatment planning.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-[#f8fafc] border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300 text-left space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#1e204d] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Lock size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#1e204d]">Enterprise-Grade Security</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                Enterprise-grade security to protect sensitive patient data and ensure complete confidentiality.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-2xl bg-[#f8fafc] border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300 text-left space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#1e204d] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#1e204d]">Built for Specialized Care</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                Designed for both clinical practice and research advancement in knee osteoarthritis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works Section */}
      <section id="how-it-works" className="py-20 bg-[#f8fafc] border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e204d] tracking-tight">
            How It Works
          </h2>
          <div className="w-12 h-1 bg-[#1e204d] mx-auto mt-3 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-[#1e204d]">
                <Upload size={26} />
              </div>
              <h3 className="text-base font-bold text-[#1e204d]">1. Upload Data</h3>
              <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                Upload patient data including imaging, clinical parameters, and demographics.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-[#1e204d]">
                <FlaskConical size={26} />
              </div>
              <h3 className="text-base font-bold text-[#1e204d]">2. AI Analysis</h3>
              <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                Our AI models analyze data using advanced algorithms and medical knowledge.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-[#1e204d]">
                <BarChart3 size={26} />
              </div>
              <h3 className="text-base font-bold text-[#1e204d]">3. Risk Prediction</h3>
              <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                Get an accurate risk score and progression prediction for knee osteoarthritis.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-[#1e204d]">
                <ClipboardList size={26} />
              </div>
              <h3 className="text-base font-bold text-[#1e204d]">4. Clinical Insight</h3>
              <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                Use insights to make informed decisions and improve patient outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Statistics Banner */}
      <section className="bg-[#1e204d] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x-0 sm:divide-x divide-slate-700/50">
            <div className="space-y-1.5 p-2">
              <div className="flex justify-center mb-2 text-teal-400">
                <Users size={28} />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">5,000+</div>
              <div className="text-xs font-bold tracking-wider text-slate-300 uppercase">
                Patients Analyzed
              </div>
            </div>

            <div className="space-y-1.5 p-2">
              <div className="flex justify-center mb-2 text-teal-400">
                <Building2 size={28} />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">50+</div>
              <div className="text-xs font-bold tracking-wider text-slate-300 uppercase">
                Healthcare Partners
              </div>
            </div>

            <div className="space-y-1.5 p-2">
              <div className="flex justify-center mb-2 text-teal-400">
                <CheckCircle2 size={28} />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">92%</div>
              <div className="text-xs font-bold tracking-wider text-slate-300 uppercase">
                Prediction Accuracy
              </div>
            </div>

            <div className="space-y-1.5 p-2">
              <div className="flex justify-center mb-2 text-teal-400">
                <BookOpen size={28} />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">20+</div>
              <div className="text-xs font-bold tracking-wider text-slate-300 uppercase">
                Research Studies
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Ready to Transform Banner */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-slate-50 to-indigo-50/50 p-8 sm:p-14 border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-xl shadow-slate-100">
            <div className="space-y-4 max-w-xl text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e204d] tracking-tight">
                Ready to Transform Knee Care?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Join the future of orthopedic diagnostics. Experience faster, more reliable knee osteoarthritis classification today.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigateToAuth("signup")}
                  className="px-6 py-3 rounded-xl bg-[#1e204d] hover:bg-[#16183d] text-white font-semibold text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
                >
                  <Users size={16} />
                  <span>Create an Account</span>
                </button>

                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#1e204d] font-semibold text-sm border border-slate-200 shadow-sm transition-all cursor-pointer flex items-center gap-2"
                >
                  <Mail size={16} />
                  <span>Contact Us</span>
                </a>
              </div>
            </div>

            {/* Desktop / Dashboard Illustration Frame */}
            <div className="w-full lg:w-96 rounded-2xl bg-white p-4 shadow-xl border border-slate-200/80">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <span className="w-3 h-3 rounded-full bg-rose-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="text-[10px] font-mono text-slate-400 ml-2">koa-ai.com/dashboard</span>
              </div>
              <div className="pt-3 space-y-3">
                <div className="h-16 rounded-xl bg-slate-100 p-3 flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="w-24 h-2 bg-slate-300 rounded" />
                    <div className="w-16 h-2 bg-slate-200 rounded" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#1e204d] text-white text-[10px] font-bold flex items-center justify-center">
                    KL-3
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-12 rounded-lg bg-teal-50 border border-teal-100 p-2 text-center">
                    <span className="text-[9px] font-bold text-teal-700 block">Accuracy</span>
                    <span className="text-xs font-extrabold text-teal-900">94.8%</span>
                  </div>
                  <div className="h-12 rounded-lg bg-indigo-50 border border-indigo-100 p-2 text-center">
                    <span className="text-[9px] font-bold text-indigo-700 block">Latency</span>
                    <span className="text-xs font-extrabold text-indigo-900">1.2s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer id="contact" className="bg-[#131536] text-slate-300 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Col 1: Brand */}
            <div className="space-y-4 text-left">
              <Logo size={36} showText={true} className="invert brightness-200" />
              <p className="text-xs text-slate-400 leading-relaxed">
                Empowering healthcare with AI-driven insights to predict, prevent, and personalize knee osteoarthritis care.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a href="#" aria-label="Website" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors">
                  <Globe size={16} />
                </a>
                <a href="#" aria-label="Share" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors">
                  <Share2 size={16} />
                </a>
                <a href="#" aria-label="Activity" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors">
                  <Activity size={16} />
                </a>
                <a href="mailto:info@koa-ai.com" aria-label="Email" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors">
                  <Mail size={16} />
                </a>
              </div>

            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-3 text-left">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2 text-xs font-medium text-slate-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#home" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Col 3: For Professionals */}
            <div className="space-y-3 text-left">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">For Professionals</h4>
              <ul className="space-y-2 text-xs font-medium text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">For Doctors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For Researchers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Clinical Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

            {/* Col 4: Contact Us */}
            <div className="space-y-3 text-left">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Us</h4>
              <ul className="space-y-2.5 text-xs font-medium text-slate-400">
                <li className="flex items-center gap-2.5">
                  <Mail size={16} className="text-teal-400 shrink-0" />
                  <span>info@koa-ai.com</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone size={16} className="text-teal-400 shrink-0" />
                  <span>+92 300 1234567</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin size={16} className="text-teal-400 shrink-0" />
                  <span>Lahore, Pakistan</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} KOA-AI Prediction System. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
