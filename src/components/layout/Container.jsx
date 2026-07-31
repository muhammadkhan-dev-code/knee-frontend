export default function Container({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#f4f7fb] flex flex-col items-center justify-center p-4 sm:p-6 font-sans">
      {/* Soft concentric background glows */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-[800px] h-[800px] rounded-full bg-radial from-slate-200/40 via-sky-100/30 to-transparent blur-3xl opacity-70" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-indigo-100/30 to-teal-100/30 blur-2xl opacity-60" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center my-auto py-8">
        {children}
      </div>
    </div>
  );
}

