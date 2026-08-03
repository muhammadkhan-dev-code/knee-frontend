import { ArrowRight, UserPlus, LogIn, Send } from "lucide-react";

export default function Button({
  children,
  variant = "primary",
  type = "button",
  icon = false,
  iconType = "arrow",
  onClick,
  disabled = false,
  className = "",
}) {
  const styles = {
    primary:
      "bg-[#1e204d] hover:bg-[#16183d] active:bg-[#11122e] text-white shadow-md shadow-[#1e204d]/25 border border-transparent",

    outline:
      "bg-white hover:bg-slate-50 active:bg-slate-100 text-[#1e204d] border border-slate-200 shadow-sm",

    light:
      "bg-[#f4f6fa] hover:bg-slate-200 active:bg-slate-300 text-[#1e204d] border border-transparent",

    success:
      "bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white shadow-md shadow-teal-600/25 border border-transparent",
  };

  const renderIcon = () => {
    if (!icon) return null;
    if (iconType === "login") return <LogIn size={18} strokeWidth={2.2} />;
    if (iconType === "user-plus") return <UserPlus size={18} strokeWidth={2.2} />;
    if (iconType === "send") return <Send size={16} strokeWidth={2.2} />;
    return <ArrowRight size={18} strokeWidth={2.2} />;
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full
        h-12
        px-5
        rounded-xl
        font-semibold
        text-[15px]
        tracking-wide
        transition-all
        duration-200
        flex
        items-center
        justify-center
        gap-2.5
        select-none
        disabled:opacity-60
        disabled:cursor-not-allowed
        hover:-translate-y-0.5
        active:translate-y-0
        active:scale-[0.99]
        cursor-pointer
        ${styles[variant] || styles.primary}
        ${className}
      `}
    >
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
}