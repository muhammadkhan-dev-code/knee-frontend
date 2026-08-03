
import logo from '/kneenet_logo.png';
import { Activity } from "lucide-react";

const Logo = ({ className = "", size = 42, showText = true, textSub = "KNEE OSTEOARTHRITIS ANALYSIS", darkMode = false }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative flex items-center justify-center shrink-0">
        <img
          src={logo}
          alt="KOA-AI Logo"
          style={{ width: size, height: size, objectFit: "contain" }}
          onError={(e) => {
            e.target.style.display = 'none';
            if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="hidden w-10 h-10 rounded-xl bg-[#1e204d] text-white flex items-center justify-center shadow-md">
          <Activity size={22} className="text-emerald-400" />
        </div>
      </div>

      {showText && (
        <div className="flex flex-col text-left justify-center leading-tight select-none">
          <span className={`font-extrabold text-lg tracking-tight ${darkMode ? "text-white" : "text-[#1e204d]"}`}>
            KOA-AI
          </span>
          {textSub && (
            <span className={`text-[8px] font-bold tracking-widest uppercase ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
              {textSub}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;