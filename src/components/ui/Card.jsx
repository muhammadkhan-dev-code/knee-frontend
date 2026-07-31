import Logo from './Logo.jsx';

export default function Card({ maxWidth = "max-w-md", children, showLogo = true }) {
  return (
    <div
      className={`w-full ${maxWidth} bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-7 sm:p-10 transition-all duration-300`}
    >
      {showLogo && (
        <div className="flex justify-center mb-6">
          <Logo size={48} showText={true} />
        </div>
      )}

      {children}
    </div>
  );
}

